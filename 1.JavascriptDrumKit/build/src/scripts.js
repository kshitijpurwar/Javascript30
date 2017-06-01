window.onload = function() {

  function playSoundAndEffect(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Do nothing if audio not found
    audio.currentTime = 0; // Reset the audio if it's already playing
    audio.play();
    key.classList.add('playing')
  }

  const keys = document.querySelectorAll('.key');

  keys.forEach(key => key.addEventListener('transitionend', removeEffect))

  function removeEffect(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing');
  }

  window.addEventListener('keydown', playSoundAndEffect);


};
