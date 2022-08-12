import React from "react";
import { IMAGE_BASE_URL } from "../commons/tmdbApis";
import "../styles/Banner.css";

const truncate = (text, countForTruncate) => {
  return text?.length > countForTruncate
    ? `${text?.substring(0, countForTruncate - 1)}...`
    : text;
};

const Banner = ({ bannerMovie }) => {
  return (
    <header
      className="banner"
      style={{
        // position: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${IMAGE_BASE_URL}${bannerMovie?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {bannerMovie?.name ||
            bannerMovie?.titile ||
            bannerMovie?.original_name}
        </h1>

        {/* buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* descriptions */}
        <h3 className="banner__overview">
          {truncate(bannerMovie?.overview, 200)}
        </h3>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
