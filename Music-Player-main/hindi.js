// Songs
// Havana

let audioelement1 = new Audio("media/Teri Mitti.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");

// // Handle Play Pause
masterPlay.addEventListener("click", () => {
  if (audioelement1.paused || audioelement1.currentTime <= 0) {
    audioelement1.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioelement1.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

audioelement1.addEventListener("timeupdate", () => {
  // Update Seeker
  let progress = parseInt(
    (audioelement1.currentTime / audioelement1.duration) * 100
  );
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioelement1.currentTime =
    (progressBar.value * audioelement1.duration) / 100;
});

// Perfect

let audioelement2 = new Audio("media/Khairiyat.mp3");
let masterPlay2 = document.getElementById("masterPlay2");
let progressBar2 = document.getElementById("progressBar2");

// // Handle Play Pause
masterPlay2.addEventListener("click", () => {
  if (audioelement2.paused || audioelement2.currentTime <= 0) {
    audioelement2.play();
    masterPlay2.classList.remove("fa-play-circle");
    masterPlay2.classList.add("fa-pause-circle");
  } else {
    audioelement2.pause();
    masterPlay2.classList.remove("fa-pause-circle");
    masterPlay2.classList.add("fa-play-circle");
  }
});

audioelement2.addEventListener("timeupdate", () => {
  // Update Seeker
  let progress2 = parseInt(
    (audioelement2.currentTime / audioelement2.duration) * 100
  );
  progressBar2.value = progress2;
});

progressBar2.addEventListener("change", () => {
  audioelement2.currentTime =
    (progressBar2.value * audioelement2.duration) / 100;
});

// Faded

let audioelement3 = new Audio("media/Mann Mera.mp3");
let masterPlay3 = document.getElementById("masterPlay3");
let progressBar3 = document.getElementById("progressBar3");

// // Handle Play Pause
masterPlay3.addEventListener("click", () => {
  if (audioelement3.paused || audioelement3.currentTime <= 0) {
    audioelement3.play();
    masterPlay3.classList.remove("fa-play-circle");
    masterPlay3.classList.add("fa-pause-circle");
  } else {
    audioelement3.pause();
    masterPlay3.classList.remove("fa-pause-circle");
    masterPlay3.classList.add("fa-play-circle");
  }
});

audioelement3.addEventListener("timeupdate", () => {
  // Update Seeker
  let progress3 = parseInt(
    (audioelement3.currentTime / audioelement3.duration) * 100
  );
  progressBar3.value = progress3;
});

progressBar3.addEventListener("change", () => {
  audioelement3.currentTime =
    (progressBar3.value * audioelement3.duration) / 100;
});

// Closer

let audioelement4 = new Audio("media/Shayad.mp3");
let masterPlay4 = document.getElementById("masterPlay4");
let progressBar4 = document.getElementById("progressBar4");

// // Handle Play Pause
masterPlay4.addEventListener("click", () => {
  if (audioelement4.paused || audioelement4.currentTime <= 0) {
    audioelement4.play();
    masterPlay4.classList.remove("fa-play-circle");
    masterPlay4.classList.add("fa-pause-circle");
  } else {
    audioelement4.pause();
    masterPlay4.classList.remove("fa-pause-circle");
    masterPlay4.classList.add("fa-play-circle");
  }
});

audioelement4.addEventListener("timeupdate", () => {
  // Update Seeker
  let progress4 = parseInt(
    (audioelement4.currentTime / audioelement4.duration) * 100
  );
  progressBar4.value = progress4;
});

progressBar4.addEventListener("change", () => {
  audioelement4.currentTime =
    (progressBar4.value * audioelement4.duration) / 100;
});

// Shape of you

let audioelement5 = new Audio("media/Tune jo na kaha.mp3");
let masterPlay5 = document.getElementById("masterPlay5");
let progressBar5 = document.getElementById("progressBar5");

// // Handle Play Pause
masterPlay5.addEventListener("click", () => {
  if (audioelement5.paused || audioelement5.currentTime <= 0) {
    audioelement5.play();
    masterPlay5.classList.remove("fa-play-circle");
    masterPlay5.classList.add("fa-pause-circle");
  } else {
    audioelement5.pause();
    masterPlay5.classList.remove("fa-pause-circle");
    masterPlay5.classList.add("fa-play-circle");
  }
});

audioelement5.addEventListener("timeupdate", () => {
  // Update Seeker
  let progress5 = parseInt(
    (audioelement5.currentTime / audioelement5.duration) * 100
  );
  progressBar5.value = progress5;
});

progressBar5.addEventListener("change", () => {
  audioelement5.currentTime =
    (progressBar5.value * audioelement5.duration) / 100;
});
