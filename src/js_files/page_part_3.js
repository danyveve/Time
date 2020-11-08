var alreadyInitializedDraggable3_1 = false;
var alreadyInitializedDraggable3_2 = false;
var alreadyInitializedDraggable3_3 = false;

var alreadyInitializedDraggableSilabe3_1 = false;
var alreadyInitializedDraggableSilabe3_2 = false;
var alreadyInitializedDraggableSilabe3_3 = false;
var alreadyInitializedDraggableSilabe3_4 = false;
var alreadyInitializedDraggableSilabe3_5 = false;

let verifyingSilabe1 = false;
let verifyingSilabe2 = false;
let verifyingSilabe3 = false;
let verifyingSilabe4 = false;
let verifyingSilabe5 = false;
let verifyingSilabe6 = false;
let verifyingSilabe7 = false;
let verifyingSilabe8 = false;


var zileleSaptamaniiCounter = 1;
var silabeCounter = 1;

async function showImagesLesson3_1() {
    $("#calendar_lesson3").show(3000);
    await sleep(3000);
    $("#calendar_lesson3").addClass("pulse");

    await sleep(40000);
    $("#calendar_lesson3").removeClass("pulse").hide(1000);

    await sleep(5000);
    $("#luni").show(1000);
    await sleep(1250);
    $("#marti").show(1000);
    await sleep(1250);
    $("#miercuri").show(1000);
    await sleep(1500);
    $("#joi").show(1000);
    await sleep(1500);//53.5
    $("#vineri").show(1000);
    await sleep(1000);
    54.5
    $("#sambata").show(1000);
    await sleep(1000);
    $("#duminica").show(1000);
}

async function showImagesLesson3_2() {
    $("#luni").addClass("pulse");
    await sleep(8000);
    $("#luni").removeClass("pulse");
    $("#vineri").addClass("pulse");

    await sleep(8000);
    $("#vineri").removeClass("pulse");

    await sleep(5000);
    $("#luni").addClass("pulse");
    await sleep(1000);
    $("#marti").addClass("pulse");
    await sleep(1000);
    $("#luni").removeClass("pulse");
    await sleep(500);
    $("#miercuri").addClass("pulse");
    await sleep(500);
    $("#marti").removeClass("pulse");
    await sleep(1000);
    $("#joi").addClass("pulse");
    await sleep(500);
    $("#miercuri").removeClass("pulse");
    await sleep(500);
    $("#vineri").addClass("pulse");
    await sleep(1000);
    $("#joi").removeClass("pulse");
    await sleep(1000);
    $("#vineri").removeClass("pulse");

    await sleep(2000);
    $("#sambata").addClass("pulse");
    $("#duminica").addClass("pulse");

    await sleep(2000);
    $("#sambata").removeClass("pulse");
    $("#duminica").removeClass("pulse");

    await sleep(2000);
    $("#duminica").addClass("pulse");

    await sleep(4000);
    $("#duminica").removeClass("pulse");

    await sleep(2000);
    $("#luni").hide(1000);
    $("#marti").hide(1000);
    $("#miercuri").hide(1000);
    $("#joi").hide(1000);
    $("#vineri").hide(1000);
    $("#sambata").hide(1000);
    $("#duminica").hide(1000);

    await sleep(5000);
    $("#ianuarie").show(1000);
    $("#iulie").show(1000);
    $("#septembrie").show(1000);
    $("#decembrie").show(1000);

    await sleep(5000);
    $("#ianuarie").addClass("pulse");

    await sleep(5000); //55
    $("#decembrie").addClass("pulse");

    await sleep(1000);
    $("#ianuarie").removeClass("pulse");

    await sleep(4000);
    $("#iulie").addClass("pulse");

    await sleep(1000);
    $("#decembrie").removeClass("pulse");

    await sleep(4000);
    $("#septembrie").addClass("pulse");

    await sleep(1000);
    $("#iulie").removeClass("pulse");


    await sleep(5000);
    $("#septembrie").removeClass("pulse");
}

