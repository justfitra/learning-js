import getPopularMovies from "./popular.js";
import getTopRatedMovies from "./toprated.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const ul = document.getElementById("ul");
const swiperWrapper = document.getElementById("swiper-wrapper");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

window.addEventListener("load", function () {
  const popularMovies = getPopularMovies();
  const topRatedMovies = getTopRatedMovies();

  popularMovies.then((res) => {
    res.slice(0, 5).map((x) => {
      const list = document.createElement("li");
      const image = document.createElement("img");
      const div = document.createElement("div");

      div.className = "card";
      image.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      image.alt = x.title;

      list.textContent = x.title;
      console.log(x);

      div.appendChild(image);
      div.appendChild(list);
      ul.appendChild(div);
    });
  });

  topRatedMovies.then((res) => {
    res.slice(2, 5).map((x) => {
      const div = document.createElement("div");
      const filterDark = document.createElement("div");
      const bannerContainer = document.createElement("div");
      const content = document.createElement("div");
      const title = document.createElement("h1");
      const description = document.createElement("p");
      const img = document.createElement("img");

      // list.classList.toggle(`slide:nth-child(${key})`);
      div.classList.toggle(`swiper-slide`);
      content.classList.toggle("content");
      filterDark.classList.toggle("filter-dark");
      img.classList.toggle("banner-image");
      bannerContainer.classList.toggle("banner-container");

      div.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${x.backdrop_path}')`;
      img.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      img.alt = x.title;
      title.textContent = x.title;
      description.textContent = x.overview;
      bannerContainer.appendChild(img);
      content.appendChild(title);
      content.appendChild(description);
      bannerContainer.appendChild(content);

      div.appendChild(bannerContainer);
      div.appendChild(filterDark);

      console.log(div);

      swiperWrapper.appendChild(div);
    });
  });
});
