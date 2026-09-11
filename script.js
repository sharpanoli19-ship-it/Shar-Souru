// ---------------------------------------------
// ENTER BUTTON -> scroll to intro
// ---------------------------------------------
const enterBtn = document.getElementById('enterBtn');
if (enterBtn) {
  enterBtn.addEventListener('click', () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
  });
}

// ---------------------------------------------
// SCROLL REVEAL (IntersectionObserver)
// ---------------------------------------------
const revealTargets = document.querySelectorAll('.reveal, .reveal-photo');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// Final photo un-blurs once its section is visible
const finalPhoto = document.getElementById('finalPhoto');
if (finalPhoto) {
  const finalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => finalPhoto.classList.add('is-clear'), 900);
        finalObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  finalObserver.observe(finalPhoto);
}

// ---------------------------------------------
// LIVE COUNTER — calculated automatically from 28 June 2026
// ---------------------------------------------
const START_DATE = new Date('2026-06-28T00:00:00');

function updateCounter() {
  const now = new Date();
  let diffMs = now - START_DATE;
  if (diffMs < 0) diffMs = 0;

  const totalMinutes = Math.floor(diffMs / 60000);
  const totalHours = Math.floor(diffMs / 3600000);
  const totalDays = Math.floor(diffMs / 86400000);

  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMinutes');

  if (daysEl) daysEl.textContent = totalDays.toLocaleString();
  if (hoursEl) hoursEl.textContent = totalHours.toLocaleString();
  if (minsEl) minsEl.textContent = totalMinutes.toLocaleString();
}

updateCounter();
setInterval(updateCounter, 30000); // refresh every 30s, minutes-level precision is plenty

// ---------------------------------------------
// EASTER EGGS
// ---------------------------------------------
const eggButtons = document.querySelectorAll('.egg');
const eggReveal = document.getElementById('eggReveal');

eggButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!eggReveal) return;
    eggReveal.textContent = btn.dataset.msg;
    eggReveal.classList.remove('is-visible');
    // restart the fade
    void eggReveal.offsetWidth;
    eggReveal.classList.add('is-visible');
  });
});

// ---------------------------------------------
// DON'T CLICK BUTTON
// ---------------------------------------------
const dontClickBtn = document.getElementById('dontClickBtn');
const dontClickResponse = document.getElementById('dontClickResponse');
let dontClickStage = 0;

if (dontClickBtn) {
  dontClickBtn.addEventListener('click', () => {
    dontClickStage++;
    if (dontClickStage === 1) {
      dontClickResponse.textContent = "I knew you would.";
      dontClickBtn.textContent = "okay, one more click";
    } else {
      dontClickResponse.textContent = "Good. Because I have one more thing to say. Keep scrolling.";
      dontClickBtn.style.display = 'none';
    }
    dontClickResponse.classList.remove('is-visible');
    void dontClickResponse.offsetWidth;
    dontClickResponse.classList.add('is-visible');
  });
}

// ---------------------------------------------
// SOUND TOGGLE (optional — only plays if an audio source is set in index.html)
// ---------------------------------------------
const soundToggle = document.getElementById('soundToggle');
const soundLabel = document.getElementById('soundLabel');
const bgAudio = document.getElementById('bgAudio');
let soundOn = false;

if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    // If no audio source has been configured, let the user know instead of failing silently.
    const hasSource = bgAudio && bgAudio.querySelector('source');
    if (!hasSource) {
      soundLabel.textContent = 'no song added yet';
      setTimeout(() => { soundLabel.textContent = 'sound off'; }, 2000);
      return;
    }
    soundOn = !soundOn;
    if (soundOn) {
      bgAudio.play();
      soundLabel.textContent = 'sound on';
    } else {
      bgAudio.pause();
      soundLabel.textContent = 'sound off';
    }
  });
}

// ---------------------------------------------
// REPLAY BUTTON
// ---------------------------------------------
const replayBtn = document.getElementById('replayBtn');
if (replayBtn) {
  replayBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
