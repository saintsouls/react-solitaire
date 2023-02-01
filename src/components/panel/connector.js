import { get } from 'lodash';
import { connect } from 'react-redux';
import { startNewGame } from '../../store/game/actions';

export const panelConnector = connect(null, {
    onStartNewGame: () => startNewGame()
});