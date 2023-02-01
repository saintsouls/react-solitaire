import React from 'react';
import { isNil, get } from 'lodash';
import { Row, Col } from 'react-bootstrap';
import { Card } from '../card';
import { cardsTop } from '../../constants/style';
import { boardConnector } from './connector';

export const Board = boardConnector(({ dedicatedCardPosition, board, onCardClick, isCompleted, isOver }) => {
    const { row: rowPos, col: colPos } = dedicatedCardPosition;

    return (
        <div className="container">
            {isCompleted && <span className="result-message">Пасьянс сошелся!</span>}
            {isOver && <span className="result-message">Пасьянс не сошелся!</span>}
            <div className="board">
                {
                    board.map((row, rowIndex) => (
                        <Row>
                            {
                                row.map((card, index) => (
                                    <>
                                        {
                                            <Col>
                                                {
                                                    card !== null && (
                                                        <div>
                                                            <Card
                                                                {...card}
                                                                index={index}
                                                                rowIndex={rowIndex}
                                                                isHighlited={rowPos === rowIndex && colPos === index}
                                                                isLast={(rowIndex === board.length - 1 && card) || !board[rowIndex + 1][index]}
                                                                top={cardsTop[rowIndex]}
                                                                onCardClick={onCardClick} />
                                                        </div>
                                                    )
                                                }
                                            </Col>
                                        }
                                    </>
                                )
                                )
                            }
                        </Row>
                    ))
                }
            </div>
        </div>
    )
});