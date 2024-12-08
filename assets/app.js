const show = document.getElementById("show");
const hide = document.getElementById("hide");
const sidebar = document.getElementById("sidebar");
const bodyB = document.getElementById("div");

// show side bar
const showSide = () => {
  sidebar.style.display = "block";
  bodyB.style.display = "block";
};
show.addEventListener("click", function () {
  showSide();
});

// hide side bar
const hideSide = () => {
  sidebar.style.display = "none";
  bodyB.style.display = "none";
};
hide.addEventListener("click", function () {
  hideSide();
});
