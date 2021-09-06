/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((n) => {
    const sectionHeight = n.offsetHeight;
    const sectionTop = n.offsetTop - 50;
    const sectionId = n.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (document.querySelector(`.nav__menu a[href*=${sectionId}`)) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}`)
          .classList.add("active-link");
      }
    } else {
      if (document.querySelector(`.nav__menu a[href*=${sectionId}`)) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}`)
          .classList.remove("active-link");
      }
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};
