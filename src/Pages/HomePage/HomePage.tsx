import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import icLike from '../../assets/img/like.svg';
import { Cards } from '../../components/Cards/Cards';
import { Loader } from '../../components/Loader/Loader';
import { addToFavorites, GifsData, GifsLoadingStatus } from '../../redux/gifsSlice';
import { routes } from '../../router/routes';
import { IPagesProps } from '../../types/common.type';
import './index.scss';

export const HomePage: FC<IPagesProps> = ({ inputValue }) => {
	useEffect(() => {
		document.title = routes.home.title;
	}, []);
	const dispatch = useDispatch();
	const { status, gifs, errorMessage } = useSelector(GifsData);

	const addToFavClick = (item: any) => {
		dispatch(addToFavorites({ ...item }));
	};

	const searchFunc = () =>
		gifs.filter(item => {
			const { title } = item;
			return title.toLowerCase().includes(inputValue.trim().toLowerCase());
		});

	const extraContent = () => (
		<>
			{status === GifsLoadingStatus.LOADING && gifs === [] && <Loader />}
			{(status === GifsLoadingStatus.IDLE || gifs !== []) && (
				<>
					{searchFunc().map(item => {
						console.log(typeof item);
						const { id } = item;
						return <Cards key={id} cardsData={item} icSrc={icLike} onClick={() => addToFavClick(item)} />;
					})}
					{inputValue && !searchFunc().length && <span className="search-false">No search result</span>}{' '}
				</>
			)}
			{status === GifsLoadingStatus.FAILED && <span>{errorMessage}</span>}
		</>
	);

	return (
		<div className="wrapper container">
			<div className="content">{extraContent()}</div>
			{status === GifsLoadingStatus.LOADING && <Loader />}
		</div>
	);
};
