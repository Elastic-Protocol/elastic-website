import React, { FC } from 'react';
import './LoadingFrame.scss';

const LoadingFrame: FC = () => (
  <div className="LoadingFrame">
    <div className="LoadingFrame__inner">
      <div className="dotcolor"></div>
      <div className="dotcolor"></div>
      <div className="dotcolor"></div>
    </div>

  </div>
);

export default LoadingFrame;