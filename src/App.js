import React, {useEffect, useState} from 'react';
import {Switch, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {HomePage} from "./Pages/HomePage/HomePage";
import {FavoritesPage} from "./Pages/FavoritesPage/FavoritesPage";
import './assets/scss/index.scss'

function App() {
    const [gifs, setGifs] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [limit, setLimit] = useState(20);
    const apiKey = `https://api.giphy.com/v1/gifs/trending?api_key=iR5duH4tEQgE86OeTWi6o1VUKV4flAhU&limit=${limit}&rating=g`;

    useEffect(() => {
        if (fetching) {
            fetch(apiKey)
                .then(res => res.json())
                .then(data => {
                    setGifs(data.data)
                    setLimit(limit + 20)
                })
                .finally(() => setFetching(false));
        }
    }, [apiKey, fetching, limit]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }


    const inputChange = e => {
        setInputValue(e.target.value);
    };

    const addToFavClick = (id) => {
        setFavorites([...favorites, id])
    }

    return (
        <>
            <div className='app'>
                <Header inputValue={inputValue} onChange={inputChange}/>
                <Switch>
                    <Route exact path="/"
                           render={(props) =>
                               <HomePage gifs={gifs} inputValue={inputValue}
                                         onClick={addToFavClick} {...props}/>}
                    />
                    <Route path="/favorites"
                           render={(props) =>
                               <FavoritesPage inputValue={inputValue} favorites={favorites}
                                              {...props}/>}
                    />
                </Switch>
            </div>
        </>
    );
}

export default App;
