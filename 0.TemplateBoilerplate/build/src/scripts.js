window.onload = function() {

  console.log(' Just Edit the files in "/build/src" folder and you are good to go with Live Reload, Linting and a lot more !!');

  const heading = document.querySelector('h2');

  let name = "Kshitij Purwar";

  let Iam = "Decent";

  heading.addEventListener('click',() => {
    alert(`Hi, this Template was made by ${name} the ${Iam} developer, huh !!`)
  });
};
