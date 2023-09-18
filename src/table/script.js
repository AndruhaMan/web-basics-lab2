'use strict';

const container = document.querySelector(".container");

for (let i = 0; i < 36; i++) {
  container.innerHTML += `
    <div class="cell" onmouseover="setRandomColor(this);" ondblclick="setDiagonalColor()">
      <input type="color" class="color-picker" oninput="setPickedColor(this)"/>
      ${i + 1}
    </div>
  `;
}

function setRandomColor(element) {
  element.style.backgroundColor = getRandomColor();
  element.style.color = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setPickedColor(element) {
  element.parentElement.style.backgroundColor = element.value;
}

function setDiagonalColor() {
  const color = getRandomColor();

  for (let i = 0; i < 6; i++) {
    container.children[6*i+i].style.backgroundColor = color;
  }
}