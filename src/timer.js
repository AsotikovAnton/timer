export const timerVision = () => {
  const audio = document.getElementById('audio');
  const audioStart = document.getElementById('audio-start');
  const timer = document.querySelector('.timer');
  const input = document.querySelector('.time-input');
  const playBtn = document.getElementById('button-addon2');
  
  timer.textContent = 60;
  input.value = 60;
  
  const playTimer = () => {
    playAudioStart();
    timer.textContent = input.value;
    input.disabled = true;
    playBtn.disabled = true;
  
    let timerInterval = setInterval(() => {
      if (timer.textContent > 0) {
        timer.textContent --;
      }
  
      if (timer.textContent == Math.ceil(input.value / 2)) {
        playAudio();
      }
  
      if (timer.textContent < 1) {
        playAudio();
        clearInterval(timerInterval);
        input.disabled = false;
        playBtn.disabled = false;
      }
  
    }, 1000);
  }
  
  const playAudio = () => {
    audio.play();
    audio.currentTime = 0.0;
  }

  const playAudioStart = () => {
    audioStart.play();
    audioStart.currentTime = 0.0;
  }
  
  playBtn.addEventListener('click', playTimer);
}