async function showImagesLesson3_3() {
    $("#decembrie").addClass("pulse");
    await sleep(8000);
    $("#decembrie").removeClass("pulse");

    $("#ianuarie").hide(1000);
    $("#iulie").hide(1000);
    $("#septembrie").hide(1000);
    $("#decembrie").hide(1000);
}

async function showImagesLesson3_outro() {
    await sleep(16000);
    $(".page_part_3").find(".left_arrow").show(2000);

    await sleep(4000);
    $(".page_part_3").find(".left_arrow").addClass("pulse");

    await sleep(6000);
    $(".page_part_3").find(".left_arrow").removeClass("pulse");
    $(".page_part_3").find(".left_arrow").hide(2000);

    await sleep(2000);

    localStorage.setItem("isLesson3Available", "true");
    playAudio("joc3_intrebare1");
}

function setupJoc3DragAndDropZileleSaptamanii() {
    if (zileleSaptamaniiCounter === 1) {
        setupJoc3DragAndDrop1();
    } else if (zileleSaptamaniiCounter === 2) {
        setupJoc3DragAndDrop2();
    } else if (zileleSaptamaniiCounter === 3) {
        setupJoc3DragAndDrop3();
    }
}

function showJoc3DragAndDropZileleSaptamanii() {
    if (zileleSaptamaniiCounter === 1) {
        showJoc3DragAndDrop1();
    } else if (zileleSaptamaniiCounter === 2) {
        showJoc3DragAndDrop2();
    } else if (zileleSaptamaniiCounter === 3) {
        showJoc3DragAndDrop3();
    }
}


async function showJoc3DragAndDrop1() {
    $(".zilele_saptamanii_draggable_zone1").show(2000);
    $(".zilele_saptamanii_droppable_zone1").show(2000);
}

function setupJoc3DragAndDrop1() {
    addDraggableListenersJoc3_1();
}

function addDraggableListenersJoc3_1() {
    if (alreadyInitializedDraggable3_1) return;

    initializeSilabe1Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint1");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".zilele_saptamanii_draggable_zone1").clone();
    var cloneDroppable = $(".zilele_saptamanii_droppable_zone1").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.zilele_saptamanii_sortable1'), {
            draggable: '.zi_saptamana_sort_item1',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".zi_saptamana_sort_item1").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe1) return;
        //check if finished
        var $zileSaptDroppable = $(".zilele_saptamanii_droppable_zone1");
        if ($zileSaptDroppable.find("#luni_draggable_1").length >= 1 &&
            $zileSaptDroppable.find("#marti_draggable_1").length >= 1 &&
            $zileSaptDroppable.find("#miercuri_draggable_1").length >= 1) {
            verifyingSilabe1 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".zilele_saptamanii_droppable_zone1", 3)) {
                $(".zi_saptamana_sort_item1").unbind();

                //we finished, so play final shit and go back to main page
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".zilele_saptamanii_draggable_zone1").hide(2000);
                $(".zilele_saptamanii_droppable_zone1").hide(2000);
                await sleep(2000);
                $(".zilele_saptamanii_droppable_zone1").replaceWith(cloneDroppable);
                $(".zilele_saptamanii_draggable_zone1").replaceWith(cloneDraggable);
                $(".zilele_saptamanii_draggable_zone1").hide(1);
                $(".zilele_saptamanii_droppable_zone1").hide(1);

                //playAudio("felicitari_lectie_completa");
                zileleSaptamaniiCounter = zileleSaptamaniiCounter + 1;
                playAudio("joc3_hint1");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveFromZileleSaptamanii1DroppableToDraggable();


                alreadyInitializedDraggable3_1 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveFromZileleSaptamanii1DroppableToDraggable();
                initializeSilabe1Listeners();
            }
            verifyingSilabe1 = false;
        } else {
            initializeSilabe1Listeners();
        }
    });

    alreadyInitializedDraggable3_1 = true;
}

function moveFromZileleSaptamanii1DroppableToDraggable() {
    $(".zilele_saptamanii_droppable_zone1").children().each(function () {
        $(this).detach().appendTo(".zilele_saptamanii_draggable_zone1");
    });
}

