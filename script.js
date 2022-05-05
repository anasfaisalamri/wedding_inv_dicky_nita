// klik buka undangan
let btnBukaUndangan = document.getElementById("bukaundangan");

btnBukaUndangan.addEventListener("click", function () {
  let displayshow = document.getElementById("content");
  displayshow.classList.remove("d-none");
  let cover = document.getElementById("img-cover");
  cover.classList.add("d-none");

  // play();
});

function play() {
  let makAudio = document.getElementById("playaudio");
  makAudio.innerHTML = "<audio loop autoplay><source src='assets/sound/LoveTheme.mp3' type='audio/ogg'><embed src='asset/LoveTheme.mp3' autostart='true' loop='true' hidden='true'></audio>";
}
