import getPopularMovies from "./popular.js";
import getTopRatedMovies from "./toprated.js";
const ul = document.getElementById("ul");
const banner = document.getElementById("banner");

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

      list.textContent = x.title;
      console.log(x);

      div.appendChild(image);
      div.appendChild(list);
      ul.appendChild(div);
    });
  });

  topRatedMovies.then((res) => {
    res.slice(0, 1).map((x) => {
      const image = document.createElement("img");

      image.src = `https://image.tmdb.org/t/p/w500/${x.backdrop_path}`;

      banner.appendChild(image);
    });
  });
});
