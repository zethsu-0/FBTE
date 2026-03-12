const music = $("#bgmusic")[0];
const button = $("#toggle-music");

music.volume = 0;

button.click(function () {
  if (music.paused) {
    music.play();
    button.text("music_off");
  } else {
    music.pause();
    button.text("graphic_eq");
  }
});
