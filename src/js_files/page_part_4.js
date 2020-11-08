var alreadyShownAnsers4 = null;

async function showImagesLesson4_1() {
    $("#primavara").delay(15000).show(1000);
    $("#vara").delay(16000).show(1000);
    $("#toamna").delay(17300).show(1000);
    $("#iarna").delay(18400).show(1000);
}

async function showImagesLesson4_2() {
    $("#primavara").addClass('pulse');
    $("#vara").hide(1000);
    $("#toamna").hide(1000);
    $("#iarna").hide(1000);
    await sleep(1500);
    $("#bird").show(1000);
    $("#blooming_flower").show(1000);
    $("#insects").show(1000);

    await sleep(21500);
    $("#bird").hide(1000);
    $("#blooming_flower").hide(1000);
    $("#insects").hide(1000);
    $("#primavara").removeClass('pulse');
    $("#primavara").hide(1000);
    await sleep(1000);
}

async function showImagesLesson4_3() {
    $("#vara").show(1000);
    $("#sun").show(1000);
    $("#swimming").show(1000);
    $("#summer_fruits").show(1000);

    await sleep(1000);
    $("#vara").addClass('pulse');

    await sleep(46000);
    $("#sun").hide(1000);
    $("#swimming").hide(1000);
    $("#summer_fruits").hide(1000);
    $("#vara").removeClass('pulse');
    $("#vara").hide(1000);
    await sleep(1000);
}

async function showImagesLesson4_4() {
    $("#toamna").show(1000);
    $("#rain").show(1000);
    $("#autumn_leaves").show(1000);
    $("#jam").show(1000);

    await sleep(1000);
    $("#toamna").addClass('pulse');

    await sleep(40000);
    $("#rain").hide(1000);
    $("#autumn_leaves").hide(1000);
    $("#jam").hide(1000);
    $("#toamna").removeClass('pulse');
    $("#toamna").hide(1000);
    await sleep(1000);
}

async function showImagesLesson4_5() {
    $("#iarna").show(1000);
    $("#snow").show(1000);
    $("#winter_clothes").show(1000);
    $("#santa").show(1000);

    await sleep(1000);
    $("#iarna").addClass('pulse');

    await sleep(40000);
    $("#snow").hide(1000);
    $("#winter_clothes").hide(1000);
    $("#santa").hide(1000);
    $("#iarna").removeClass('pulse');
    $("#iarna").hide(1000);
    await sleep(1000);
}

async function showImagesLesson4_outro() {
    await sleep(12000);
    $(".page_part_4").find(".left_arrow").show(2500);

    await sleep(3000);
    $(".page_part_4").find(".left_arrow").addClass('pulse');

    await sleep(6000);
    $(".page_part_4").find(".left_arrow").removeClass('pulse');
    $(".page_part_4").find(".left_arrow").hide(1500);

    await sleep(1500);
    localStorage.setItem("isLesson4Available", "true");
    playAudio("joc4_hint");
    await waitForAudioToBeFinished();
    playAudio("joc4_intrebare1");
}

function showAnswersJoc4(){
    if (alreadyShownAnsers4) return;
    alreadyShownAnsers4 = true;
    $("#question_mark_joc4").show(2000);
    $("#primavara_answer").show(2000);
    $("#vara_answer").show(2000);
    $("#toamna_answer").show(2000);
    $("#iarna_answer").show(2000);
}

async function setupJoc4Intrebare1() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare1");

    $("#primavara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare10");
}

async function setupJoc4Intrebare10() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare10");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare11");
}

async function setupJoc4Intrebare11() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare11");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare6");
}

async function setupJoc4Intrebare6() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare6");

    $("#vara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare16");
}

async function setupJoc4Intrebare16() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare16");

    $("#iarna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare2");
}

async function setupJoc4Intrebare2() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare2");

    $("#primavara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare12");
}

async function setupJoc4Intrebare12() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare12");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare17");
}

async function setupJoc4Intrebare17() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare17");

    $("#iarna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare7");
}

async function setupJoc4Intrebare7() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare7");

    $("#vara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare3");
}

async function setupJoc4Intrebare3() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare3");

    $("#primavara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare13");
}

async function setupJoc4Intrebare13() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare13");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare18");
}

async function setupJoc4Intrebare18() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare18");

    $("#iarna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare8");
}

async function setupJoc4Intrebare8() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare8");

    $("#vara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare4");
}

async function setupJoc4Intrebare4() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare4");

    $("#primavara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare14");
}

async function setupJoc4Intrebare14() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare14");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare19");
}

async function setupJoc4Intrebare19() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare19");

    $("#iarna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare9");
}

async function setupJoc4Intrebare9() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare9");

    $("#vara_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare15");
}

async function setupJoc4Intrebare15() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare15");

    $("#toamna_answer").addClass("correct");

    addListenersJoc4("joc4_intrebare5");
}

async function setupJoc4Intrebare5() {
    lastPlayedQuestion = document.getElementById("joc4_intrebare5");

    $("#vara_answer").addClass("correct");

    addListenersJoc4("joc4_last_question");
}

function addListenersJoc4(nextQuestionId) {
    $("#primavara_answer").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("primavara_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });
    $("#vara_answer").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("vara_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });
    $("#toamna_answer").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("toamna_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });
    $("#iarna_answer").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio("iarna_audio");
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });


    $(".answer_joc4").on("click", async function () {
        if ($(this).hasClass("correct")) {
            removeListenersJoc4();
            playAudio("bravo");
            await waitForAudioToBeFinished();
            if(nextQuestionId === "joc4_last_question"){
                playAudio("felicitari_lectie_completa");
                $(".joc4_answers").hide(1000);
                $("#question_mark_joc4").hide(1000);
                await waitForAudioToBeFinished();
                showMainPage();
                alreadyShownAnsers4 =  false;
            } else {
                playAudio(nextQuestionId);
            }
            $(this).removeClass("correct");
        } else {
            removeListenersJoc4();
            playAudio("ups");
            await waitForAudioToBeFinished();
            addListenersJoc4(nextQuestionId);
        }
    });


    $(".page_part_4 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_4 .audio_button").on("click", async function () {
        removeListenersJoc4();
        playAudio("joc4_hint");
        await waitForAudioToBeFinished();
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        addListenersJoc4(nextQuestionId);
    });
}

function removeListenersJoc4() {
    $("#primavara_answer").unbind();
    $("#toamna_answer").unbind();
    $("#vara_answer").unbind();
    $("#iarna_answer").unbind();
    $(".audio_button").unbind();

    $("#primavara_answer").removeClass("highlight_lesson_scroll");
    $("#toamna_answer").removeClass("highlight_lesson_scroll");
    $("#vara_answer").removeClass("highlight_lesson_scroll");
    $("#iarna_answer").removeClass("highlight_lesson_scroll");
    $(".audio_button").removeClass("highlight_lesson_scroll");
}