import React from 'react'
import "./style.scss"
import Similar from './carousels/Similar'
import { useParams } from 'react-router-dom'
import Reccomendation from './carousels/Reccomendation'
import DetailsBanner from './detailsBannner/DetailsBanner'
import useFetch from '../../hooks/useFetch'
import Cast from './cast/Cast'
import VideosSection from './videoSection/VideoSection'

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const {data : credits, loading : creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);

  console.log(credits);

    
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Reccomendation mediaType={mediaType} id={id}/>
      
    </div>
  )
}

export default Details
