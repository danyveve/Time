var splitBarInitialised = null;

async function showImagesLesson2_1() {
    $("#ceas_part2").delay(9000).show(1000);
    $("#clepsidra_part2").delay(10000).show(1000);
    $("#cronometru_part2").delay(11500).show(1000);
    $("#calendar_part2").delay(13000).show(1000);

    await sleep(25000);
    $("#ceas_part2").hide(1000);
    $("#clepsidra_part2").hide(1000);
    $("#cronometru_part2").hide(1000);
    $("#calendar_part2").hide(1000);

    await sleep(13000);
    $("#nr_1").show(1000);
    await sleep(2000);
    $("#nr_2").show(1000);
    await sleep(2000);
    $("#nr_3").show(1000);
    await sleep(1500);
    $("#nr_4").show(1000);
    await sleep(2000);
    $("#nr_5").show(1000);
    await sleep(1500);
    $("#nr_6").show(1000);
    await sleep(2000);
    $("#nr_7").show(1000);
    await sleep(1500);
    $("#nr_8").show(1000);
    await sleep(2000);
    $("#nr_9").show(1000);
    await sleep(1500);
    $("#nr_10").show(1000);

    await sleep(3000);
    $("#nr_1").hide(1000);
    $("#nr_2").hide(1000);
    $("#nr_3").hide(1000);
    $("#nr_4").hide(1000);
    $("#nr_5").hide(1000);
    $("#nr_6").hide(1000);
    $("#nr_7").hide(1000);
    $("#nr_8").hide(1000);
    $("#nr_9").hide(1000);
    $("#nr_10").hide(1000);
}

