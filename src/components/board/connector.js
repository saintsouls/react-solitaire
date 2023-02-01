import { get } from 'lodash';
import { connect } from 'react-redux';
import { markCard } from '../../store/game/actions';

export const boardConnector = connect(state => ({
    board: state.game.board,
    dedicatedCardPosition: get(state, 'game.dedicatedCard.position', { row: -1, col: -1 }),
    isCompleted: state.game.isCompleted,
    isOver: state.game.isOver
}), {
    onCardClick: card => markCard(card)
});