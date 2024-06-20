import React, { useEffect, useState } from 'react'
import "./style.scss"
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import contentWrapper from "../../../components/contentWrapper/contentWrapper"



function HeroBannner() {

  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();

  const {url} = useSelector((state) => state.home);

  const {data,loading} = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop +  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  },[data]);


  const searchQueryHandler = (e) => {
    if(e.key == "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src = {background}/>
        </div>
      )}
      <div className='opacity-layer'></div>
      
      <contentWrapper>
      
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of movies,TV shows and people to discover. Explore Now!!</span>
          <div className="searchInput">
            <input 
              type="text"
              placeholder='Search for a movie or TV show ...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button >Search</button>
          </div>
        </div>
      
      </contentWrapper>
    </div>
  )
}

export default HeroBannner
