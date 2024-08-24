let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow_item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Добавляем обработчики для кнопок на каждом слайде
document.querySelector('#btn_slide_1').addEventListener('click', function() {
    window.location.href = 'page1.html';
});

document.querySelector('#btn_slide_2').addEventListener('click', function() {
    window.location.href = 'page2.html';
});

document.querySelector('#btn_slide_3').addEventListener('click', function() {
    window.location.href = 'page3.html';
});

document.querySelector('#btn_slide_4').addEventListener('click', function() {
    window.location.href = 'page4.html';
});

// Автоматическое переключение слайдов через каждые 10 секунд
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000);

// Показ первого слайда при загрузке страницы
showSlide(currentIndex);
