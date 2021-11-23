import React, {useEffect, useState} from 'react';
import {Cards} from "../../components/Cards/Cards";
import icDelete from '../../assets/img/delete.svg';

export const FavoritesPage = ({favorites, inputValue}) => {
    const [updatedFav, setUpdatedFav] = useState(favorites);
    useEffect(() => {
        document.title = 'Favorites';
    });

    const searchFunc = () =>
        updatedFav.filter(item => {
            const {title} = item;
            return (
                title.toLowerCase().includes(inputValue.trim().toLowerCase())
            )
        });

    const deleteCard = (id) => {
        let gifsArr = updatedFav.filter(item => item.id !== id)
        setUpdatedFav(gifsArr)
    }

    return <>
        <div className='wrapper container'>
            <div className="content">
                {searchFunc().map(link => {
                        const {id} = link;
                        return <Cards key={id} blogData={link} icSrc={icDelete} onClick={() => deleteCard(link.id)}/>
                    }
                )}
                {inputValue && !searchFunc().length && <span className="search-false">No search result</span>}
            </div>
        </div>
    </>
}