import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';

import icSearch from '../../assets/img/search.svg';
import './index.scss';

interface ISearchFormProps {
	onChange: (e: any) => void;
	inputValue: string;
}

export const SearchForm: FC<ISearchFormProps> = ({ onChange, inputValue }) => (
	<form className="search">
		<ReactSVG className="search-icon" src={icSearch} />
		<input className="search-input" type="search" placeholder="Search  GIF" value={inputValue} onChange={onChange} />
	</form>
);
