
 // add class .open to nav element on toggle
 const hamburger = document.querySelector('#ham');
 const menu = document.querySelector('.menu');
 const label = document.querySelector('label');
 
 hamburger.addEventListener ('click', () => {
     if (!menu.classList.contains('open')) {
         menu.classList.add('open');
     } else {
         menu.classList.remove('open');
     }

    //  rotate hamburger span on click

    label.classList.toggle('open');

    });



 // add mask to video on scroll
 const video = document.querySelector('.bkg-video');
 const videoMask = document.querySelector('#scrolly-video');
 
 // add mask-image with keyframes animation on scroll to videoMask
 
 window.addEventListener('scroll', () => {
     let value = 0 + window.scrollY / 100;
     video.style.opacity = value;
     
     let value2 = 0 + window.scrollY / 100;
     video.style.maskSize = value2 + 'vh';
     
     let value3 = 0 + window.scrollY * 3;
     video.style.webkitMaskSize = value3 + 'vh';

    });

// swiper slider code
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });

    //   add scroll to top button
    const scrollBtn = document.querySelector('.scroll-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollBtn.classList.add('show');
            // scrollBtn.classList.add('triangle');
        } else {
            scrollBtn.classList.remove('show');
            // scrollBtn.classList.remove('triangle');
        }
    });
    // add smooth scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
      
    