window.onload = function() {

  const inputs = document.querySelectorAll('.controls input');

  const resetButton = document.querySelector('.reset');

  function reset() {
    inputs.forEach(function(input){
      input.value = "0";
    })
    document.documentElement.style.setProperty("--blur", 0 + "px")
    document.documentElement.style.setProperty(`--sepia`,0)
    document.documentElement.style.setProperty(`--invert`,0)
    document.documentElement.style.setProperty(`--gray`,0)
    document.documentElement.style.setProperty(`--hue`, 0 + "deg")
  }
  resetButton.addEventListener('click', reset);



  function updateHandler() {
    if(this.dataset.sizing == "px"){
      document.documentElement.style.setProperty("--blur", this.value + "px")
    }
    else if(this.dataset.scale == "1"){
      document.documentElement.style.setProperty(`--${this.name}`, this.value/100)
    }
    else if(this.name == "borderColor"){
      document.documentElement.style.setProperty("--borderColor", this.value)
    }
    else if(this.name == "hue"){
      document.documentElement.style.setProperty(`--hue`, this.value + "deg")
    }
    console.log(this.value,this.dataset);
  }

  inputs.forEach(function(input){
    input.addEventListener('change', updateHandler);
    input.addEventListener('mousemove', updateHandler);
  })

};
