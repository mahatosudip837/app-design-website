function navMenu(){
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollUp');

    window.onscroll = function(){
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add('navbar-sticky-moved-up');
        }else{
            navBar.classList.remove('navbar-sticky-moved-up');
        }

        if(scroll >= 250){
            navBar.classList.add('navbar-sticky-transitioned');
            scrollTopButton.classList.add('scrollActive');
        }else{
            navBar.classList.remove('navbar-sticky-transitioned');
            scrollTopButton.classList.remove('scrollActive');
        }

        if(scroll >= 500){
            navBar.classList.add('navbar-sticky-on');
        }else{
            navBar.classList.remove('navbar-sticky-on');
        }
    }
}
navMenu();

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove('show');
    })
})

var swiper = new Swiper(".app-screen", {
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
      clickable:true,
    },
  });

$(document).ready(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
});