async function showImagesLesson2_2() {

    $("#1_ceasuri_2_1").delay(11500).show(1000);
    $("#1_ceasuri_2_2").delay(11500).show(1000);
    $("#2_ceasuri_de_adunat").delay(11500).show(1000);
    $("#1_ceasuri_1").delay(16500).show(1000);
    $("#plus_ceasuri_de_adunat").delay(16500).show(1000);
    $("#1_ceasuri_de_adunat").delay(16500).show(1000);
    $("#equal_ceasuri_de_adaugat").delay(18000).show(1000);
    $("#question_mark_ceasuri_de_adaugat").delay(18000).show(1000);


    await sleep(23000);
    $("#1_ceasuri_2_1").addClass("pulse");
    await sleep(2000);
    $("#1_ceasuri_2_1").removeClass("pulse");
    $("#1_ceasuri_2_2").addClass("pulse");
    await sleep(2000);
    $("#1_ceasuri_2_2").removeClass("pulse");
    $("#1_ceasuri_1").addClass("pulse");
    await sleep(2000);
    $("#1_ceasuri_1").removeClass("pulse");
    $("#1_ceasuri_2_1").hide(1000);
    $("#1_ceasuri_2_2").hide(1000);
    $("#1_ceasuri_1").hide(1000);
    $("#2_ceasuri_de_adunat").hide(1000);
    $("#1_ceasuri_1").hide(1000);
    $("#plus_ceasuri_de_adunat").hide(1000);
    $("#1_ceasuri_de_adunat").hide(1000);
    $("#equal_ceasuri_de_adaugat").hide(1000);
    $("#question_mark_ceasuri_de_adaugat").hide(1000);

    await sleep(2000);
    $("#1_clepsidra_5_1").show(1000);
    $("#1_clepsidra_5_2").show(1000);
    $("#1_clepsidra_5_3").show(1000);
    $("#1_clepsidra_5_4").show(1000);
    $("#1_clepsidra_5_5").show(1000);
    $("#5_clepsidre_de_adunat").show(1000);

    await sleep(4000);
    $("#1_clepsidra_2_1").show(1000);
    $("#1_clepsidra_2_2").show(1000);
    $("#plus_clepsidre_de_adunat").show(1000);
    $("#2_clepsidre_de_adunat").show(1000);

    await sleep(1500);
    $("#equal_clepsidre_de_adaugat").show(1000);
    $("#question_mark_clepsidre_de_adaugat").show(1000);

    await sleep(6000);
    $("#1_clepsidra_5_1").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_5_1").removeClass("pulse");
    $("#1_clepsidra_5_2").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_5_2").removeClass("pulse");
    $("#1_clepsidra_5_3").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_5_3").removeClass("pulse");
    await sleep(500);
    $("#1_clepsidra_5_4").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_5_4").removeClass("pulse");
    $("#1_clepsidra_5_5").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_5_5").removeClass("pulse");
    $("#1_clepsidra_2_1").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_2_1").removeClass("pulse");
    $("#1_clepsidra_2_2").addClass("pulse");
    await sleep(2000);
    $("#1_clepsidra_2_2").removeClass("pulse");
    $("#1_clepsidra_5_1").hide(1000);
    $("#1_clepsidra_5_2").hide(1000);
    $("#1_clepsidra_5_3").hide(1000);
    $("#1_clepsidra_5_4").hide(1000);
    $("#1_clepsidra_5_5").hide(1000);
    $("#1_clepsidra_2_1").hide(1000);
    $("#1_clepsidra_2_2").hide(1000);
    $("#5_clepsidre_de_adunat").hide(1000);
    $("#2_clepsidre_de_adunat").hide(1000);
    $("#plus_clepsidre_de_adunat").hide(1000);
    $("#question_mark_clepsidre_de_adaugat").hide(1000);
    $("#equal_clepsidre_de_adaugat").hide(1000);

    await sleep(3000);
    $("#1_calendar_5_1").show(1000);
    $("#1_calendar_5_2").show(1000);
    $("#1_calendar_5_3").show(1000);
    $("#1_calendar_5_4").show(1000);
    $("#1_calendar_5_5").show(1000);
    $("#5_calendare_de_scazut").show(1000);
    await sleep(3000);
    $("#1_calendar_5_5").addClass("blocked_transition");
    $("#red_cross_calendar").show(1000);
    $("#1_calendare_de_scazut").show(1000);
    $("#minus_calendare_de_scazut").show(1000);

    await sleep(1500);
    $("#equal_calendare_de_scazut").show(1000);
    $("#question_mark_calendare_de_scazut").show(1000);

    await sleep(7000);
    $("#1_calendar_5_1").addClass("pulse");
    await sleep(2000);
    $("#1_calendar_5_1").removeClass("pulse");
    $("#1_calendar_5_2").addClass("pulse");
    await sleep(2000);
    $("#1_calendar_5_2").removeClass("pulse");
    $("#1_calendar_5_3").addClass("pulse");
    await sleep(2000);
    $("#1_calendar_5_3").removeClass("pulse");
    $("#1_calendar_5_4").addClass("pulse");
    await sleep(2000);
    $("#1_calendar_5_4").removeClass("pulse");
    $("#1_calendar_5_1").hide(1000);
    $("#1_calendar_5_2").hide(1000);
    $("#1_calendar_5_3").hide(1000);
    $("#1_calendar_5_4").hide(1000);
    $("#red_cross_calendar").hide(1000);
    $("#1_calendar_5_5").hide(1000);
    $("#1_calendar_5_5").removeClass("blocked_transition");
    $("#5_calendare_de_scazut").hide(1000);
    $("#1_calendare_de_scazut").hide(1000);
    $("#minus_calendare_de_scazut").hide(1000);
    $("#equal_calendare_de_scazut").hide(1000);
    $("#question_mark_calendare_de_scazut").hide(1000);

    await sleep(2500);
    $("#1_cronometru_3_1").show(1000);
    $("#1_cronometru_3_2").show(1000);
    $("#1_cronometru_3_3").show(1000);
    $("#3_cronometre_de_scazut").show(1000);
    await sleep(3500);
    $("#1_cronometru_3_3").addClass("blocked_transition");
    $("#red_cross_cronometru").show(1000);
    $("#1_cronometre_de_scazut").show(1000);
    $("#minus_cronometre_de_scazut").show(1000);

    await sleep(1500);
    $("#equal_cronometre_de_scazut").show(1000);
    $("#question_mark_cronometre_de_scazut").show(1000);

    await sleep(6500);
    $("#1_cronometru_3_1").addClass("pulse");
    await sleep(2000);
    $("#1_cronometru_3_1").removeClass("pulse");
    $("#1_cronometru_3_2").addClass("pulse");
    await sleep(2000);
    $("#1_cronometru_3_1").hide(1000);
    $("#1_cronometru_3_2").hide(1000);
    $("#1_cronometru_3_3").hide(1000);
    $("#red_cross_cronometru").hide(1000);
    $("#1_cronometru_3_3").removeClass("blocked_transition");
    $("#3_cronometre_de_scazut").hide(1000);
    $("#1_cronometre_de_scazut").hide(1000);
    $("#minus_cronometre_de_scazut").hide(1000);
    $("#question_mark_cronometre_de_scazut").hide(1000);
    $("#equal_cronometre_de_scazut").hide(1000);
}

