import { MARK_CARD, START_NEW_GAME } from './types';

export const markCard = card => ({ type: MARK_CARD, payload: card });
export const startNewGame = () => ({ type: START_NEW_GAME });