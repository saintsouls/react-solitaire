import React from 'react';
import { suits } from '../../constants/game';

export const SuitSymbol = ({ suit, style }) => (
    <div style={{
        position: 'absolute',
        width: 40,
        fontSize: 30,
        textAlign: 'center',
        ...style
    }}>{suits[suit]}</div>
);