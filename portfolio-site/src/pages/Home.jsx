import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>I am a passionate Web Developer building modern web experiences.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
};

export default Home;
