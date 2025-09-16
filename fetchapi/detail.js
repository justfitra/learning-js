const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const title = document.getElementById("title");
const img = document.getElementById("img");
const containerDetailBg = document.getElementById("container-detail");
const description = document.getElementById("description");
const genres = document.getElementById("genres");
const date = document.getElementById("date");
const productionCompanies = document.getElementById("production_companies");

async function getDetail() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhmYTMwNTI5ODY2YmU2YTk2NzM3YzdjY2QxYWY4YiIsIm5iZiI6MTc1NzMzODA1OC4yOTksInN1YiI6IjY4YmVkOWNhZTFjODBkMTE1NDk0Nzk5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TQGfqNOWDrHi-rxWLXePxgh_SKarJI-Q8bpEgGDoKAo",
        accept: "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Error : ${res.status_message}`);
    }

    const data = await res.json();
    const releaseDate = new Date(`${data.release_date}`);
    const options = {
      day: "numeric",
      year: "numeric",
      month: "long",
    };

    title.textContent = data.title;
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    containerDetailBg.style.background = `url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}') no-repeat center `;
    containerDetailBg.style.backgroundSize = "cover";
    img.alt = data.title;
    date.textContent = releaseDate.toLocaleDateString("en-US", options);
    data.genres.map((res) => {
      const genre = document.createElement("li");

      genre.textContent = res.name;
      genre.style = "font-weight: normal";

      genres.appendChild(genre);
    });
    data.production_companies.map((res) => {
      const company = document.createElement("li");
      const image = document.createElement("img");

      image.src = `https://image.tmdb.org/t/p/original/${res.logo_path}`;
      image.style.width = "100px";
      image.alt = res.name;
      console.log(image);

      company.style = "font-weight: normal";
      company.appendChild(image);

      productionCompanies.appendChild(company);
    });
    description.textContent = data.overview;
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

window.addEventListener("load", () => getDetail());
