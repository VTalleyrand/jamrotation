import React, { useState, useEffect } from 'react'

const Nav = () => {

    const [redHeart, setRedHeart] = useState(false);

  useEffect(() => {
    let heart = localStorage.getItem("heart");
    heart = JSON.parse(localStorage.getItem("heart"));
    setRedHeart(heart);
  }, []);

  const handleClick = () => {
    setRedHeart(!redHeart);
    localStorage.setItem("heart", JSON.stringify(!redHeart));
  };

  return (
    <nav>
        <div>
           <h3>Jam <br/> Rotation</h3>
        </div>
        
        <svg
          onClick={handleClick}
          className={redHeart ? "heart liked" : "heart"}
          xmlns="http://www.w3.org/2000/svg"
          width="1"
          height="1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>

    </nav>
  )
}

export default Nav