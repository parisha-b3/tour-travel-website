document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchBarContainer = document.querySelector('.search-bar-container');
    const formBtn = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form-container');
    const formClose = document.getElementById('form-close');
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar');
    const videoBtns = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');

    // Toggle search bar visibility
    searchBtn.addEventListener('click', () => {
        searchBarContainer.classList.toggle('active');
        searchBtn.classList.toggle('fa-times');
    });

    // Toggle login form visibility
    formBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
    });

    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });

    // Close search bar and login form on scroll
    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchBarContainer.classList.remove('active');
    };

    // Toggle navbar visibility on mobile
    menuBar.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBar.classList.toggle('fa-times'); // Optionally, change icon on toggle
    });

    // Change video source on button click
    videoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            videoSlider.src = src;
            videoSlider.play(); // Ensure the video starts playing
        });
    });
});

var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var brandSwiper = new Swiper(".brand-slider", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    slidesPerView: 'auto',
});
