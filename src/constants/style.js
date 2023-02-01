export const colors = {
    SPADES: '#212121',
    HEARTS: '#FF5722',
    DIAMONDS: '#FF5722',
    CLUBS: '#212121',
    React: '#00d8ff'
};

const sidePadding = 10;

export const cardsTop = {
    0: 0,
    1: 30,
    2: 60,
    3: 90
}

export const cardsLayouts = {
    A: [{ top: 62.5, left: 37.5 }],
    6: [
        { top: 20, left: sidePadding },
        { top: 62.5, left: sidePadding },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
        { top: 20, right: sidePadding },
        { top: 62.5, right: sidePadding },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 7 () { return this[6].concat({ top: 40, left: 40 }); },
    get 8 () {
        return this[7].concat({ bottom: 40, left: 40,  transform: 'rotate(180deg)' })
    },
    9: [
        { top: 20, left: sidePadding },
        { top: 20, right: sidePadding },
        { top: 50, left: sidePadding },
        { top: 50, right: sidePadding },
        { top: 40, right: 40 },
        { bottom: 50, left: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 50, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
    ],
    get 10 () {
        return this[9].concat({ bottom: 40, right: 40,  transform: 'rotate(180deg)' })
    },
    J: '♗',
    Q: '♕',
    K: '♔',
}