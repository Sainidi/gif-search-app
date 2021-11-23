import React from 'react';
import {ReactSVG} from "react-svg";
import icSearch from '../../assets/img/search.svg';
import './SearchForm.scss';

export const SearchForm = ({onChange, inputValue}) => {
    return (
        <>
            <form className='search'>
                <ReactSVG className='search-icon' src={icSearch}/>
                <input className='search-input' type="search" placeholder='Search  GIF' value={inputValue}
                       onChange={onChange}/>
            </form>
        </>
    )
}