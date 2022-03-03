import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import icDelete from '../../assets/img/delete.svg';
import { Cards } from '../../components/Cards/Cards';
import { GifsData, updateFavorites } from '../../redux/gifsSlice';
import { IPagesProps } from '../../types/common.type';

export const FavoritesPage: FC<IPagesProps> = ({ inputValue }) => {
	useEffect(() => {
		document.title = 'Favorites';
	}, []);

	const dispatch = useDispatch();
	const { favoritesGifs } = useSelector(GifsData);

	const searchFunc = () =>
		favoritesGifs.filter(item => {
			const { title } = item;
			return title.toLowerCase().includes(inputValue.trim().toLowerCase());
		});

	const deleteCard = (id: string) => {
		dispatch(updateFavorites({ id }));
	};

	return (
		<div className="wrapper container">
			<div className="content">
				{searchFunc().map(item => (
					<Cards key={item.id} cardsData={item} icSrc={icDelete} onClick={() => deleteCard(item.id)} />
				))}
				{inputValue && !searchFunc().length && <span className="search-false">No search result</span>}
			</div>
		</div>
	);
};
