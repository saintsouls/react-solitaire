import React from 'react';
import { panelConnector } from './connector';

export const Panel = panelConnector(({ onStartNewGame }) => (
    <div className="container">
        <button className="button" onClick={onStartNewGame}>Новая игра</button>
    </div>
))