async function showImagesLesson2_outro() {
    await sleep(10000);
    $(".page_part_2").find(".left_arrow").show(2500);
    await sleep(4000);
    $(".page_part_2").find(".left_arrow").addClass('pulse');
    await sleep(6000);
    $(".page_part_2").find(".left_arrow").removeClass('pulse');
    $(".page_part_2").find(".left_arrow").hide(1500);

    localStorage.setItem("isLesson2Available", "true");
    await sleep(1500);
    playAudio("joc2_intrebare1");
}

async function showAnswersJoc2Intrebare1() {
    if(!splitBarInitialised){
        splitBarInitialised = true;

        lastPlayedAudio.pause();

        $(".split_bar").show(1500);
        await sleep(2000);

        lastPlayedAudio.play();

        await sleep(500);
        $("#joc2_intrebare1_clepsidra2_1").show(1000);
        await sleep(2250);
        $("#joc2_intrebare1_plus").show(1000);
        $("#joc2_intrebare1_clepsidra2_2").show(1000);
        await sleep(2000);
        $("#joc2_intrebare1_equal").show(1000);
        $("#joc2_intrebare1_questionmark").show(1000);
    }
}

async function setupJoc2Intrebare1() {
    $("#joc2_intrebare1_raspuns1").show(1000);
    $("#joc2_intrebare1_raspuns2").show(1000);
    $("#joc2_intrebare1_raspuns4").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare1");

    addListenersJoc2("joc2_intrebare2", "#joc2_intrebare1_raspuns1", "1_clepsidre_audio", "#joc2_intrebare1_raspuns2",
        "2_clepsidre_audio", "#joc2_intrebare1_raspuns4", "4_clepsidre_audio",
        "#joc2_intrebare1_clepsidra2_1", "#joc2_intrebare1_plus", "#joc2_intrebare1_clepsidra2_2", "#joc2_intrebare1_equal", "#joc2_intrebare1_questionmark");
}

async function showAnswersJoc2Intrebare2() {
        await sleep(500);
        $("#joc2_intrebare2_calendar2").show(1000);
        await sleep(2250);
        $("#joc2_intrebare2_plus").show(1000);
        $("#joc2_intrebare2_calendar1").show(1000);
        await sleep(2000);
        $("#joc2_intrebare2_equal").show(1000);
        $("#joc2_intrebare2_questionmark").show(1000);
}

async function setupJoc2Intrebare2() {
    $("#joc2_intrebare2_raspuns1").show(1000);
    $("#joc2_intrebare2_raspuns2").show(1000);
    $("#joc2_intrebare2_raspuns3").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare2");

    addListenersJoc2("joc2_intrebare6", "#joc2_intrebare2_raspuns1", "1_calendare_audio", "#joc2_intrebare2_raspuns2",
        "2_calendare_audio", "#joc2_intrebare2_raspuns3", "3_calendare_audio",
        "#joc2_intrebare2_calendar2", "#joc2_intrebare2_plus", "#joc2_intrebare2_calendar1", "#joc2_intrebare2_equal", "#joc2_intrebare2_questionmark");
}

async function showAnswersJoc2Intrebare6() {
    await sleep(750);
    $("#joc2_intrebare6_ceas5").show(1000);
    await sleep(1250);
    $("#joc2_intrebare6_minus").show(1000);
    $("#joc2_intrebare6_ceas1").show(1000);
    await sleep(2000);
    $("#joc2_intrebare6_equal").show(1000);
    $("#joc2_intrebare6_questionmark").show(1000);
}

async function setupJoc2Intrebare6() {
    $("#joc2_intrebare6_raspuns4").show(1000);
    $("#joc2_intrebare6_raspuns1").show(1000);
    $("#joc2_intrebare6_raspuns2").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare6");

    addListenersJoc2("joc2_intrebare3", "#joc2_intrebare6_raspuns4", "4_ceasuri_audio", "#joc2_intrebare6_raspuns1",
        "1_ceasuri_audio", "#joc2_intrebare6_raspuns2", "2_ceasuri_audio",
        "#joc2_intrebare6_ceas5", "#joc2_intrebare6_minus", "#joc2_intrebare6_ceas1", "#joc2_intrebare6_equal", "#joc2_intrebare6_questionmark");
}

