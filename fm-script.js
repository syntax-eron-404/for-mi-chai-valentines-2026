document.addEventListener("DOMContentLoaded", function () {

const letterText = `

Happy 1st Monthsary, my love 🤍

One month may sound small, but to me it already holds so many quiet moments, deep talks, misunderstandings we worked through, and little laughs that made everything lighter. I’m grateful for all of it — even the parts that challenged us — because they showed me that we’re willing to choose each other and grow.

Thank you for loving me in your way, for trying, for reassuring me, and for staying. I know we’re still learning each other, and I don’t expect perfection — I just appreciate the effort and the heart behind it. That means more than you know.

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
    document.getElementById("playBtn").innerText = "⏸";
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
      playBtn.innerText = "⏸";
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
    document.getElementById("playBtn").innerText = "⏸";
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

    // VOICE NOTE CARD
  const voiceAudio = document.getElementById("voiceAudio");
  const voiceBtn = document.getElementById("voicePlayBtn");

  voiceBtn.addEventListener("click", () => {
    if (!voiceAudio) return;

    if (voiceAudio.paused) {
      voiceAudio.play();
      voiceBtn.classList.add("playing");
    } else {
      voiceAudio.pause();
      voiceBtn.classList.remove("playing");
    }
  });

  voiceAudio.addEventListener("ended", () => {
    voiceBtn.classList.remove("playing");
  });

  /* Reset to play icon when voice ends */
  voiceAudio.addEventListener("ended", () => {
    voiceBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <polygon points="8,5 19,12 8,19"></polygon>
      </svg>`;
  });


  // Reset button when audio ends
  voiceAudio.addEventListener("ended", () => {
    voiceBtn.innerText = "▶";
  });


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


  // /* ===============================
  //    🎈 FLOATING BALLOONS
  // =============================== */

  // function createBalloon() {
  //   const balloon = document.createElement("div");
  //   balloon.className = "balloon";
  //   balloon.innerHTML = "💖";

  //   balloon.style.left = Math.random() * 100 + "vw";
  //   balloon.style.animationDuration = 6 + Math.random() * 5 + "s";

  //   document.body.appendChild(balloon);
  //   setTimeout(() => balloon.remove(), 10000);
  // }

  // setInterval(createBalloon, 1200);


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
     💌 DID YOU KNOW MODAL
  =============================== */

  const affirmations = [
    "I choose you on the easy days and on the overwhelming ones.",
    "You make my world softer and brighter.",
    "You matter to me in ways I can’t fully explain.",
    "You are not too much. You are just right for me.",
    "You make me want to be better, but never someone else.",
    "Loving you feels like home.",
    "With you, I don’t feel like I have to perform.",
    "You are my favorite part of the day.",
    "I’m proud of you, even on your quiet days.",
    "Distance doesn’t make you smaller in my life.",
    "I carry you with me in small ways every day.",
    "You are worth the wait, the effort, and the time.",
    "You are the most beautiful girl I know, baby.",
    "You’re my favorite notification.",
    "Ikaw ang pahinga ko kahit hindi ka nagpapahinga.",
    "You make me soft. And I don’t even complain about it.",
    "I’d still choose you. Kahit magsungit ka :P",
    "You’re my calm… and sometimes my chaos. I like both ;)",
    "Imagine when we don’t need Wi-Fi to say goodnight.",
    "You don’t even know how much I adore you. Or maybe you do.",
    "I've never loved anyone the way I love you, Chai."
  ];

  let affirmationIndex = -1;
  let hasRevealed = false;

  window.openAffirmationModal = function () {
    const modal = document.getElementById("affirmationModal");
    modal.classList.add("active");

    hasRevealed = false;
    affirmationIndex = -1;

    const card = document.querySelector(".affirmation-card");
    const content = document.getElementById("affirmationContent");

    card.classList.remove("revealed");
    content.textContent = "Click Me 💌";
  };

  window.closeAffirmationModal = function () {
    document.getElementById("affirmationModal")
      .classList.remove("active");
  };

  window.handleAffirmationClick = function () {
    const card = document.querySelector(".affirmation-card");
    const content = document.getElementById("affirmationContent");

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * affirmations.length);
    } while (newIndex === affirmationIndex);

    affirmationIndex = newIndex;

    card.classList.add("flash");

    setTimeout(() => {
      content.textContent = affirmations[affirmationIndex];
      card.classList.add("revealed");
      card.classList.remove("flash");
    }, 200);

    hasRevealed = true;
  };


  const body = document.body;

  audio.addEventListener("play", () => {
    body.classList.add("music-playing");
  });

  audio.addEventListener("pause", () => {
    body.classList.remove("music-playing");
  });



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
