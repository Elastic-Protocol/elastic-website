import React, { useEffect, useState, useCallback, useRef } from 'react';
import anime from 'animejs';
import './HeroAnimation.scss';
 
const HeroAnimation = () => {
  const [settings]: [any, any] = useState({
    numberOfBars: 30,
    duration: 900,
  });
  const _isMounted = useRef(true);

  const play = useCallback(
    () => {
      var easings: any = [];
      for (let ease in anime.penner) {
        easings.push(ease);
      }
      easings.push('steps('+anime.random(5, 20)+')');
      easings.push('steps('+anime.random(5, 20)+')');
      easings.push('cubicBezier(0.545, 0.475, 0.145, 1)');
      var ease = easings[anime.random(0, easings.length - 1)];

      anime.timeline({
        duration: settings.duration,
        easing: ease,
        complete: () => {
          if (_isMounted.current) {
            play()
          }
        }
      })
      .add({
        targets: '.HeroAnimation__visualizer .HeroAnimation__dot',
        translateY: anime.stagger(['-120px', '120px'], {easing: ease, from: 'last'}),
        delay: anime.stagger(21, {from: 'first'})
      }, 0)
      .add({
        targets: '.HeroAnimation__visualizer .HeroAnimation__dash',
        translateY: anime.stagger(['-120px', '120px'], {easing: ease, from: 'last'}),
        delay: anime.stagger(7, {from: 'first'})
      }, 0);
    },
    [settings.duration],
  );

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    return () => {
        _isMounted.current = false;
    }
  }, []);

  return (

      <div className="HeroAnimation__container" >
        <div className="HeroAnimation__animation">
          <div className="HeroAnimation__visualizer">
            <div className="HeroAnimation__wrapper HeroAnimation__dots-wrapper">
              {Array(settings.numberOfBars).fill(null).map((value, index) => (
                <div key={index} className="HeroAnimation__dot color-primary"></div>
              ))}
            </div>
            <div className="HeroAnimation__wrapper HeroAnimation__dots-wrapper">
              {Array(settings.numberOfBars).fill(null).map((value, index) => (
                <div key={index} className="HeroAnimation__dash color-primary"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
};

export default HeroAnimation;