async function initializeSilabe1Listeners() {
    await sleep (200);
    $("#miercuri_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("miercuri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#luni_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("luni_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#marti_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("marti_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}








async function showJoc3DragAndDrop2() {
    $(".zilele_saptamanii_draggable_zone2").show(2000);
    $(".zilele_saptamanii_droppable_zone2").show(2000);
}

function setupJoc3DragAndDrop2() {
    addDraggableListenersJoc3_2();
}

function addDraggableListenersJoc3_2() {
    if (alreadyInitializedDraggable3_2) return;

    initializeSilabe2Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint1");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".zilele_saptamanii_draggable_zone2").clone();
    var cloneDroppable = $(".zilele_saptamanii_droppable_zone2").clone();


    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.zilele_saptamanii_sortable2'), {
            draggable: '.zi_saptamana_sort_item2',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".zi_saptamana_sort_item2").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe2) return;
        console.log('drag:stop');
        //check if finished
        var $zileSaptDroppable = $(".zilele_saptamanii_droppable_zone2");
        if ($zileSaptDroppable.find("#joi_draggable_2").length >= 1 &&
            $zileSaptDroppable.find("#vineri_draggable_2").length >= 1 &&
            $zileSaptDroppable.find("#miercuri_draggable_2").length >= 1) {
            verifyingSilabe2 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".zilele_saptamanii_droppable_zone2", 3)) {
                //we finished, so play final shit and go back to main page

                $(".zi_saptamana_sort_item2").unbind();

                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".zilele_saptamanii_draggable_zone2").hide(2000);
                $(".zilele_saptamanii_droppable_zone2").hide(2000);
                await sleep(2000);
                $(".zilele_saptamanii_droppable_zone2").replaceWith(cloneDroppable);
                $(".zilele_saptamanii_draggable_zone2").replaceWith(cloneDraggable);
                $(".zilele_saptamanii_draggable_zone2").hide(1);
                $(".zilele_saptamanii_droppable_zone2").hide(1);

                //playAudio("felicitari_lectie_completa");
                zileleSaptamaniiCounter = zileleSaptamaniiCounter + 1;
                playAudio("joc3_hint1");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveFromZileleSaptamanii2DroppableToDraggable();


                alreadyInitializedDraggable3_2 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveFromZileleSaptamanii2DroppableToDraggable();
                initializeSilabe2Listeners();
            }
            verifyingSilabe2 = false;
        } else {
            initializeSilabe2Listeners();
        }
    });

    alreadyInitializedDraggable3_2 = true;
}

function moveFromZileleSaptamanii2DroppableToDraggable() {
    $(".zilele_saptamanii_droppable_zone2").children().each(function () {
        $(this).detach().appendTo(".zilele_saptamanii_draggable_zone2");
    });
}

