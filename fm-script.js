document.addEventListener("DOMContentLoaded", function () {

const letterText = `

Happy 1st Monthsary, my love 🤍

One month may sound small, but to me it already holds so many quiet moments, deep talks, misunderstandings we worked through, and little laughs that made everything lighter. I’m grateful for all of it — even the parts that challenged us — because they showed me that we’re willing to choose each other and grow.

Thank you for loving me in your own way, for trying, for reassuring me, and for staying. I know we’re still learning each other, and I don’t expect perfection — I just appreciate the effort and the heart behind it. That means more than you know.

Salamat, ikaw 'to. 

To more months with you, my love.

Yours,
Julia
`;

let letterIndex = 0;
let isTyping = false;

const typingSound = new Audio("assets/sounds/type.mp3"); // optional typing sound
typingSound.volume = 0.25;

// Open the letter modal
window.openLetter = function () {
  const modal = document.getElementById("letterModal");
  const envelopeFlap = document.querySelector(".envelope-flap");
  const textContainer = document.getElementById("typedLetter");

  if (!modal || !textContainer) return;

  envelopeFlap.style.transform = "rotateX(180deg)";
  modal.style.display = "flex";

  textContainer.innerHTML = "";
  letterIndex = 0;
  isTyping = true;

  // Play music only if paused
  if (audio.paused) {
    audio.play().catch(() => {});
    document.getElementById("playBtn").innerText = "||";
  }

  setTimeout(typeLetter, 500);
};

// Close the letter modal
window.closeLetter = function () {
  const modal = document.getElementById("letterModal");
  const envelopeFlap = document.querySelector(".envelope-flap");

  modal.style.display = "none";
  isTyping = false;

  // Smooth flap close animation
  setTimeout(() => {
    envelopeFlap.style.transform = "rotateX(0deg)";
  }, 400);
};

// Typing effect for the letter
function typeLetter() {
  if (!isTyping) return;

  const textContainer = document.getElementById("typedLetter");

  if (letterIndex < letterText.length) {
    const char = letterText.charAt(letterIndex);
    textContainer.innerHTML += char === "\n" ? "<br>" : char;

    // Play typing sound (only for visible characters)
    if (char !== "\n" && char !== " ") {
      typingSound.currentTime = 0;
      typingSound.play().catch(() => {});
    }

    letterIndex++;
    setTimeout(typeLetter, 35);
  }
}


  /* ===============================
     ⏳ COUNTDOWN
  =============================== */
/* ===============================
   💜 OUR TIME TOGETHER
============================== */

// Start of your relationship 💜
const startDate = new Date("2026-02-01T15:30:00");

function updateTimeTogether() {
  const now = new Date();
  let diff = now - startDate;

  if (diff < 0) diff = 0; // safety

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl) return;

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
}

// Update every second
setInterval(updateTimeTogether, 1000);
updateTimeTogether();
  /* ===============================
     🎧 MUSIC PLAYER
  =============================== */

  const songs = [
    {
      title: "Next To You",
      artist: "John Vincent III",
      src: "assets/music/1m-song1.mp3",
      cover: "assets/music/1m-cover1.jpg"
    },
    {
      title: "I Don't Wanna Be Okay Without You",
      artist: "Charlie Burg",
      src: "assets/music/1m-song2.mp3",
      cover: "assets/music/1m-cover2.jpg"
    },
    {
      title: "Sleep on the floor",
      artist: "The Lumineers",
      src: "assets/music/1m-song3.mp3",
      cover: "assets/music/1m-cover3.jpg"
    },
    {
      title: "Tenerife Sea",
      artist: "Ed Sheeran",
      src: "assets/music/1m-song4.mp3",
      cover: "assets/music/1m-cover4.jpg"
    },
    {
      title: "The Mountain is You",
      artist: "Chance Pena",
      src: "assets/music/1m-song5.mp3",
      cover: "assets/music/1m-cover5.jpg"
    },
    {
      title: "Emmylou",
      artist: "Vance Joy",
      src: "assets/music/1m-song6.mp3",
      cover: "assets/music/1m-cover6.jpg"
    },
  ];

  let musicIndex = 0;
  const audio = document.getElementById("audioPlayer");

  function loadSong(index) {
    if (!audio) return;

    const song = songs[index];

    document.getElementById("songTitle").innerText = song.title;
    document.getElementById("songArtist").innerText = song.artist;
    document.getElementById("albumCover").src = song.cover;

    audio.src = song.src;
  }

  window.togglePlay = function () {
    const playBtn = document.getElementById("playBtn");

    if (audio.paused) {
      audio.play();
      playBtn.innerText = "||";
    } else {
      audio.pause();
      playBtn.innerText = "▶";
    }
  };

  audio.addEventListener("play", () => {
    document.querySelector(".music-widget").classList.add("playing");
  });
  audio.addEventListener("pause", () => {
    document.querySelector(".music-widget").classList.remove("playing");
  });


  window.nextSong = function () {
    musicIndex = (musicIndex + 1) % songs.length;
    loadSong(musicIndex);
    audio.play();
    document.getElementById("playBtn").innerText = "||";
  };

  window.prevSong = function () {
    musicIndex = (musicIndex - 1 + songs.length) % songs.length;
    loadSong(musicIndex);
    audio.play();
    document.getElementById("playBtn").innerText = "||";
  };

  if (audio) {
    audio.addEventListener("ended", window.nextSong);
    loadSong(musicIndex);
  }


  /* ===============================
     💖 CLICK FLOATING HEARTS
  =============================== */

  document.addEventListener("click", function (e) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "💗";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });

  /* ===============================
     🖼 IMAGE MODAL
  =============================== */

  let imageIndex = 0;
  const images = document.querySelectorAll(
    ".photos img, .photobooth-strip img"
  );

  window.openImage = function (img) {
    imageIndex = [...images].indexOf(img);

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modalImg.src = img.src;
    modal.style.display = "flex";
  };

  window.closeImage = function () {
    document.getElementById("imageModal").style.display = "none";
  };

  window.nextImage = function () {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById("modalImg").src = images[imageIndex].src;
  };

  window.prevImage = function () {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    document.getElementById("modalImg").src = images[imageIndex].src;
  };


  /* ===============================
     🚪 LOGOUT
  =============================== */

  window.logout = function () {
    sessionStorage.removeItem("auth");
    window.location.replace("index.html");
  };

});

const targetDate = new Date('2026-03-01T10:00:00'); // March 1

function openLocked() {
  if (new Date() >= targetDate) {
    document.getElementById("revealModal").style.display = "flex";
  } else {
    alert("Unlocks on March 1 💖");
  }
}

function closeModal() {
  document.getElementById("revealModal").style.display = "none";
}

function goToMonthsary() {
  window.location.href = "first-monthsary.html";
}

function goToMonthsary() {
  const modal = document.getElementById("revealModal");
  modal.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "first-monthsary.html";
  }, 400);
}



