async function getPopularMovies() {
  try {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
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
    return data.results;
  } catch (err) {
    console.log(err.message);
  }
}

export default getPopularMovies;
