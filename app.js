const lines = document.querySelector(".lines");
const submenu = document.querySelector('.submenu');
const drop = document.querySelector('--dropdown');

lines.addEventListener("click", function () {
  this.classList.toggle("close");
});
drop.addEventListener("click", function () {
  submenu.classList.toggle("open");
});
