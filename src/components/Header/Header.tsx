import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { SearchForm } from '../SearchForm/SearchForm';
import './index.scss';

interface IHeaderProps {
	onChange: (e: any) => void;
	inputValue: string;
	links: object[];
}

export const Header: FC<IHeaderProps> = ({ onChange, inputValue, links }) => (
	<header className="header">
		<div className="container header-wrapper">
			<div className="header-menu">
				{links.map((link: any) => (
					<NavLink className="header-menu__link" to={link.path} key={link.title}>
						{link.title.toUpperCase()}
					</NavLink>
				))}
			</div>
			<SearchForm onChange={onChange} inputValue={inputValue} />
		</div>
	</header>
);
