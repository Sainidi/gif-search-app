import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';

import './index.scss';

interface ICardsProps {
	cardsData: any;
	onClick: () => void;
	icSrc: string;
}

export const Cards: FC<ICardsProps> = ({ cardsData, onClick, icSrc }) => (
	<div className="image-wrapper">
		<img className="image" src={cardsData.images.downsized.url} alt={cardsData.title} />
		<div className="image-like" onClick={onClick}>
			<ReactSVG className="image-like__icon" src={icSrc} />
		</div>
	</div>
);
