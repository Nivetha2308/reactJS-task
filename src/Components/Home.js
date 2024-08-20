import React from 'react';
import Menu from './Menu';

function Home() {
  return (
    <>
    <div id="home">
      <div className="hero">
        <Menu/>
        <h1>Welcome to My Portfolio</h1>
        <p>Your one-stop solution for awesome web design</p>
      </div>
    </div>
    </>
  );
}

export default Home;