async function initializeSilabe2Listeners() {
    await sleep (200);
    $("#miercuri_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("miercuri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#joi_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("joi_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#vineri_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("vineri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}








async function showJoc3DragAndDrop3() {
    $(".zilele_saptamanii_draggable_zone3").show(2000);
    $(".zilele_saptamanii_droppable_zone3").show(2000);
}

function setupJoc3DragAndDrop3() {
    addDraggableListenersJoc3_3();
}

function addDraggableListenersJoc3_3() {
    if (alreadyInitializedDraggable3_3) return;

    initializeSilabe3Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint1");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".zilele_saptamanii_draggable_zone3").clone();
    var cloneDroppable = $(".zilele_saptamanii_droppable_zone3").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.zilele_saptamanii_sortable3'), {
            draggable: '.zi_saptamana_sort_item3',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".zi_saptamana_sort_item3").unbind('mouseleave mouseenter');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe3) return;
        console.log('drag:stop');
        //check if finished
        var $zileSaptDroppable = $(".zilele_saptamanii_droppable_zone3");
        if ($zileSaptDroppable.find("#vineri_draggable_3").length >= 1 &&
            $zileSaptDroppable.find("#sambata_draggable_3").length >= 1 &&
            $zileSaptDroppable.find("#duminica_draggable_3").length >= 1) {
            verifyingSilabe3 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".zilele_saptamanii_droppable_zone3", 3)) {
                //we finished, so play final shit and go back to main page
                $(".zi_saptamana_sort_item3").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".zilele_saptamanii_draggable_zone3").hide(2000);
                $(".zilele_saptamanii_droppable_zone3").hide(2000);
                await sleep(2000);
                $(".zilele_saptamanii_droppable_zone3").replaceWith(cloneDroppable);
                $(".zilele_saptamanii_draggable_zone3").replaceWith(cloneDraggable);
                $(".zilele_saptamanii_draggable_zone3").hide(1);
                $(".zilele_saptamanii_droppable_zone3").hide(1);

                playAudio("joc3_hint3");
                zileleSaptamaniiCounter = 1;
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveFromZileleSaptamanii3DroppableToDraggable();


                alreadyInitializedDraggable3_3 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveFromZileleSaptamanii3DroppableToDraggable();
                initializeSilabe3Listeners();
            }
            verifyingSilabe3 = false;
        } else {
            initializeSilabe3Listeners();
        }
    });

    alreadyInitializedDraggable3_3 = true;
}

function moveFromZileleSaptamanii3DroppableToDraggable() {
    $(".zilele_saptamanii_droppable_zone3").children().each(function () {
        $(this).detach().appendTo(".zilele_saptamanii_draggable_zone3");
    });
}

async function initializeSilabe3Listeners() {
    await sleep (200);
    $("#vineri_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("vineri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#sambata_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("sambata_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#duminica_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("duminica_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}







function setupJoc3DragAndDropSilabe() {
    if (silabeCounter === 1) {
        setupJoc3DragAndDropSilabe1();
    } else if (silabeCounter === 2) {
        setupJoc3DragAndDropSilabe2();
    } else if (silabeCounter === 3) {
        setupJoc3DragAndDropSilabe3();
    } else if (silabeCounter === 4) {
        setupJoc3DragAndDropSilabe4();
    } else if (silabeCounter === 5) {
        setupJoc3DragAndDropSilabe5();
    }
}

function showJoc3DragAndDropSilabe() {
    if (silabeCounter === 1) {
        showJoc3DragAndDropSilabe1();
    } else if (silabeCounter === 2) {
        showJoc3DragAndDropSilabe2();
    } else if (silabeCounter === 3) {
        showJoc3DragAndDropSilabe3();
    } else if (silabeCounter === 4) {
        showJoc3DragAndDropSilabe4();
    } else if (silabeCounter === 5) {
        showJoc3DragAndDropSilabe5();
    }
}




async function showJoc3DragAndDropSilabe1() {
    $(".silabe_draggable_zone1").show(2000);
    $(".silabe_droppable_zone1").show(2000);
}

async function setupJoc3DragAndDropSilabe1() {
    playAudio("septembrie_audio");
    await waitForAudioToBeFinished();
    addDraggableListenersJocSilabe3_1();
}

function addDraggableListenersJocSilabe3_1() {
    if (alreadyInitializedDraggableSilabe3_1) return;

    initializeSilabe4Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint3");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        playAudio("septembrie_audio");
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".silabe_draggable_zone1").clone();
    var cloneDroppable = $(".silabe_droppable_zone1").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.silabe_sortable1'), {
            draggable: '.silaba_sort_item1',
            delay: 0,
        }
    );


    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".silaba_sort_item1").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe4) return;
        //check if finished
        var $silabedroppable = $(".silabe_droppable_zone1");
        if ($silabedroppable.find("#sep_draggable_1").length >= 1 &&
            $silabedroppable.find("#tem_draggable_1").length >= 1 &&
            $silabedroppable.find("#bri_draggable_1").length >= 1 &&
            $silabedroppable.find("#e_draggable_1").length >= 1) {
            verifyingSilabe4 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".silabe_droppable_zone1", 4)) {
                //we finished, so play final shit and go back to main page
                $(".silaba_sort_item1").unbind();

                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".silabe_draggable_zone1").hide(2000);
                $(".silabe_droppable_zone1").hide(2000);
                await sleep(2000);
                $(".silabe_droppable_zone1").replaceWith(cloneDroppable);
                $(".silabe_draggable_zone1").replaceWith(cloneDraggable);
                $(".silabe_draggable_zone1").hide(1);
                $(".silabe_droppable_zone1").hide(1);

                //playAudio("felicitari_lectie_completa");
                silabeCounter = silabeCounter + 1;
                playAudio("joc3_hint3");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveSilabe1DroppableToDraggable();


                alreadyInitializedDraggableSilabe3_1 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveSilabe1DroppableToDraggable();
                initializeSilabe4Listeners();
            }
            verifyingSilabe4 = false;
        } else {
            initializeSilabe4Listeners();
        }
    });

    alreadyInitializedDraggableSilabe3_1 = true;
}

