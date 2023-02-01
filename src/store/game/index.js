import { flatten, shuffle } from 'lodash';
import { suits, ranks } from '../../constants/game';
import { MARK_CARD, START_NEW_GAME } from './types';
import { toMatrix, checkCards, isCompleted, isAvailableTurnsExist } from '../../utils';

const orderedDeck = flatten(Object.keys(suits).map(suit => ranks.map(rank => ({ rank, suit }))));
const shuffledBoard = toMatrix(shuffle(orderedDeck), 9);

const initialState = {
    board: shuffledBoard,
    dedicatedCard: null,
    isCompleted: false,
    isOver: !isAvailableTurnsExist(shuffledBoard)
}

export const game = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MARK_CARD: {
            if (state.dedicatedCard) {
                const newBoard = checkCards(state.dedicatedCard, payload, state.board);

                return {
                    ...state,
                    dedicatedCard: null,
                    board: newBoard,
                    isCompleted: isCompleted(newBoard),
                    isOver: isCompleted(newBoard) ? false : !isAvailableTurnsExist(newBoard)
                }
            } else {
                return {
                    ...state,
                    dedicatedCard: payload
                }
            }
        }
        case START_NEW_GAME: return {
            ...initialState,
            board: toMatrix(shuffle(orderedDeck), 9)
        };
        default: return state;
    }
}