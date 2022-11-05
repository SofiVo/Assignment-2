import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  const [data, setData] = useState();
  const [trending, setTrending] = useState();
  const [topRated, setTopRated] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [comedies, setComedies] = useState();
  const [horror, setHorror] = useState();
  const [romanticMovies, setRomanticMovies] = useState();
  const [documentaries, setDocumentaries] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=6047771aaf92f9603f114fd32035f2ce&with_network=123"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setData(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=6047771aaf92f9603f114fd32035f2ce&language=en-US"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setTrending(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=6047771aaf92f9603f114fd32035f2ce&language=en-US"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setTopRated(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6047771aaf92f9603f114fd32035f2ce&with_genres=28"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setActionMovies(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6047771aaf92f9603f114fd32035f2ce&with_genres=35"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setComedies(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6047771aaf92f9603f114fd32035f2ce&with_genres=27"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setHorror(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6047771aaf92f9603f114fd32035f2ce&with_genres=10749"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setRomanticMovies(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6047771aaf92f9603f114fd32035f2ce&with_genres=99"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
          });
        }
        setDocumentaries(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Browse
              movies={data}
              trendingMovies={trending}
              topRated={topRated}
              actionMovies={actionMovies}
              comedies={comedies}
              horror={horror}
              romanticMovies={romanticMovies}
              documentaries={documentaries}
            />
          }
        />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
