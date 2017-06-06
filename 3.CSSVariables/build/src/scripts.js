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
    switch (this.name) {
      case "blur":
         document.documentElement.style.setProperty("--blur", this.value + "px");
         break;

      case "hue":
        document.documentElement.style.setProperty(`--hue`, this.value + "deg");
        break;

      case "invert":
      case "sepia":
      case "gray":
        document.documentElement.style.setProperty(`--${this.name}`, this.value/100);
        break;

      case "borderColor":
        document.documentElement.style.setProperty("--borderColor", this.value)
        break;

      default:
        return 0;
    }
  }

  inputs.forEach(function(input){
    input.addEventListener('change', updateHandler);
    input.addEventListener('mousemove', updateHandler);
  })

};
