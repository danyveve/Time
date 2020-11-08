let lastPlayedAudio = null;
let $playButton = null;
let $body = null;

$(document).ready(function () {
    //make surer we have only lesson1 available at first

    const today = new Date();
    if(localStorage.getItem("lastDayLearned") == null){
        localStorage.setItem("lastDayLearned", today.toDateString());
        localStorage.setItem("isLesson1Available", "false");
        localStorage.setItem("isLesson2Available", "false");
        localStorage.setItem("isLesson3Available", "false");
        localStorage.setItem("isLesson4Available", "false");
    } else{
        var lastDayLearned = new Date(localStorage.getItem("lastDayLearned"));
        if(today.getFullYear() !== lastDayLearned.getFullYear() || today.getMonth() !== lastDayLearned.getMonth() || today.getDate() !== lastDayLearned.getDate()){
            localStorage.setItem("lastDayLearned", today.toDateString());
            localStorage.setItem("isLesson1Available", "false");
            localStorage.setItem("isLesson2Available", "false");
            localStorage.setItem("isLesson3Available", "false");
            localStorage.setItem("isLesson4Available", "false");
        }
    }

    //initialize some variables
    $body = $('body');
    $playButton = $("#play_button");

    //events on playButton
    $playButton.mouseenter(startHint).mouseleave(stopHint);
    $playButton.click(function () {
        goToMainPage();
    });
});




function startHint() {
    //play the audio hint
    lastPlayedAudio = document.getElementById("incepe_jocul_hint_audio");
    lastPlayedAudio.play();

    //start pulsing and remove highlight
    $playButton.addClass("highlight_play_button").removeClass("pulse");
}

function stopHint() {
    //stop the audio hint
    lastPlayedAudio.pause();
    lastPlayedAudio.currentTime = 0;

    //start pulsing and remove highlight
    $playButton.addClass("pulse").removeClass("highlight_play_button");
}

async function goToMainPage() {
    //stop the audio hint of the playButton
    stopLastPlayedAudio();

    //delete the start_page because of some audio shitty bug
    $(".start_page").remove();

    //change background of page
    $body.css('background', 'url("../resources/general/poze/basic.jpg")');
    $body.css('background-size', '100% 100%');

    //run Leo's presentation
    playAudio('intro_audio');

    //show main page content
    showMainPage();


    //wait for Leo to finish presentation
    await sleep(38500);
}