function moveSilabe1DroppableToDraggable() {
    $(".silabe_droppable_zone1").children().each(function () {
        $(this).detach().appendTo(".silabe_draggable_zone1");
    });
}

async function initializeSilabe4Listeners() {
    await sleep(200);
    $("#sep_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("sep_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#tem_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("tem_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#bri_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("bri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#e_draggable_1").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("e_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}









async function showJoc3DragAndDropSilabe2() {
    $(".silabe_draggable_zone2").show(2000);
    $(".silabe_droppable_zone2").show(2000);
}

async function setupJoc3DragAndDropSilabe2() {
    playAudio("octombrie_audio");
    await waitForAudioToBeFinished();
    addDraggableListenersJocSilabe3_2();
}

function addDraggableListenersJocSilabe3_2() {
    if (alreadyInitializedDraggableSilabe3_2) return;

    initializeSilabe5Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint3");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        playAudio("octombrie_audio");
        await waitForAudioToBeFinished();
    });


    var cloneDraggable = $(".silabe_draggable_zone2").clone();
    var cloneDroppable = $(".silabe_droppable_zone2").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.silabe_sortable2'), {
            draggable: '.silaba_sort_item2',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".silaba_sort_item2").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe5) return;
        //check if finished
        var $silabedropable = $(".silabe_droppable_zone2");
        if ($silabedropable.find("#oc_draggable_2").length >= 1 &&
            $silabedropable.find("#tom_draggable_2").length >= 1 &&
            $silabedropable.find("#bri_draggable_2").length >= 1 &&
            $silabedropable.find("#e_draggable_2").length >= 1) {
            verifyingSilabe5 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".silabe_droppable_zone2", 4)) {
                //we finished, so play final shit and go back to main page
                $(".silaba_sort_item2").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".silabe_draggable_zone2").hide(2000);
                $(".silabe_droppable_zone2").hide(2000);
                await sleep(2000);
                $(".silabe_droppable_zone2").replaceWith(cloneDroppable);
                $(".silabe_draggable_zone2").replaceWith(cloneDraggable);
                $(".silabe_draggable_zone2").hide(1);
                $(".silabe_droppable_zone2").hide(1);

                //playAudio("felicitari_lectie_completa");
                silabeCounter = silabeCounter + 1;
                playAudio("joc3_hint3");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveSilabe2DroppableToDraggable();


                alreadyInitializedDraggableSilabe3_2 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveSilabe2DroppableToDraggable();
                initializeSilabe5Listeners();
            }
            verifyingSilabe5 = false;
        } else {
            initializeSilabe5Listeners();
        }
    });

    alreadyInitializedDraggableSilabe3_2 = true;
}

function moveSilabe2DroppableToDraggable() {
    $(".silabe_droppable_zone2").children().each(function () {
        $(this).detach().appendTo(".silabe_draggable_zone2");
    });
}

