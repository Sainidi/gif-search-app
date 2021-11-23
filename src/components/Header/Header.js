import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import {routes} from './consts';
import {SearchForm} from "../SearchForm/SearchForm";

export const Header = ({onChange, inputValue}) => {
    return (
        <>
            <header className='header'>
                <div className="container header-wrapper">
                    <div className='header-menu'>
                        {routes.map((link, key) => {
                            const {route, title} = link;
                            return (
                                <NavLink className='header-menu__link' to={route} key={key}>
                                    {title.toUpperCase()}
                                </NavLink>
                            )
                        })}
                    </div>
                    <SearchForm onChange={onChange} inputValue={inputValue}/>
                </div>
            </header>
        </>
    )
}