document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     💌 VALENTINE LETTER + ENVELOPE
  =============================== */
const letterText = `

Happy Valentine’s Day, Baby!

I know we’re celebrating this day miles apart, and if I’m being honest, I wish I could sit beside you right now — kahit tahimik lang, kahit walang ginagawa. Pero habang hindi pa, I made something small for you. Not because I have to impress you (ofc I want to impress you baby, tho ito lang kinaya ng time), but because you deserve something made with effort and intention.

Thank you for choosing me — especially on the days when you’re tired, overwhelmed, or doubting yourself. Alam ko hindi madali ang lahat ngayon. Your schedule is crazy, your mind is full, and your body is exhausted. But even in that state, you still love. And that says so much about your heart.

I want you to know na I don’t love you because you’re strong. I don’t love you because you can handle everything. I love you because you’re you — even when you feel weak, even when you’re unsure, even kapag masungit ka :P

Distance is hard sometimes, I won’t lie. I miss your presence — the kind na hindi natin kailangan magsalita, where just being beside you feels safe, and warm.. But even from here, I’m choosing you. Not out of need. Not out of fear. But because I genuinely want you, Chai.

I’m proud of you my baby. For how you keep showing up despite everything.

Soon, we’ll celebrate Valentine’s without screens and signal issues, without saying "putol-putol" HAHAHAHA. But for now, this is us — two people trying, choosing, loving, even across distance. And that means something. It always means something.

Thank you for being my person.

I’m here.
And I’m not going anywhere.

Salamat, ikaw 'to. Padaba taka, Chai.

See you soon, my love.🤍

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

  const targetDate = new Date("2026-03-01T00:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl) return;

    if (diff <= 0) {
      daysEl.innerText = "0";
      hoursEl.innerText = "0";
      minutesEl.innerText = "0";
      secondsEl.innerText = "0";
      return;
    }

    daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    hoursEl.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutesEl.innerText = Math.floor((diff / (1000 * 60)) % 60);
    secondsEl.innerText = Math.floor((diff / 1000) % 60);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();


  /* ===============================
     🎧 MUSIC PLAYER
  =============================== */

  const songs = [
    {
      title: "Bless the Telephone",
      artist: "Labi Siffre",
      src: "assets/music/song1.mp3",
      cover: "assets/music/cover1.jpg"
    },
    {
      title: "Easily",
      artist: "Bruno Major",
      src: "assets/music/song2.mp3",
      cover: "assets/music/cover2.jpg"
    },
    {
      title: "I've Seen It",
      artist: "Olivia Dean",
      src: "assets/music/song5.mp3",
      cover: "assets/music/cover5.jpg"
    },
    {
      title: "Celeste",
      artist: "Tothapi",
      src: "assets/music/song6.mp3",
      cover: "assets/music/cover6.jpg"
    },
    {
      title: "Panata",
      artist: "Tothapi",
      src: "assets/music/song7.mp3",
      cover: "assets/music/cover7.jpg"
    },
    {
      title: "Pahintulot",
      artist: "Shirebound",
      src: "assets/music/song8.mp3",
      cover: "assets/music/cover8.jpg"
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
    "I've never loved anyone the way I love you, Chai.",
    "Hi Miss, pa-kiss.",
    "Ikaw lang, palagi baby."
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
    content.textContent = "Click Here Baby 💌";
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

const targetDate = new Date('2026-03-01T00:00:00'); // March 1

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











