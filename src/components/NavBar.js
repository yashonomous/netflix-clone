import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showBlackNavBar, setShowBlackNavBar] = useState(false);

  useEffect(() => {
    const handleShowBlackNav = () => {
      if (window.scrollY > 100) {
        console.log("more than 1000");
        setShowBlackNavBar(true);
      } else {
        setShowBlackNavBar(false);
      }
    };

    window.addEventListener("scroll", handleShowBlackNav);

    return () => {
      window.removeEventListener("scroll", handleShowBlackNav);
    };
  }, []);

  return (
    <div className={`navbar ${showBlackNavBar && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
        alt="Netflix Logo"
      />
      <img
        className="navbar__userAvatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="User Avatar"
      />
    </div>
  );
};

export default NavBar;
