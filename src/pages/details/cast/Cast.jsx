import React from 'react'
import "./style.scss"
import { useSelector } from 'react-redux'

import contentWrapper from '../../../components/contentWrapper/contentWrapper';
import avatar from '../../../assets/avatar.png'
import Img from '../../../components/lazyLoadImage/Img';

function Cast({data, loading}) {

    const {url} = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
  return (
    <div className='castSection'>
        <contentWrapper>
            <div className="sectionHeading">Top Cast</div>
            {!loading ? (
                
                <div className="listItems">
                    {data?.map((item) => {
                        let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
                        return (
                            <div key={item.id} className="listItem">
                                <div className="profileImg">
                                    <Img src={imgUrl}/>
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="character">{item.character}</div>
                            </div>
                        )
                    })}

                </div>

                ) : (<div className='castSkeleton'>
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                </div>)}
        </contentWrapper>
    </div>
  )
}

export default Cast
