let alreadyShown = false;
let lastPlayedQuestion = null;
let alreadyInitializedMomenteleZileDraggable = null;
let verifyingMomenteleZilei = false;

async function showImagesLesson1_1() {
    $("#mum_hug").delay(16000).show(2500);
    $("#hot_tea").delay(22000).show(2500);
    $("#mum_hug").delay(28000).hide(2500);
    $("#hot_tea").delay(22000).hide(2500);

    $("#dimineata").delay(54500).show(1000);
    $("#pranzul").delay(56000).show(1000);
    $("#dupamasa").delay(57000).show(1000);
    $("#seara").delay(58000).show(1000);
    $("#noaptea").delay(59000).show(1000);

    await sleep(61000);
    $("#dimineata").addClass('pulse');
    await sleep(9500);
    $("#dimineata").removeClass('pulse');

    await sleep(500);
    $("#pranzul").addClass('pulse');
    await sleep(5000);
    $("#pranzul").removeClass('pulse');

    await sleep(500);
    $("#dupamasa").addClass('pulse');
    await sleep(5000);
    $("#dupamasa").removeClass('pulse');

    await sleep(250);
    $("#seara").addClass('pulse');
    await sleep(12000);
    $("#seara").removeClass('pulse');

    await sleep(500);
    $("#noaptea").addClass('pulse');
    await sleep(3000);
    $("#noaptea").removeClass('pulse');

    await sleep(1000);

    $("#dimineata").hide(1000);
    $("#pranzul").hide(1000);
    $("#dupamasa").hide(1000);
    $("#seara").hide(1000);
    $("#noaptea").hide(1000);
}

async function showImagesLesson1_2() {
    await sleep(11000);
    $("#cantar").show(1500);

    await sleep(5000);
    $("#metru").show(1500);

    await sleep(3000);
    $("#cantar").hide(1000);
    $("#metru").hide(1000);

    await sleep(1000);
    $("#ceas").show(3000);

    await sleep(12000);
    $("#ceas").addClass('pulse');

    await sleep(22000);
    $("#ceas").removeClass('pulse');

    await sleep(24000);
    $("#cronometru").show(2000);

    await sleep(2000);
    $("#clepsidra").show(2000);

    await sleep(2000);
    $("#clepsidra").addClass('pulse');

    await sleep(46000);
    $("#clepsidra").removeClass('pulse');

    await sleep(1000);
    $("#cronometru").addClass('pulse');

    await sleep(32000);
    $("#cronometru").removeClass('pulse');

}

async function showImagesLesson1_3() {
    await sleep(12000);
    $("#calendar").show(2500);
    await sleep(2500);
    $("#calendar").addClass('pulse');

    await sleep(26500);
    $("#calendar").removeClass('pulse');
}

async function showImagesLesson1_outro() {
    await sleep(17000);
    $(".page_part_1").find(".left_arrow").show(2500);
    await sleep(2500);
    $(".page_part_1").find(".left_arrow").addClass('pulse');
    await sleep(6000);
    $(".page_part_1").find(".left_arrow").removeClass('pulse');
    $(".page_part_1").find(".left_arrow").hide(1500);

    $("#ceas").hide(1500);
    $("#clepsidra").hide(1500);
    $("#cronometru").hide(1500);
    $("#calendar").hide(1500);

    await sleep(3000);
    playAudio("joc1_intrebare1");
    localStorage.setItem("isLesson1Available", "true");
}


function showAnswers() {
    if (alreadyShown) return;
    alreadyShown = true;

    $("#question_mark_joc1").show(2500);
    $("#raspuns_ceas").show(2500);
    $("#clepsidra_cronometru").show();
    $("#raspuns_clepsidra").show(2500);
    $("#raspuns_cronometru").show(2500);
    $("#raspuns_calendar").show(2500);
}

async function setupJoc1Intrebare1() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare1");

    $("#raspuns_ceas").addClass("correct");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("wrong");

    addListenersJoc1("joc1_intrebare9");
}

