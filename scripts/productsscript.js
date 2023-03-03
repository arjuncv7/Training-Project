function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarHeader = document.querySelector(".header__logo.sidebar-header");
  if (sidebarHeader.textContent == "Feature Tester") {
    sidebarHeader.textContent = "FT";
  } else {
    sidebarHeader.textContent = "Feature Tester";
  }

  sidebar.classList.toggle("close");
}

//carousal
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -(
  cardCount * carouselWidth +
  cardMarginRight * cardCount -
  carouselWidth -
  cardMarginRight
);

leftButton.addEventListener("click", function () {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});

rightButton.addEventListener("click", function () {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
});
