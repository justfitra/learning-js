import getGenre from "./genre.js";
import getNowPlaying from "./nowPaying.js";
import getPopularMovies from "./popular.js";
import getTopRatedMovies from "./toprated.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import getUpcomig from "./upcoming.js";
import searchMovie from "./search.js";

const ul = document.getElementById("popularMovies");
const genre = document.getElementById("genre-ul");
const swiperWrapper = document.getElementById("swiper-wrapper");
const nowPlayingList = document.getElementById("nowPlaying");
const topRatedList = document.getElementById("topRated");
const upcomingList = document.getElementById("upcoming");
const bannerContainer = document.querySelector(".banner-container");
const container = document.querySelector(".container");
const popularMoviesDelete = document.querySelector(".popularMovies");
const nowPayingDelete = document.querySelector(".nowPlaying");
const topRatedDelete = document.querySelector(".topRated");
const upcomingDelete = document.querySelector(".upcoming");
const searchInput = document.getElementById("search-value");
const searchForm = document.getElementById("search-form");
const searchResult = document.querySelector(".search-result");

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
  const bannerMovies = getTopRatedMovies();
  const movieGenre = getGenre();
  const nowPlaying = getNowPlaying();
  const topRated = getTopRatedMovies();
  const upcoming = getUpcomig();

  popularMovies.then((res) => {
    res.slice(0, 5).map((x) => {
      const list = document.createElement("li");
      const image = document.createElement("img");
      const div = document.createElement("div");
      const a = document.createElement("a");

      a.href = `/fetchapi/detail.html?id=${x.id}`;
      div.className = "card";
      image.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      image.alt = x.title;

      list.textContent = x.title;

      div.appendChild(image);
      div.appendChild(list);
      a.appendChild(div);
      ul.appendChild(a);
    });
  });

  nowPlaying.then((res) => {
    res.slice(6, 11).map((x) => {
      const list = document.createElement("li");
      const image = document.createElement("img");
      const div = document.createElement("div");
      const a = document.createElement("a");

      a.href = `/fetchapi/detail.html?id=${x.id}`;
      div.className = "card";
      image.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      image.alt = x.title;

      div.appendChild(image);
      div.appendChild(list);
      a.appendChild(div);
      nowPlayingList.appendChild(a);
    });
  });

  topRated.then((res) => {
    res.slice(6, 11).map((x) => {
      const list = document.createElement("li");
      const image = document.createElement("img");
      const div = document.createElement("div");
      const a = document.createElement("a");

      a.href = `/fetchapi/detail.html?id=${x.id}`;
      div.className = "card";
      image.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      image.alt = x.title;

      list.textContent = x.title;

      div.appendChild(image);
      div.appendChild(list);
      a.appendChild(div);
      topRatedList.appendChild(a);
    });
  });

  upcoming.then((res) => {
    res.slice(0, 5).map((x) => {
      const list = document.createElement("li");
      const image = document.createElement("img");
      const div = document.createElement("div");
      const a = document.createElement("a");

      a.href = `/fetchapi/detail.html?id=${x.id}`;
      div.className = "card";
      image.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      image.alt = x.title;

      list.textContent = x.title;

      div.appendChild(image);
      div.appendChild(list);
      a.appendChild(div);
      upcomingList.appendChild(a);
    });
  });

  bannerMovies.then((res) => {
    res.slice(4, 7).map((x) => {
      const releaseDate = new Date(`${x.release_date}`);
      const options = {
        day: "numeric",
        year: "numeric",
        month: "long",
      };
      const div = document.createElement("div");
      const filterDark = document.createElement("div");
      const bannerContainer = document.createElement("div");
      const content = document.createElement("div");
      const date = document.createElement("p");
      const title = document.createElement("h1");
      const description = document.createElement("p");
      const img = document.createElement("img");

      div.classList.toggle(`swiper-slide`);
      content.classList.toggle("content");
      filterDark.classList.toggle("filter-dark");
      img.classList.toggle("banner-image");
      bannerContainer.classList.toggle("banner-container");
      date.classList.toggle("date");

      div.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${x.backdrop_path}')`;
      img.src = `https://image.tmdb.org/t/p/w500/${x.poster_path}`;
      img.alt = x.title;
      title.textContent = x.title;
      description.textContent = x.overview;
      date.textContent = releaseDate.toLocaleDateString("en-US", options);

      bannerContainer.appendChild(img);
      content.appendChild(title);
      Promise.all(x.genre_ids.map((id) => getGenre(id))).then((genres) => {
        const genreList = document.createElement("p");
        genreList.textContent = genres;
        content.appendChild(genreList);
        content.insertBefore(genreList, date);
      });
      content.appendChild(date);
      content.appendChild(description);
      bannerContainer.appendChild(content);

      div.appendChild(bannerContainer);
      div.appendChild(filterDark);

      swiperWrapper.appendChild(div);
    });

    movieGenre.then((res) => {
      console.log(res);

      res.map((x) => {
        const li = document.createElement("li");

        li.classList.toggle("genre");
        li.textContent = x.name;

        genre.appendChild(li);
      });
    });
  });
});
let apiResults = [];
searchForm.addEventListener("click", (e) => {
  e.preventDefault();
  bannerContainer.remove();
  container.remove();
  topRatedDelete.remove();
  upcomingDelete.remove();
  nowPayingDelete.remove();
  popularMoviesDelete.remove();
  const oldResults = document.querySelector(".search-results-container");
  if (oldResults) oldResults.remove();
  const searchResultsContainer = document.createElement("div");
  searchResultsContainer.className = "search-results-container";
  searchResult.appendChild(searchResultsContainer);

  apiResults = [];
  searchMovie(searchInput.value).then((res) => {
    apiResults = res;
    apiResults.map((x) => {
      const resultItem = document.createElement("div");
      const title = document.createElement("h1");
      const description = document.createElement("p");
    });
  });
  searchForm.reset();
});
