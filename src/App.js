import "./App.css";
import React, { useState } from "react";
import URIs from "./commons/tmdbApis";
import Banner from "./components/Banner";
import GenreRow from "./components/commons/GenreRow";
import NavBar from "./components/NavBar";

function App() {
  const [bannerMovie, setBannerMovie] = useState("");

  return (
    <div className="App">
      <NavBar />
      <Banner bannerMovie={bannerMovie} />
      <div className="app__genreContainer">
        <GenreRow
          title="NETFLIX ORIGINALS"
          fetchURL={URIs.fetchNetflixOriginals}
          setBannerMovie={setBannerMovie}
        />
        <GenreRow title="Trending Now" fetchURL={URIs.fetchTrending} />
        <GenreRow title="Top Rated" fetchURL={URIs.fetchTopRated} />
        <GenreRow title="Action Movies" fetchURL={URIs.fetchActionMovies} />
        <GenreRow title="Comedy Movies" fetchURL={URIs.fetchComedyMovies} />
        <GenreRow title="Horror Movies" fetchURL={URIs.fetchHorrorMovies} />
        <GenreRow title="Documentaries" fetchURL={URIs.fetchDocumentaries} />
        <GenreRow title="Romance Movies" fetchURL={URIs.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default App;
