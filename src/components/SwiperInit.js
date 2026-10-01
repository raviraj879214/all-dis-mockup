"use client";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

function initSwipers() {
  // Prevent double initialization
  if(document.querySelector('.hero-banner-slider') && !document.querySelector('.hero-banner-slider').swiper){
    new Swiper(".hero-banner-slider", {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  }

  if(document.querySelector('.swiper-related-products') && !document.querySelector('.swiper-related-products').swiper){
    new Swiper(".swiper-related-products", {
      modules: [Pagination],
      spaceBetween: 30,
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints :{
        0: {
          slidesPerView: 1,
        },
        767:{
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        }
      }
    });
  }

  
  if(document.querySelector('.thumbSwiper') && !document.querySelector('.thumbSwiper').swiper){
    const thumbSwiper = new Swiper(".thumbSwiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      direction: "horizontal", // mobile default
      watchSlidesProgress: true,
      breakpoints: {
        992: {
          direction: "vertical", // desktop
          spaceBetween: 20,
        }
      }
    });

    const mainSwiper = new Swiper(".mainSwiper", {
      modules: [Pagination, Navigation, Thumbs],
      spaceBetween: 10,
      slidesPerView: 1,
      // loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  }

}

export default function SwiperInit() {
  useEffect(() => {
    // Initial try in case HTML is already present
    initSwipers();
    // Observe for DOM changes
    const observer = new MutationObserver(() => {
      initSwipers();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
} 