async function initializeSilabe5Listeners() {
    await sleep(200);
    $("#oc_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("oc_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#tom_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("tom_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#bri_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("bri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#e_draggable_2").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("e_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}







async function showJoc3DragAndDropSilabe3() {
    $(".silabe_draggable_zone3").show(2000);
    $(".silabe_droppable_zone3").show(2000);
}

async function setupJoc3DragAndDropSilabe3() {
    playAudio("noiembrie_audio");
    await waitForAudioToBeFinished();
    addDraggableListenersJocSilabe3_3();
}

function addDraggableListenersJocSilabe3_3() {
    if (alreadyInitializedDraggableSilabe3_3) return;

    initializeSilabe6Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint3");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        playAudio("noiembrie_audio");
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".silabe_draggable_zone3").clone();
    var cloneDroppable = $(".silabe_droppable_zone3").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.silabe_sortable3'), {
            draggable: '.silaba_sort_item3',
            delay: 0,
        }
    );


    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".silaba_sort_item3").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe6) return;
        //check if finished
        var $silabedropable = $(".silabe_droppable_zone3");
        if ($silabedropable.find("#no_draggable_3").length >= 1 &&
            $silabedropable.find("#iem_draggable_3").length >= 1 &&
            $silabedropable.find("#bri_draggable_3").length >= 1 &&
            $silabedropable.find("#e_draggable_3").length >= 1) {
            verifyingSilabe6 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".silabe_droppable_zone3", 4)) {
                //we finished, so play final shit and go back to main page
                $(".silaba_sort_item3").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".silabe_draggable_zone3").hide(2000);
                $(".silabe_droppable_zone3").hide(2000);
                await sleep(2000);
                $(".silabe_droppable_zone3").replaceWith(cloneDroppable);
                $(".silabe_draggable_zone3").replaceWith(cloneDraggable);
                $(".silabe_draggable_zone3").hide(1);
                $(".silabe_droppable_zone3").hide(1);

                //playAudio("felicitari_lectie_completa");
                silabeCounter = silabeCounter + 1;
                playAudio("joc3_hint3");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveSilabe3DroppableToDraggable();


                alreadyInitializedDraggableSilabe3_3 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveSilabe3DroppableToDraggable();
                initializeSilabe6Listeners();
            }
            verifyingSilabe6 = false;
        } else {
            initializeSilabe6Listeners();
        }
    });

    alreadyInitializedDraggableSilabe3_3 = true;
}

function moveSilabe3DroppableToDraggable() {
    $(".silabe_droppable_zone3").children().each(function () {
        $(this).detach().appendTo(".silabe_draggable_zone3");
    });
}

async function initializeSilabe6Listeners() {
    await sleep (200);
    $("#no_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("no_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#iem_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("iem_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#bri_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("bri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#e_draggable_3").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("e_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}











async function showJoc3DragAndDropSilabe4() {
    $(".silabe_draggable_zone4").show(2000);
    $(".silabe_droppable_zone4").show(2000);
}

async function setupJoc3DragAndDropSilabe4() {
    playAudio("decembrie_audio");
    await waitForAudioToBeFinished();
    addDraggableListenersJocSilabe3_4();
}

function addDraggableListenersJocSilabe3_4() {
    if (alreadyInitializedDraggableSilabe3_4) return;

    initializeSilabe7Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint3");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        playAudio("decembrie_audio");
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".silabe_draggable_zone4").clone();
    var cloneDroppable = $(".silabe_droppable_zone4").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.silabe_sortable4'), {
            draggable: '.silaba_sort_item4',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".silaba_sort_item4").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe7) return;
        //check if finished
        var $silabedropable = $(".silabe_droppable_zone4");
        if ($silabedropable.find("#de_draggable_4").length >= 1 &&
            $silabedropable.find("#cem_draggable_4").length >= 1 &&
            $silabedropable.find("#bri_draggable_4").length >= 1 &&
            $silabedropable.find("#e_draggable_4").length >= 1) {
            verifyingSilabe7 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".silabe_droppable_zone4", 4)) {
                //we finished, so play final shit and go back to main page
                $(".silaba_sort_item4").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".silabe_draggable_zone4").hide(2000);
                $(".silabe_droppable_zone4").hide(2000);
                await sleep(2000);
                $(".silabe_droppable_zone4").replaceWith(cloneDroppable);
                $(".silabe_draggable_zone4").replaceWith(cloneDraggable);
                $(".silabe_draggable_zone4").hide(1);
                $(".silabe_droppable_zone4").hide(1);

                //playAudio("felicitari_lectie_completa");
                silabeCounter = silabeCounter + 1;
                playAudio("joc3_hint3");
                //await waitForAudioToBeFinished();

                //showMainPage();

                moveSilabe4DroppableToDraggable();


                alreadyInitializedDraggableSilabe3_4 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveSilabe4DroppableToDraggable();
                initializeSilabe7Listeners();
            }
            verifyingSilabe7 = false;
        } else {
            initializeSilabe7Listeners()
        }
    });

    alreadyInitializedDraggableSilabe3_4 = true;
}

