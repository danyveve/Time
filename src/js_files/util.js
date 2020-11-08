function checkIfElementsAreInOrder(containerSelector, nrOfElements) {
    var i = 1;
    var answer = true;
    $(containerSelector).children().each(function () {
        if(!$(this).hasClass("order_" + i)){
            answer = false;
        }
        i = i + 1;
    });
    return answer;
}

function stopLastPlayedAudio() {
    lastPlayedAudio.pause();
    lastPlayedAudio.currentTime = 0;
}

function playAudio(audioId) {
    if (lastPlayedAudio !== null) {
        stopLastPlayedAudio();
        $(".speech_div").addClass('d-none')
    }
    lastPlayedAudio = document.getElementById(audioId);
    lastPlayedAudio.play();
    $(".speech_div").removeClass('d-none')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function closeBubble() {
    $(".speech_div").addClass('d-none');
}

async function waitForAudioToBeFinished() {
    let timeToBeWaited = lastPlayedAudio.duration - lastPlayedAudio.currentTime;
    if (timeToBeWaited !== 0) {
        await sleep(timeToBeWaited * 1000);
    }
}


///////////////////////////////// MAIN PAGE RELATED stuff = must be here because we will use it in many other js files///////////////////////////////////////////////

async function showMainPage() {
    //first hide all the content from all pages
    $(".page").addClass('d-none');

    //show content of main page and block lessons accordingly
    $(".main_page").removeClass('d-none');

    decideLessonScrollStatus(1);
    decideLessonScrollStatus(2);
    decideLessonScrollStatus(3);
    decideLessonScrollStatus(4);

    //add listeners for hover/click to the scrolls, but first wait so that Leo finishes his sentence before adding the listeners
    await waitForAudioToBeFinished();
    addMainPageListeners();
}

function hideMainPage() {
    //hide content of main page and remove lessons classes (pulsing or blocked)
    $(".main_page").addClass('d-none');
    $("#lesson1").removeClass('pulse').removeClass('blocked').removeClass('highlight_lesson_scroll').removeClass('completed_lesson_scroll');
    $("#lesson2").removeClass('pulse').removeClass('blocked').removeClass('highlight_lesson_scroll').removeClass('completed_lesson_scroll');
    $("#lesson3").removeClass('pulse').removeClass('blocked').removeClass('highlight_lesson_scroll').removeClass('completed_lesson_scroll');
    $("#lesson4").removeClass('pulse').removeClass('blocked').removeClass('highlight_lesson_scroll').removeClass('completed_lesson_scroll');

    //remove the event listeners so we don't have double or multiple triggers on the same element
    removeMainPageListeners();
}


function decideLessonScrollStatus(nr) {
    $("#lesson" + nr).addClass('pulse');
}

function addMainPageListeners() {
    decideLessonScrollListeners('1');
    decideLessonScrollListeners('2');
    decideLessonScrollListeners('3');
    decideLessonScrollListeners('4');
}

function decideLessonScrollListeners(nr) {
        makeLessonHighlightable('#lesson' + nr);
        //when clicking a lesson scroll
        $("#lesson" + nr).click(function () {
            //go to the page of the lesson
            goToPagePart(nr);
            //when the above method is called, the audio of the lesson is instantly played. On each <audio> tag on html, we have an onplay attribute which
            //calls a function that will slideshow stuff on the screen while leo is talking and presenting stuff
        });
}

function makeLessonHighlightable(lessonId) {
    $(lessonId).mouseenter(function () {
        $(this).removeClass('pulse').addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).addClass('pulse').removeClass('highlight_lesson_scroll');
    })
}

function removeMainPageListeners() {
    removeLessonEventListeners("#lesson1");
    removeLessonEventListeners("#lesson2");
    removeLessonEventListeners("#lesson3");
    removeLessonEventListeners("#lesson4");
}

function removeLessonEventListeners(lessonId) {
    $(lessonId).unbind('hover click');
}

function makeSubmenuHighlightable(submenuId) {
    $(submenuId).mouseenter(function () {
        $(this).removeClass('pulse').addClass('highlight_lesson_scroll');
        playAudio(submenuId.substring(1) + "_audio");
    }).mouseleave(function () {
        $(this).addClass('pulse').removeClass('highlight_lesson_scroll');
    })
}

function addSubmenuListeners(nr) {
    $("#submenu_item_lectie_part_" + nr).addClass('pulse');
    $("#submenu_item_lectie_part_" + nr).click(function() {
        startLessonPart(nr);
    });
    makeSubmenuHighlightable("#submenu_item_lectie_part_" + nr);

    if(localStorage.getItem("isLesson" + nr +"Available") === "true") {
        $("#submenu_item_joc_part_" + nr).addClass('pulse');
        $("#submenu_item_joc_part_" + nr).click(function () {
            startGamePart(nr);
        });
        makeSubmenuHighlightable("#submenu_item_joc_part_" + nr);
    } else {
        $("#submenu_item_joc_part_" + nr).addClass('blocked');
    }

    $("#submenu_go_back_part_" + nr).mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("inapoi_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).click(function () {
        removeSubmenuListeners(nr);
        $(".submenu_part_" + nr).addClass('d-none');
        showMainPage();
    });
}

function goToPagePart(nr) {
    //first hide main page
    hideMainPage();

    //then make the other page visible
    $(".page_part_" + nr).removeClass('d-none');

    addSubmenuListeners(nr);

    //then make the submenu visible
    $(".submenu_part_" + nr).removeClass('d-none');
}

function startLessonPart(nr) {
    removeSubmenuListeners(nr);

    $(".submenu_part_" + nr).addClass('d-none');

    playAudio('lectie' + nr + "_part" + 1);
}

function removeSubmenuListeners(nr) {
    $("#submenu_item_joc_part_" + nr).unbind('hover click');
    $("#submenu_item_lectie_part_" + nr).unbind('hover click');
    $("#submenu_go_back_part_" + nr).unbind('hover click');
}

async function startGamePart(nr) {
    removeSubmenuListeners(nr);

    $(".submenu_part_" + nr).addClass('d-none');
    $(".submenu_part_" + nr).children().each(function () {
        $(this).removeClass('pulse').removeClass('blocked');
    });

    if (nr === "4") {
        playAudio("joc4_hint");
        await waitForAudioToBeFinished();
    }

    if (nr === "3"){
        playAudio("joc3_hint1");
        await waitForAudioToBeFinished();
        return;
    }
    playAudio("joc" + nr + "_intrebare" + 1);
    //playAudio("joc1_hint2");
}