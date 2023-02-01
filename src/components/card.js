import React, { useState } from 'react';
import { SuitSymbol } from './symbols/suit-symbol';
import { RankSymbol } from './symbols/rank-symbol';
import { SuitAndRank } from './symbols/suit-and-rank';
import { cardsLayouts, colors } from '../constants/style';

export const Card = ({ rank, suit, top, onCardClick, isLast, index, rowIndex, isHighlited }) => {
    let rankSymbol, suitSymbols;

    if (Array.isArray(cardsLayouts[rank])) {
        suitSymbols = cardsLayouts[rank].map((style, i) =>
            <SuitSymbol style={style} suit={suit} key={i} />
        );
    } else rankSymbol = <RankSymbol symbol={cardsLayouts[rank]} />;

    const onClick = () => {
        if (!isHighlited) {
            onCardClick({ rank, position: { row: rowIndex, col: index }});
        }
    }

    return (
        <div
            className="card"
            style={{ color: colors[suit], position: 'absolute', top, backgroundColor: isHighlited ? '#CFE401' : 'white' }}
            onClick={isLast ? onClick : null}>
            <SuitAndRank suit={suit} rank={rank} position={{ top: 4, left: 5 }} />
            <SuitAndRank suit={suit} rank={rank} position={{ bottom: 4, right: 5 }} />
            {rankSymbol}
            {suitSymbols}
        </div>
    )
}