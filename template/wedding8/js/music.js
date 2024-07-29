const audio_music = document.getElementById("audio_music");
const on_speaker = $(".on_speaker");
const off_speaker = $(".off_speaker");
on_speaker.hide();
off_speaker.hide();
function checkSpeaker() {
  if (!audio_music.paused) {
    off_speaker.hide();
    on_speaker.show();
  } else {
    off_speaker.show();
    on_speaker.hide();
  }
}

function runMusicMode() {
  // tá»± Ä‘á»™ng báº­t
  let urlWedding = window.location.href;
  let chechMode = urlWedding.includes("iframeMode=true");
  // if (urlWedding.includes('https://www.27biggroup.com/?fbclid') || urlWedding == 'https://www.27biggroup.com/' || urlWedding == 'https://www.27biggroup.com' || urlWedding == 'https://wedding.27biggroup.com/' || urlWedding == 'https://wedding.27biggroup.com' || urlWedding.includes('builder.ladipage.com')){

  if (chechMode == false) {
    $(window).on("load", function () {
      audio_music.play();
      checkSpeaker();
    });

    let rolePlay = false;
    $(window).on("scroll", function () {
      if (rolePlay == false) {
        audio_music.play();
        rolePlay = true;
        checkSpeaker();
      }
    });
  }
}
runMusicMode();

// báº­t thá»§ cÃ´ng
off_speaker.click(function () {
  audio_music.play();
  checkSpeaker();
});
on_speaker.click(function () {
  audio_music.pause();
  checkSpeaker();
});
