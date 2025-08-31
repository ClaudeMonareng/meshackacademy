
// LOADER CONTAINER

// const loaderContainer = document.querySelector('.loader-container');
// const pageContent = document.querySelector('#page-content');

// window.addEventListener('load', () => {
//     loaderContainer.classList.add('hidden')
//     pageContent.classList.add('visible')
// })

/***********************************
RESPONSIVE NAVIGATION MENU TOGGLE

***********************************/
  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  // menuBtn.addEventListener("click", () => {

  //     navigation.classList.add("active");
  // });

  // closeBtn.addEventListener("click", () => {

  //     navigation.classList.remove("active");
  // })
  
/***********************************
SHOW MENU

***********************************/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', ()=>{
    nav.classList.toggle('show-menu')
    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')

  
/***********************************
NAVIGATION BAR EFFECTS

***********************************/
  window.addEventListener("scroll", function(){

      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
  });


/***********************************
INITIALIZE SWIPER

***********************************/
var swiper = new Swiper(".mySwiper", {
  
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/***********************************
OUR CLIENTS - SWIPER

***********************************/
var swiper = new Swiper(".clients-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  },
  pagination: {
  el: ".swiper-pagination",
  },
});