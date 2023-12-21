const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

/* document.querySelector("body").appendChild(h2); */


const gpText = document.getElementById('gp');

const colors = [

  '#B100E8',
  '#BC00DD',
  '#D100D1',
  '#DB00B6',
  '#E500A4',
  '#F20089',
  '#E500A4',
  '#DB00B6',
  '#D100D1',
  '#BC00DD',
  '#B100E8'
  
];

let currentIndex = 0;

gpText.addEventListener('click', function() {
  gpText.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});


const reloadColor = document.getElementById('gp');

document.addEventListener('keypress', function(event) {
    if (event.key === "r") {
        reloadColor.style.color = '#e5e5e5'; /* reset the color to original value */
    }
});

const showElementLink = document.getElementById('showElementLink');
const hiddenElement = document.getElementById('hiddenElement');

showElementLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the link from navigating
  
  hiddenElement.classList.add('shown'); /* Show the hidden element */
});