function moveSilabe4DroppableToDraggable() {
    $(".silabe_droppable_zone4").children().each(function () {
        $(this).detach().appendTo(".silabe_draggable_zone4");
    });
}

async function initializeSilabe7Listeners() {
    await sleep (200);
    $("#de_draggable_4").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("de_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#cem_draggable_4").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("cem_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#bri_draggable_4").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("bri_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#e_draggable_4").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("e_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}










async function showJoc3DragAndDropSilabe5() {
    $(".silabe_draggable_zone5").show(2000);
    $(".silabe_droppable_zone5").show(2000);
}

async function setupJoc3DragAndDropSilabe5() {
    playAudio("sambata_audio");
    await waitForAudioToBeFinished();
    addDraggableListenersJocSilabe3_5();
}

function addDraggableListenersJocSilabe3_5() {
    if (alreadyInitializedDraggableSilabe3_5) return;

    initializeSilabe8Listeners();

    lastPlayedQuestion = document.getElementById("joc3_hint3");

    $(".page_part_3 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_3 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        playAudio("sambata_audio");
        await waitForAudioToBeFinished();
    });



    var cloneDraggable = $(".silabe_draggable_zone5").clone();
    var cloneDroppable = $(".silabe_droppable_zone5").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.silabe_sortable5'), {
            draggable: '.silaba_sort_item5',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".silaba_sort_item5").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async () => {
        if (verifyingSilabe8) return;
        //check if finished
        var $silabedropable = $(".silabe_droppable_zone5");
        if ($silabedropable.find("#sam_draggable_5").length >= 1 &&
            $silabedropable.find("#ba_draggable_5").length >= 1 &&
            $silabedropable.find("#ta_draggable_5").length >= 1) {
            verifyingSilabe8 = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".silabe_droppable_zone5", 3)) {
                //we finished, so play final shit and go back to main page
                $(".silaba_sort_item5").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".silabe_draggable_zone5").hide(2000);
                $(".silabe_droppable_zone5").hide(2000);
                await sleep(2000);
                $(".silabe_droppable_zone5").replaceWith(cloneDroppable);
                $(".silabe_draggable_zone5").replaceWith(cloneDraggable);
                $(".silabe_draggable_zone5").hide(1);
                $(".silabe_droppable_zone5").hide(1);

                playAudio("felicitari_lectie_completa");
                silabeCounter = 1;
                await waitForAudioToBeFinished();

                showMainPage();

                moveSilabe5DroppableToDraggable();


                alreadyInitializedDraggableSilabe3_5 = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveSilabe5DroppableToDraggable();
                initializeSilabe8Listeners();
            }
            verifyingSilabe8 = false;
        } else {
            initializeSilabe8Listeners();
        }
    });

    alreadyInitializedDraggableSilabe3_5 = true;
}

function moveSilabe5DroppableToDraggable() {
    $(".silabe_droppable_zone5").children().each(function () {
        $(this).detach().appendTo(".silabe_draggable_zone5");
    });
}

async function initializeSilabe8Listeners() {
    await sleep (200);
    $("#sam_draggable_5").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("sam_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#ba_draggable_5").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("ba_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#ta_draggable_5").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("ta_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}