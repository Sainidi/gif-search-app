import React, {useEffect} from 'react';
import './HomePage.scss'
import {Cards} from "../../components/Cards/Cards";
import icLike from '../../assets/img/like.svg';

export const HomePage = ({gifs, inputValue, onClick}) => {
    useEffect(() => {
        document.title = 'Home';
    });

    const searchFunc = () =>
        gifs.filter(item => {
            const {title} = item;
            return (
                title.toLowerCase().includes(inputValue.trim().toLowerCase())
            )
        });


    return (
        <>
            <div className='wrapper container '>
                <div className="content">
                    {searchFunc().map(link => {
                        const {id} = link;
                        return <Cards key={id} blogData={link} icSrc={icLike} onClick={() => onClick(link)}/>
                    })}
                    {inputValue && !searchFunc().length && <span className="search-false">No search result</span>}
                </div>
            </div>
        </>
    )
}