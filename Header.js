
import React from "react"

function Header() {
  return (
    <header className="header-container">
        <img className="header-img" src={require('./images/troll-face.png')}/>
        <h1 className="header-title">Meme Generator</h1>
        <h3 className="header-description">React Course - Project 3</h3>
    </header>
  );
}

export default Header;
