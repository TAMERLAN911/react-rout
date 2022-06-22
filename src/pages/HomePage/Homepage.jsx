import React from "react";
import styles from "./HomePage.module.css";

const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <h1>Cover your page.</h1>
      <h3>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </h3>
      <button>
        <h3>Learn more</h3>
      </button>
    </div>
  );
};

export { Homepage };
