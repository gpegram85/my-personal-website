const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

/* document.querySelector("body").appendChild(h2); */


const gpText = document.getElementById('gp');

const colors = [
  '#2D00F7',
  '#6A00F4',
  '#8900F2',
  '#A100F2',
  '#B100E8',
  '#BC00DD',
  '#D100D1',
  '#DB00B6',
  '#E500A4',
  '#F20089'
];

let currentIndex = 0;

gpText.addEventListener('click', function() {
  gpText.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});
