import { cloneDeep, compact, isNil, last, get } from 'lodash';

export const toMatrix = (arr, width) =>
    arr.reduce((rows, key, index) => (index % width == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);

export const checkCards = (firstCard, secondCard, board) => {
    const arr = cloneDeep(board);

    if (firstCard.rank === secondCard.rank) {
        [firstCard, secondCard].forEach(({ position }) => {
            arr[position.row][position.col] = null;
        })
    }

    return arr;
}

export const isCompleted = board => board.every(row => row.every(item => item === null));
export const isAvailableTurnsExist = board => {
    const arr = [...board[0].map(() => [])];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            arr[j][i] = board[i][j];
        }
    }

    return arr
        .map(item => get(last(compact(item)), 'rank', null))
        .filter(item => !isNil(item))
        .some((item, index, array) => array.indexOf(item) != index);
}