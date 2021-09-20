import React, { useState, useEffect } from 'react';

import "./Styles/app.scss";
import ProfileIcon from "./images/profile.svg";
import PhoneCoverIcon from "./images/phoncover.png";

function App() {

 
  var sectionElements = [
    {
      imageUrl:
        "https://assets.yousician.com/app/uploads/2021/02/18174747/guitar-1.png",
      caption: "guitar",
    },
    {
      imageUrl:
        " https://assets.yousician.com/app/uploads/2021/02/18174749/piano-1.png",
      caption: "piano",
    },
    {
      imageUrl:
        "https://assets.yousician.com/app/uploads/2021/02/18174743/bass-1.png",
      caption: "bass",
    },
    {
      imageUrl:
        "https://assets.yousician.com/app/uploads/2021/02/18174754/ukulele-1.png",
      caption: "ukulele",
    },
    {
      imageUrl:
        "https://assets.yousician.com/app/uploads/2021/02/18174752/singing-1-240x240.png.webp",
      caption: "singing",
    },
  ];
  var heroBottomImageurl =
    "https://assets.yousician.com/app/uploads/2021/02/23073520/mgpm-guitar-1000x468.jpg";

  return (
    <div className="root">
      <div className="header">
        <div className="header-left">
          <div className="yousicianSection">
            <div className="yousicianIcon"></div>
            <div className="yousicianText">yousician</div>
          </div>
          <div className="instrumentationDropdown">
            <div className="bottom-line"></div>
            <button className="dropbtn">Instruments</button>
            <div className="dropdown-content">
              <a>Guitar</a>
              <a>Bass</a>
              <a>Uukele</a>
              <a>Singing</a>
              <a>Piano</a>
            </div>
          </div>
          <div className="header-blog">Blog</div>
        </div>
        <div className="header-right">
          <div className="header-help">Help</div>
          <div className="profileIcon">
            <img src={ProfileIcon} />
          </div>
          <button className="try-premium">Try premium</button>
        </div>
      </div>
      <div className="heroSection">
        <div className="hero-background">
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://assets.yousician.com/app/uploads/2021/02/19115431/YS-landing-page-demo-2-compressed.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          <div className="hero-left">
            <div className="hero-title">
              Unleash your inner musician with Yousician
            </div>

            <div className="hero-content">
              The first step of learning to play an instrument? Wanting to play.
              Explore your love of music with us, whether you’re a complete
              beginner or a seasoned pro. Let’s play!
            </div>
            <div className="hero-button-container">
              <button className="hero-button">Start free trial</button>
            </div>
          </div>
        </div>
        <div className="hero-phoneContainer">
          <div className="image-box">
            <img src={heroBottomImageurl} />
            <div className="hero-phoneCase">
              <img src={PhoneCoverIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        {sectionElements.map((sectionElement, i) => {
          return (
            <div className="section2-childEle">
              <div className="img-box">
                <img src={sectionElement.imageUrl} />
              </div>
              <div className="section2-caption">{sectionElement.caption}</div>
            </div>
          );
        })}
      </div>
      <div className="section3">
        <div className="section3-left">
          <div className="heading1">FUN & EASY</div>
          <div className="section3Heading2">
            Learn to play music at home, at your own pace
          </div>
          <div className="section3-content">
            <p>Yousician makes learning to play an instrument fun and easy, no
            matter your skill level.</p>
            <p> Follow lesson plans created by real music
            teachers, learn fast with interactive tutorials, and stay motivated
            with goals and progress tracking.</p>
            <p> Our award-winning technology
            listens to you play and gives instant feedback on your accuracy and
            </p>
          </div>
        </div>
        <div className="section3-right">
          <div className='image-box'>
            <img src='https://assets.yousician.com/app/uploads/2021/02/10115543/yellow-shirt-600x600.jpg.webp'/>
          </div>
        </div>
      </div>
      <div className="section4"></div>
      <div className="section5"></div>
      <div className="section6"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
