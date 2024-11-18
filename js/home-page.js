const wrapper= document.querySelector('.home-content');

window.addEventListener('load',()=>{
    wrapper.classList.add('show');
});


// var wrapper = document.querySelector('.home-content');

// wrapper.addEventListener('mouseover', (event) => {
//   const target = event.target;
//   if (target.classList.contains('button') && !target.classList.contains('no-animation')) {
//     const x = (event.pageX - target.offsetLeft);
//     const y = (event.pageY - target.offsetTop);

//     target.style.setProperty("--xPos", x + "px");
//     target.style.setProperty("--yPos", y + "px");
//   }
// });
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// // 设置初始活动的幻灯片
// slides[currentSlide].classList.add('active');

// // 轮播函数
// function nextSlide() {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add('active');
// }

// // 设置轮播定时器
// const interval = 3000; // 轮播间隔时间，单位：毫秒
// setInterval(nextSlide, interval);
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(currentSlide); // 初始化显示第一张轮播图




const urlParams = new URLSearchParams(window.location.search);
const slideIndex = parseInt(urlParams.get('slide'));

// 设置轮播图的初始索引
const carousel = document.getElementById('carousel');
carousel.dataset.currentIndex = slideIndex;