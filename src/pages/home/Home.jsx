import React from 'react'
import "./home.scss";
import HeroBannner from './heroBanner/HeroBannner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

function Home() {
  return (
    <div className='homePage'>
      <HeroBannner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
