// overflow y
document.body.style.overflowY = "hidden";
document.body.style.overflowX = "hidden";

// klik buka undangan
let btnBukaUndangan = document.getElementById("bukaundangan");

btnBukaUndangan.addEventListener("click", function () {
  let displayshow = document.getElementById("content");
  displayshow.classList.remove("d-none");

  document.body.style.overflowX = "hidden";

  AOS.init({
    duration: 1000,
    delay: 150,
    once: true,
  });

  document.body.style.overflowY = "scroll";

  let cover = document.getElementById("img-cover");
  cover.setAttribute("data-aos", "fade-down");

  // play();
  document.getElementById("song").play();
});

// function play() {
//   let makAudio = document.getElementById("playaudio");
//   makAudio.innerHTML = "<audio loop autoplay><source src='assets/sound/LoveTheme.mp3' type='audio/ogg'><embed src='asset/LoveTheme.mp3' autostart='true' loop='true' hidden='true'></audio>";
// }

// form Reservasi
const scriptURLReservasi = "https://script.google.com/macros/s/AKfycbxIakiEtS-G9WHyUqfHp5TP2X7JC0o5svJ0Atrh4oH-Eq8Z0cFW5PCzyoXczMayVJrW6Q/exec";
const formReservasi = document.forms["reservasi"];
const btnKirimReservasi = document.querySelector(".btn-kirim-reservasi");
const btnLoadingReservasi = document.querySelector(".btn-loading-reservasi");
let alertTerimakasihReservasi = document.querySelector(".alert-terimakasih-reservasi");

formReservasi.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputNama = document.getElementById("name").value;
  let inputNohp = document.getElementById("nohp").value;
  let classAlert = document.getElementById("alertKosong");

  if (inputNama == "" || inputNohp == "") {
    classAlert.classList.replace("alert-success", "alert-danger");

    alertTerimakasihReservasi.innerHTML = "<strong>Maaf!</strong> Ada yang belum kamu isi.";

    alertTerimakasihReservasi.classList.replace("d-none", "d-block");
  } else {
    let alertAda = document.querySelector(".alert-terimakasih-reservasi");
    alertAda.classList.replace("alert-danger", "d-none");

    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoadingReservasi.classList.toggle("d-none");
    btnKirimReservasi.classList.toggle("d-none");

    fetch(scriptURLReservasi, { method: "POST", body: new FormData(formReservasi) })
      .then((response) => {
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoadingReservasi.classList.toggle("d-none");
        btnKirimReservasi.classList.toggle("d-none");

        // ubah isi alert
        alertTerimakasihReservasi.innerHTML = "<strong>Terimakasih!</strong> Pesan kamu sudah kami terima.";

        // tampilkan alert
        alertTerimakasihReservasi.classList.replace("d-none", "alert-success");

        // reset formnya
        formReservasi.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});

// form Ucapan Terbaik
const scriptURLUcapan = "https://script.google.com/macros/s/AKfycbybCvxSoiYHoe0GVL4rUMaVjNOVEmInEkA2d9bOiao1hIj9wzMs4muyg7_EJQW_NDO9/exec";
const formUcapan = document.forms["ucapanTerbaikDickyNita"];
const btnKirimUcapan = document.querySelector(".btn-kirim-ucapan");
const btnLoadingUcapan = document.querySelector(".btn-loading-ucapan");
let alertUcapan = document.querySelector(".alert-ucapan");

formUcapan.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputNamaUcapan = document.getElementById("namaUcapan").value;
  let inputPesanUcapan = document.getElementById("pesanUcapan").value;

  if (inputNamaUcapan == "" || inputPesanUcapan == "") {
    alertUcapan.classList.replace("alert-success", "alert-danger");

    alertUcapan.innerHTML = "<strong>Maaf!</strong> Ada yang belum kamu isi.";

    alertUcapan.classList.replace("d-none", "d-block");
  } else {
    let alertTampil = document.querySelector(".alert-ucapan");
    alertTampil.classList.replace("d-block", "d-none");

    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoadingUcapan.classList.toggle("d-none");
    btnKirimUcapan.classList.toggle("d-none");

    fetch(scriptURLUcapan, { method: "POST", body: new FormData(formUcapan) })
      .then((response) => {
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoadingUcapan.classList.toggle("d-none");
        btnKirimUcapan.classList.toggle("d-none");

        // rubah isi alert
        alertUcapan.innerHTML = "<strong>Terimakasih!</strong> Pesan kamu sudah kami terima.";

        // tampilkan alert
        alertUcapan.classList.replace("alert-danger", "alert-success");
        alertUcapan.classList.replace("d-none", "d-block");
        // reset formnya
        formUcapan.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
