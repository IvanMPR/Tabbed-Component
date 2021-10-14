'use-strict';
const contentContainer = document.querySelector('.tc-container');
const contentDivs = document.querySelectorAll('.content');
const btnContainer = document.querySelector('.buttons-container');
const buttons = document.querySelectorAll('.btn');

function init() {
  contentDivs.forEach(div => div.classList.add('hidden'));
  document.querySelector('.content[data-num="0"]').classList.remove('hidden');
  document.querySelector('.btn[data-btn="0"]').classList.add('btn-active');
}
init();

btnContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;
  const num = e.target.dataset.btn;
  const currentBtn = document.querySelector(`.btn[data-btn="${num}"]`);
  const currentColor = window
    .getComputedStyle(currentBtn)
    .getPropertyValue('background-color');
  //  Change border color on parent container
  contentContainer.style.border = `2px solid ${currentColor}`;
  // Remove active class from all btn-s and add it to active one
  buttons.forEach(btn => btn.classList.remove('btn-active'));
  currentBtn.classList.add('btn-active');

  // Add hidden class to all content divs and remove it from active one
  contentDivs.forEach(div => div.classList.add('hidden'));
  document
    .querySelector(`.content[data-num="${num}"`)
    .classList.remove('hidden');
});
