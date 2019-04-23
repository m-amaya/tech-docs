/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  HeroH1,
  HeroH2,
} from '../styles/typography';

const HeroText = () => (
  <div
    className="center-align"
    css={{ width: '100%' }}>
    <div>
      <HeroH1>The Hive</HeroH1>
    </div>
    <div>
      <HeroH2>
        Central hub of awesome technologies.
      </HeroH2>
    </div>
  </div>
);

export const Hero = () => (
  <div className="parallax-container valign-wrapper">
    <div className="parallax">
      <img src="https://m-amaya.github.io/hive/img/hive.jpg" />
    </div>
    <HeroText />
  </div>
);