async function showAnswersJoc2Intrebare3() {
    await sleep(750);
    $("#joc2_intrebare3_cronometru1_1").show(1000);
    await sleep(1250);
    $("#joc2_intrebare3_plus").show(1000);
    $("#joc2_intrebare3_cronometru1_2").show(1000);
    await sleep(2000);
    $("#joc2_intrebare3_equal").show(1000);
    $("#joc2_intrebare3_questionmark").show(1000);
}

async function setupJoc2Intrebare3() {
    $("#joc2_intrebare3_raspuns2").show(1000);
    $("#joc2_intrebare3_raspuns1").show(1000);
    $("#joc2_intrebare3_raspuns3").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare3");

    addListenersJoc2("joc2_intrebare4", "#joc2_intrebare3_raspuns2", "2_cronometre_audio", "#joc2_intrebare3_raspuns1",
        "1_cronometre_audio", "#joc2_intrebare3_raspuns3", "3_cronometre_audio",
        "#joc2_intrebare3_cronometru1_1", "#joc2_intrebare3_plus", "#joc2_intrebare3_cronometru1_2", "#joc2_intrebare3_equal", "#joc2_intrebare3_questionmark");
}

async function showAnswersJoc2Intrebare4() {
    await sleep(750);
    $("#joc2_intrebare4_ceas3").show(1000);
    await sleep(1500);
    $("#joc2_intrebare4_plus").show(1000);
    $("#joc2_intrebare4_ceas2").show(1000);
    await sleep(1750);
    $("#joc2_intrebare4_equal").show(1000);
    $("#joc2_intrebare4_questionmark").show(1000);
}

async function setupJoc2Intrebare4() {
    $("#joc2_intrebare4_raspuns1").show(1000);
    $("#joc2_intrebare4_raspuns5").show(1000);
    $("#joc2_intrebare4_raspuns2").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare4");

    addListenersJoc2("joc2_intrebare7", "#joc2_intrebare4_raspuns1", "1_ceasuri_audio", "#joc2_intrebare4_raspuns5",
        "5_ceasuri_audio", "#joc2_intrebare4_raspuns2", "2_ceasuri_audio",
        "#joc2_intrebare4_ceas3", "#joc2_intrebare4_plus", "#joc2_intrebare4_ceas2", "#joc2_intrebare4_equal", "#joc2_intrebare4_questionmark");
}

async function showAnswersJoc2Intrebare7() {
    await sleep(750);
    $("#joc2_intrebare7_clepsidra2").show(1000);
    await sleep(1500);
    $("#joc2_intrebare7_minus").show(1000);
    $("#joc2_intrebare7_clepsidra1").show(1000);
    await sleep(1750);
    $("#joc2_intrebare7_equal").show(1000);
    $("#joc2_intrebare7_questionmark").show(1000);
}

async function setupJoc2Intrebare7() {
    $("#joc2_intrebare7_raspuns2").show(1000);
    $("#joc2_intrebare7_raspuns1").show(1000);
    $("#joc2_intrebare7_raspuns3").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare7");

    addListenersJoc2("joc2_intrebare5", "#joc2_intrebare7_raspuns2", "2_clepsidre_audio", "#joc2_intrebare7_raspuns1",
        "1_clepsidre_audio", "#joc2_intrebare7_raspuns3", "3_clepsidre_audio",
        "#joc2_intrebare7_clepsidra2", "#joc2_intrebare7_minus", "#joc2_intrebare7_clepsidra1", "#joc2_intrebare7_equal", "#joc2_intrebare7_questionmark");
}

async function showAnswersJoc2Intrebare5() {
    await sleep(1000);
    $("#joc2_intrebare5_clepsidra2").show(1000);
    await sleep(2000);
    $("#joc2_intrebare5_plus").show(1000);
    $("#joc2_intrebare5_clepsidra1").show(1000);
    await sleep(1500);
    $("#joc2_intrebare5_equal").show(1000);
    $("#joc2_intrebare5_questionmark").show(1000);
}

