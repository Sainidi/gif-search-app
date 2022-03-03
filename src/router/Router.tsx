import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { FavoritesPage } from '../Pages/FavoritesPage/FavoritesPage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { Header } from '../components/Header/Header';
import { fetchGifs, GifsData, raiseLimit } from '../redux/gifsSlice';
import { routes } from './routes';

export const InternalRouter = () => {
	const dispatch = useDispatch();
	const { limit } = useSelector(GifsData);
	const [inputValue, setInputValue] = useState('');
	const links = [routes.home, routes.favorites];

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	const scrollHandler = (e: any) => {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			dispatch(raiseLimit(20));
		}
	};

	useEffect(() => {
		dispatch(fetchGifs(limit));
	}, [limit]);

	const inputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	return (
		<BrowserRouter>
			<Header inputValue={inputValue} onChange={inputChange} links={links} />
			<Switch>
				<Route exact path={routes.home.path}>
					<HomePage inputValue={inputValue} />
				</Route>
				<Route path={routes.favorites.path}>
					<FavoritesPage inputValue={inputValue} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
