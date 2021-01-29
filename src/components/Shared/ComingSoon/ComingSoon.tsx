import React, { useEffect, useCallback, useRef } from 'react';
import anime from 'animejs';
import './ComingSoon.scss';
 
const ComingSoon = ({heading, content}) => {
  const _isMounted = useRef(true);

  const animateBaseFire = useCallback(
    () => {
      anime({
        targets: '#base-fire .cf-flame',
        delay: anime.stagger(300),
        translateY: function(){return anime.random(0, -10);},
        keyframes: [
          {scale: .8},
          {scale: .825},
          {scale: .9},
          {scale: .925},
          {scale: 1}
        ],
        duration: 300,
        easing: 'easeInOutSine',
        loop: true,
      })
    },
    []
  );
 
  const animateFlame1 = useCallback(
    () => {
      anime({
        targets: '#fireNodes1 .cf-flame',
        delay: anime.stagger(100),
        translateY: function(){return anime.random(0, 300);},
        rotate:30,
        opacity:function(){return anime.random(.5, 1);},
        translateX: function(){return anime.random(0, -60);},
        scale:0,
        skew: function () {return anime.random(0, 10);},
        loop: true,
        easing: "easeInOutSine",
      })
    },
    []
  );
 
  const animateFlame2 = useCallback(
    () => {
      anime({
        targets: '#fireNodes2 .cf-flame',
        delay: anime.stagger(400),
        translateX: function(){return anime.random(-30, 0);},
        translateY: function(){return anime.random(0, -260);},
        //translateY: function(){return anime.random(-260, -160);},
        //translateX: function(){return anime.random(0, -30);},
        scale:0,
        rotate: function() { return anime.random(0, 60); },
        skew:function(){
          return anime.random(0, 30);
        },
        loop: true,
        easing: "easeInOutSine"
      })
    },
    []
  );
  
  const animateFlame3 = useCallback(
    () => {
      anime({
        targets: '#fireNodes1 .cf-flame',
        delay: anime.stagger(500),
        translateY: function(){return anime.random(-300, -200);},
        opacity:function(){return anime.random(0, 1);},
        translateX: function(){return anime.random(-50, 50);},
        scale:0,
        rotate: function() { return anime.random(0, -30); },
        skew: function () {return anime.random(0, 20);},
        loop: true,
        easing: "easeInOutSine",
      })
    },
    []
  );

  useEffect(() => {
    animateFlame1();
    animateFlame2();
    animateFlame3();
    animateBaseFire();
  }, [animateFlame1, animateFlame2, animateFlame3, animateBaseFire]);

  useEffect(() => {
    return () => {
        _isMounted.current = false;
    }
  }, []);

  return (
    <div className="ComingSoon__wrapper">
      <div className="cf-container">
        <div className="cf-flame-container"  id="fireNodes1">
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
        </div>
        <div className="cf-flame-container" id="fireNodes2">
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
        </div>
        <div className="cf-flame-container" id="base-fire">
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
          <div className = "cf-flame"></div>
        </div>
        <div className= "cf-log-container">
          <div className="cf-log"></div>
          <div className="cf-log"></div>
        </div>
      </div>
      <div className="ComingSoon__content">
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
};


export default ComingSoon;