async function setupJoc2Intrebare5() {
    $("#joc2_intrebare5_raspuns2").show(1000);
    $("#joc2_intrebare5_raspuns1").show(1000);
    $("#joc2_intrebare5_raspuns3").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare5");

    addListenersJoc2("joc2_intrebare8", "#joc2_intrebare5_raspuns2", "2_clepsidre_audio", "#joc2_intrebare5_raspuns1",
        "1_clepsidre_audio", "#joc2_intrebare5_raspuns3", "3_clepsidre_audio",
        "#joc2_intrebare5_clepsidra2", "#joc2_intrebare5_plus", "#joc2_intrebare5_clepsidra1", "#joc2_intrebare5_equal", "#joc2_intrebare5_questionmark");
}

async function showAnswersJoc2Intrebare8() {
    await sleep(1000);
    $("#joc2_intrebare8_calendar3").show(1000);
    await sleep(2000);
    $("#joc2_intrebare8_minus").show(1000);
    $("#joc2_intrebare8_calendar1").show(1000);
    await sleep(1500);
    $("#joc2_intrebare8_equal").show(1000);
    $("#joc2_intrebare8_questionmark").show(1000);
}

async function setupJoc2Intrebare8() {
    $("#joc2_intrebare8_raspuns2").show(1000);
    $("#joc2_intrebare8_raspuns1").show(1000);
    $("#joc2_intrebare8_raspuns3").show(1000);

    playAudio("joc2_hint");
    await waitForAudioToBeFinished();
    lastPlayedQuestion = document.getElementById("joc2_intrebare8");

    addListenersJoc2("joc2_last_question", "#joc2_intrebare8_raspuns2", "2_calendare_audio", "#joc2_intrebare8_raspuns1",
        "1_calendare_audio", "#joc2_intrebare8_raspuns3", "3_calendare_audio",
        "#joc2_intrebare8_calendar3", "#joc2_intrebare8_minus", "#joc2_intrebare8_calendar1", "#joc2_intrebare8_equal", "#joc2_intrebare8_questionmark");
}

function addListenersJoc2(nextQuestionId, answer_id_1, audio_id_1, answer_id_2, audio_id_2, answer_id_3, audio_id_3, elem1, elem2, elem3, elem4, elem5) {
    $(answer_id_1).mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio(audio_id_1);
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(answer_id_2).mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio(audio_id_2);
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(answer_id_3).mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
        playAudio(audio_id_3);
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });


    $(".answer").on("click", async function () {
        if ($(this).hasClass("correct")) {
            removeListenersJoc2();
            playAudio("bravo");
            $(answer_id_1).hide(1000);
            $(answer_id_2).hide(1000);
            $(answer_id_3).hide(1000);
            $(elem1).hide(1000);
            $(elem2).hide(1000);
            $(elem3).hide(1000);
            $(elem4).hide(1000);
            $(elem5).hide(1000);
            splitBarInitialised = false;
            await waitForAudioToBeFinished();

            if(nextQuestionId === "joc2_last_question"){
                $(".split_bar").hide(1000);
                playAudio("felicitari_lectie_completa");
                await waitForAudioToBeFinished();
                showMainPage();
            } else {
                playAudio(nextQuestionId);
            }
        } else {
            removeListenersJoc2();
            playAudio("ups");
            await waitForAudioToBeFinished();
            addListenersJoc2(nextQuestionId, answer_id_1, audio_id_1, answer_id_2, audio_id_2, answer_id_3, audio_id_3, elem1, elem2, elem3, elem4, elem5);
        }
    });

    $(".page_part_2 .audio_button").mouseenter(function () {
        $(this).addClass('highlight_lesson_scroll');
    }).mouseleave(function () {
        $(this).removeClass('highlight_lesson_scroll');
    });

    $(".page_part_2 .audio_button").on("click", async function () {
        removeListenersJoc2();
        playAudio(lastPlayedQuestion.id);
        await waitForAudioToBeFinished();
        await sleep(document.getElementById("joc2_hint").duration * 1000);
        addListenersJoc2(nextQuestionId, answer_id_1, audio_id_1, answer_id_2, audio_id_2, answer_id_3, audio_id_3, elem1, elem2, elem3, elem4, elem5);
    });
}

function removeListenersJoc2(answer_id_1, answer_id_2, answer_id_3) {
    $(answer_id_1).unbind();
    $(answer_id_2).unbind();
    $(answer_id_3).unbind();
    $(".audio_button").unbind();
    $(".answer").unbind();
    $(".answer").removeClass("highlight_lesson_scroll");
    $(".audio_button").removeClass("highlight_lesson_scroll");

}