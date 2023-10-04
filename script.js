const Audios = [
  {
    title: 'Classic beat',
    artist: ' By Pixababy',
    file: 'https://cdn.pixabay.com/download/audio/2023/08/18/audio_6b90a94871.mp3?filename=dont-stop-me-abstract-future-bass-162753.mp3',
    image: 'cover 1.jpg'
  },
  {
    title: 'Rock',
    artist: 'By Pixabay',
    file: 'https://cdn.pixabay.com/download/audio/2023/08/18/audio_7cc4d951e0.mp3',
    image: 'cover 2.jpg'
  },
  {
    title: 'I am on',
    artist: 'By Pixabay',
    file: 'https://cdn.pixabay.com/download/audio/2023/09/13/audio_ee2221f74c.mp3',
    image: 'cover 3.jpg'
  }
];

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const repeatButton = document.getElementById('repeat');

const audio = new Audio();
let currentAudioIndex = 0;
let isPlaying = false;
let isRepeat = false;
function playAudio() {
  const currentAudio = Audios[currentAudioIndex];
  const AudioTitle = document.querySelector('.audio-info h2');
  const AudioArtist = document.querySelector('.audio-info h3');
  const progressBar = document.querySelector('.progress');

  audio.src = currentAudio.file;
  AudioTitle.textContent = currentAudio.title;
  AudioArtist.textContent = currentAudio.artist;
  progressBar.style.width = 0;

  audio.play();
  isPlaying = true;
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}

function playNextAudio() {
  currentAudioIndex++;
  if (currentAudioIndex >= Audios.length) {
    currentAudioIndex = 0;
  }
  playAudio();
}

function playPrevAudio() {
  currentAudioIndex--;
  if (currentAudioIndex < 0) {
    currentAudioIndex = Audios.length - 1;
  }
  playAudio();
}

function updateProgressBar() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressBar = document.querySelector('.progress');
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;

  if (currentTime >= duration && isRepeat) {
    playAudio();
  } else if (currentTime >= duration) {
    pauseAudio();
  }
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatButton.classList.toggle('active');
}

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
nextButton.addEventListener('click', playNextAudio);
prevButton.addEventListener('click', playPrevAudio);
repeatButton.addEventListener('click', toggleRepeat);
audio.addEventListener('ended', playNextAudio);
audio.addEventListener('timeupdate', updateProgressBar);

// caraousel

const carousel = [...document.querySelectorAll('.carousel img')];

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } else{
        carouselImageIndex++;
    }

    carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {
    changeCarousel();
}, 3000);