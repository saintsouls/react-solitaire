import React from 'react';
import { suits } from '../../constants/game';

export const SuitAndRank = ({ suit, rank, position }) => (
    <div style={{
        ...position,
        display: 'inline-block',
        position: 'absolute',
        textAlign: 'center',
        transform: ('bottom' in position) ? 'rotate(180deg)' : null
    }}>
        <div>{rank}</div>
        <div style={{ position: 'relative', top: -5 }}>{suits[suit]}</div>
    </div>
);