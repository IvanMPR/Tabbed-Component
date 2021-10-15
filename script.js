'use-strict';

const contentContainer = document.querySelector('.tc-container');
const contentDivs = document.querySelectorAll('.content');
const btnContainer = document.querySelector('.buttons-container');
const buttons = document.querySelectorAll('.btn');

// Make first tab active by default
function init() {
  contentDivs.forEach(div => div.classList.add('hidden'));
  document.querySelector('.content[data-num="0"]').classList.remove('hidden');
  //prettier-ignore
  document.querySelector('.btn[data-btn="0"]').classList.add('btn-active', 'btn-0-active');
}
init();

btnContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn')) return;
  const num = e.target.dataset.btn;
  const currentBtn = document.querySelector(`.btn[data-btn="${num}"]`);
  //prettier-ignore
  const currentColor = window.getComputedStyle(currentBtn).getPropertyValue('background-color');
  //  Change border color on parent container
  contentContainer.style.border = `2px solid ${currentColor}`;
  // Remove active class from all btn-s and add it to active one
  //prettier-ignore
  buttons.forEach(btn => btn.classList.remove('btn-active','btn-0-active', 'btn-1-active', 'btn-2-active'));
  currentBtn.classList.add('btn-active');
  currentBtn.classList.add(`btn-${num}-active`);
  // Add hidden class to all content divs and remove it from active one
  contentDivs.forEach(div => div.classList.add('hidden'));
  //prettier-ignore
  document .querySelector(`.content[data-num="${num}"`).classList.remove('hidden');
});
