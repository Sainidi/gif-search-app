import React from 'react';
import {ReactSVG} from "react-svg";
import './Cards.scss'

export const Cards = ({blogData, onClick, icSrc}) => {
    const {images, title} = blogData;

    return (

        <div className='image-wrapper'>
            <img className='image' src={images.downsized.url} alt={title}/>
            <div className="image-like" onClick={onClick}>
                <ReactSVG className="image-like__icon" src={icSrc}/>
            </div>
        </div>
    );
}