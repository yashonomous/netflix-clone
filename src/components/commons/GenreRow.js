import { async } from "q";
import React, { useEffect, useState } from "react";
import axios from "../../commons/axios";
import { IMAGE_BASE_URL } from "../../commons/tmdbApis";
import "../../styles/GenreRow.css";

const GenreRow = ({ title, fetchURL, setBannerMovie }) => {
  const [movies, setMovies] = useState([]);
  const [isLargeRow, setIsLargeRow] = useState(false);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const response = await axios.get(fetchURL);
      //   console.log(response);
      setMovies(response.data.results);
      if (title === "NETFLIX ORIGINALS" && setBannerMovie) {
        setIsLargeRow(true);
        setBannerMovie(
          response.data.results[
            Math.floor(Math.random() * (response.data.results.length - 1))
          ]
        );
        // debugger;
        console.log(
          response.data.results[
            Math.floor(Math.random() * (response.data.results.length - 1))
          ]
        );
      }

      return response;
    };

    fetchMoviesData();
  }, [title, fetchURL, setBannerMovie]);

  return (
    <div className="genrerows__container">
      {/*  genre title  */}
      <h2
        style={{
          marginLeft: "0.8rem",
          marginTop: "1.5rem",
          marginBottom: "0.3rem",
          color: "white",
        }}
      >
        {title}
      </h2>

      {/* container -> posters */}
      <div className="genrerows__postersContainer">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`genrerows__poster ${isLargeRow ? "large" : ""}`}
            src={
              isLargeRow
                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                : `${IMAGE_BASE_URL}/${movie.poster_path}`
            }
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default GenreRow;