async function setupJoc1Intrebare2() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare2");

    $("#raspuns_ceas").addClass("correct");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("wrong");

    addListenersJoc1("joc1_intrebare6");
}

async function setupJoc1Intrebare3() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare3");

    $("#raspuns_ceas").addClass("correct");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("wrong");

    addListenersJoc1("joc1_intrebare5");
}

async function setupJoc1Intrebare4() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare4");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("correct");
    $("#raspuns_calendar").addClass("wrong");

    addListenersJoc1("joc1_intrebare2");
}

async function setupJoc1Intrebare5() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare5");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("correct");
    $("#raspuns_calendar").addClass("wrong");

    addListenersJoc1("joc1_intrebare7");
}

async function setupJoc1Intrebare6() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare6");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("correct");

    addListenersJoc1("joc1_intrebare3");
}

async function setupJoc1Intrebare7() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare7");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("correct");

    addListenersJoc1("joc1_intrebare10");
}

async function setupJoc1Intrebare8() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare8");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("correct");

    addListenersJoc1("joc1_intrebare4");
}

async function setupJoc1Intrebare9() {
    $("#raspuns_ceas").removeClass("correct").removeClass("wrong");
    $("#clepsidra_cronometru").removeClass("correct").removeClass("wrong");
    $("#raspuns_calendar").removeClass("correct").removeClass("wrong");

    playAudio("joc1_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc1_intrebare9");

    $("#raspuns_ceas").addClass("wrong");
    $("#clepsidra_cronometru").addClass("wrong");
    $("#raspuns_calendar").addClass("correct");

    addListenersJoc1("joc1_intrebare8");
}

function addListenersJoc1(nextQuestionId) {
    $("#raspuns_ceas").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("ceasul_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $("#raspuns_cronometru").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        $("#raspuns_clepsidra").addClass('highlight_lesson_scroll');
        playAudio("clepsidra_sau_cronometrul_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
        $("#raspuns_clepsidra").removeClass('highlight_lesson_scroll');
    });

    $("#raspuns_calendar").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("calendarul_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $("#raspuns_ceas").on("click", async function () {
        if ($(this).hasClass("wrong")) {
            playAudio("ups");
            removeListenersJoc1();
            await waitForAudioToBeFinished();
            addListenersJoc1(nextQuestionId);
        } else {
            playAudio("bravo");
            removeListenersJoc1();
            await waitForAudioToBeFinished();
            playAudio(nextQuestionId);
        }
    });

    $("#raspuns_cronometru").on("click", async function () {
        if ($(this).parent().hasClass("wrong")) {
            playAudio("ups");
            removeListenersJoc1();
            await waitForAudioToBeFinished();
            addListenersJoc1(nextQuestionId);
        } else {
            playAudio("bravo");
            removeListenersJoc1();
            await waitForAudioToBeFinished();
            playAudio(nextQuestionId);
        }
    });

    $("#raspuns_calendar").on("click", async function () {
        if ($(this).hasClass("wrong")) {
            removeListenersJoc1();
            playAudio("ups");
            await waitForAudioToBeFinished();
            addListenersJoc1(nextQuestionId);
        } else {
            removeListenersJoc1();
            playAudio("bravo");
            await waitForAudioToBeFinished();
            playAudio(nextQuestionId);
        }
    });


    $(".page_part_1 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_1 .audio_button").on("click", async function () {
        removeListenersJoc1();
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        await sleep(document.getElementById("joc1_hint").duration * 1000);
        addListenersJoc1(nextQuestionId);
    });
}

function removeListenersJoc1() {
    $("#raspuns_ceas").unbind();
    $("#raspuns_cronometru").unbind();
    $("#raspuns_calendar").unbind();
    $(".audio_button").unbind();

    $("#raspuns_ceas").removeClass("highlight_lesson_scroll");
    $("#raspuns_clepsidra").removeClass("highlight_lesson_scroll");
    $("#raspuns_cronometru").removeClass("highlight_lesson_scroll");
    $("#raspuns_calendar").removeClass("highlight_lesson_scroll");
    $(".audio_button").removeClass("highlight_lesson_scroll");
}

