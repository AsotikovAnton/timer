export const timerVision = () => {
  const audio = document.getElementById('audio');
  const audioStart = document.getElementById('audio-start');
  const audioHalfTime = document.getElementById('audio-half-time');
  const audioFinish = document.getElementById('audio-finish');
  const timer = document.querySelector('.timer');
  const timeInput = document.querySelector('.time-input');
  const playBtn = document.getElementById('button-addon2');
  const pauseBtn = document.getElementById('pause');
  const themeBtn = document.getElementById('customSwitch1');
  const iterationsInput = document.getElementById('iterations-input');
  const iterations = document.querySelector('.remaining-iterations');
  
  
  iterations.textContent = 0;
  timer.textContent = 60;
  timeInput.value = 60;
  let paused = false;

  const playTimer = () => {
    playAudioStart();
    if (!paused) timer.textContent = timeInput.value;

    if (paused) {
      paused = false;
      pauseBtn.disabled = false;
    }
    
    timeInput.disabled = true;
    playBtn.disabled = true;

    let timerInterval = setInterval(() => {
      if (timer.textContent > 0) {
        timer.textContent--;
      }

      if (timer.textContent == Math.ceil(timeInput.value / 2)) {
        playAudioEnd();
      }

      if (timer.textContent == 0) {
        clearInterval(timerInterval);
        timeInput.disabled = false;
        playBtn.disabled = false;

        if (iterations.textContent > 0) {
          iterations.textContent--;
          playAudioEnd();
        }

        if (iterations.textContent == Math.ceil(timeInput.value / 2)) {
          playAudioHalfTime();
        }
        
        if (iterations.textContent == 0) {
          playBtn.disabled = true;
          pauseBtn.disabled = true;
          iterations.textContent = 'Конец';
          playAudioFinish();
        }
      }
      
      pauseBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        paused = true;
        playBtn.disabled = false;
        pauseBtn.disabled = true;
      });
    }, 1000);
  };

  const playAudioStart = () => {
    audioStart.play();
    audioStart.currentTime = 0.0;
  };

  const playAudioEnd = () => {
    audio.play();
    audio.currentTime = 0.0;
  };

  const playAudioHalfTime = () => {
    audioHalfTime.play();
    audioHalfTime.currentTime = 0.0;
  }
  
  const playAudioFinish = () => {
    audioFinish.play();
    audioFinish.currentTime = 0.0;
  };
  
  const changeTheme = () => {
    document.body.classList.toggle('light');
  }

  iterationsInput.addEventListener('change', () => {iterations.textContent = iterationsInput.value});
  playBtn.addEventListener('click', playTimer);
  themeBtn.addEventListener('click', changeTheme);
};
