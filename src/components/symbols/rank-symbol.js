import React from 'react';

export const RankSymbol = ({ symbol, style }) => (
    <div style={{
        ...style,
        fontSize: 40,
        margin: 'auto',
        lineHeight: '55px',
        width: 50,
        height: 53,
        textAlign: 'center'
    }}>
        {symbol}
    </div>
);
