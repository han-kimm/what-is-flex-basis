const $back = document.querySelector(`.backward`);
const $for = document.querySelector(`.forward`);
let currentPage = 1;

function showLength() {
  for (let i = 1; i < 12; i += 2) {
    for (let j = 0; j < 3; j++) {
      let element = document.querySelector(`#test${i + 1}`).children[j];
      element.textContent = document.querySelector(`#test${i}`).children[
        j
      ].clientWidth;
    }
  }
}

function backward() {
  if (currentPage === 1) {
    return;
  }
  if (currentPage === 4) {
    for (let i = 1; i < 3; i++) {
      document.querySelector(`.case${i}`).classList.add(`none`);
      document.querySelector(`.case${i + 1}`).classList.remove(`betweenbuff`);
    }
    currentPage--;
    return;
  }
  document.querySelector(`.case${currentPage}`).classList.add(`none`);
  currentPage--;
  document.querySelector(`.case${currentPage}`).classList.remove(`none`);
}

function forward() {
  if (currentPage === 4) {
    return;
  }
  if (currentPage === 3) {
    for (let i = 1; i < 3; i++) {
      document.querySelector(`.case${i}`).classList.remove(`none`);
      document.querySelector(`.case${i + 1}`).classList.add(`betweenbuff`);
    }
    currentPage++;
    return;
  }
  document.querySelector(`.case${currentPage}`).classList.add(`none`);
  currentPage++;
  document.querySelector(`.case${currentPage}`).classList.remove(`none`);
}

window.addEventListener("mousemove", showLength);
$back.addEventListener("click", backward);
$for.addEventListener("click", forward);