async function showDragAndDropJoc1() {
    alreadyShown = false;

    $("#question_mark_joc1").hide(2500);
    $("#raspuns_ceas").hide(2500);
    $("#clepsidra_cronometru").hide();
    $("#raspuns_clepsidra").hide(2500);
    $("#raspuns_cronometru").hide(2500);
    $("#raspuns_calendar").hide(2500);

    $(".moment_zi_draggable_zone").show(2000);
    $(".moment_zi_droppable_zone").show(2000);
}

function setupJoc1DragAndDrop() {
    addDraggableListeners();
}

function moveFromMomenteleZileiDroppableToDraggable() {
    $(".moment_zi_droppable_zone").children().each(function () {
        $(this).detach().appendTo(".moment_zi_draggable_zone");
    });
}

function addDraggableListeners() {

    if(alreadyInitializedMomenteleZileDraggable) return;

    initializeMomenteleZileListeners();

    lastPlayedQuestion = document.getElementById("joc1_hint2");

    $(".page_part_1 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_1 .audio_button").on("click", async function () {
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
    });

    var cloneDraggable = $(".moment_zi_draggable_zone").clone();
    var cloneDroppable = $(".moment_zi_droppable_zone").clone();

    const sortable = new Draggable.Sortable(
        document.querySelectorAll('.moment_zi_sortable'), {
            draggable: '.moment_zi_sort_item',
            delay: 0,
        }
    );

    sortable.on('mirror:create', (evt) => {
        $(evt.source).removeClass('highlight_lesson_scroll');
        $(".moment_zi_sort_item").unbind('mouseenter mouseleave');
    });

    sortable.on('drag:stop', async (evt) => {
        if (verifyingMomenteleZilei) return;
        //check if finished
        var $momzidropable = $(".moment_zi_droppable_zone");
        if ($momzidropable.find("#dimineata_draggable").length >=1 &&
            $momzidropable.find("#pranzul_draggable").length >=1 &&
            $momzidropable.find("#dupamasa_draggable").length >=1 &&
            $momzidropable.find("#seara_draggable").length >=1 &&
            $momzidropable.find("#noaptea_draggable").length >= 1) {
            verifyingMomenteleZilei = true;
            //finished, so check
            if (checkIfElementsAreInOrder(".moment_zi_droppable_zone", 5)) {
                //we finished, so play final shit and go back to main page
                $(".moment_zi_sort_item").unbind();
                $(".audio_button").unbind();
                playAudio("bravo");
                await waitForAudioToBeFinished();

                //remove items
                $(".moment_zi_draggable_zone").hide(2000);
                $(".moment_zi_droppable_zone").hide(2000);
                await sleep(2000);
                $(".moment_zi_droppable_zone").replaceWith(cloneDroppable);
                $(".moment_zi_draggable_zone").replaceWith(cloneDraggable);
                $(".moment_zi_draggable_zone").hide(1);
                $(".moment_zi_droppable_zone").hide(1);

                playAudio("felicitari_lectie_completa");
                await waitForAudioToBeFinished();

                showMainPage();

                moveFromMomenteleZileiDroppableToDraggable();


                alreadyInitializedMomenteleZileDraggable = false;
            } else {
                //rearrange elements
                playAudio("ups");
                await waitForAudioToBeFinished();
                moveFromMomenteleZileiDroppableToDraggable();
                initializeMomenteleZileListeners();
            }
            verifyingMomenteleZilei = false;
        } else {
            initializeMomenteleZileListeners();
        }
    });

    alreadyInitializedMomenteleZileDraggable = true;
}

async function initializeMomenteleZileListeners(){
    await sleep(200);
    $("#dimineata_draggable").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("dimineata_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#pranzul_draggable").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("pranz_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#dupamasa_draggable").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("dupamasa_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');

    $("#seara_draggable").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("seara_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');


    $("#noaptea_draggable").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("noaptea_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    }).removeClass('highlight_lesson_scroll');
}