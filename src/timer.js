export const timerVision = () => {
  const audioEnd = document.getElementById('audio');
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

  const play = (sound) => {
    sound.play();
    sound.currentTime = 0.0;
  }

  const changeTheme = () => {
    document.body.classList.toggle('light');
  }

  const playTimer = () => {
    play(audioStart);
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
        play(audioEnd);
      }

      if (timer.textContent == 0) {
        clearInterval(timerInterval);
        timeInput.disabled = false;
        playBtn.disabled = false;

        if (iterations.textContent > 0) {
          iterations.textContent--;
          play(audioEnd);
        }

        if (iterations.textContent == Math.ceil(timeInput.value / 2)) {
          play(audioHalfTime);
        }
        
        if (iterations.textContent == 0) {
          playBtn.disabled = true;
          pauseBtn.disabled = true;
          iterations.textContent = 'Конец';
          play(audioFinish);
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

  iterationsInput.addEventListener('change', () => {iterations.textContent = iterationsInput.value});
  playBtn.addEventListener('click', playTimer);
  themeBtn.addEventListener('click', changeTheme);
};
