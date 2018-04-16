import { ENGINE_METHOD_DIGESTS } from 'constants';

export default class Game {
    constructor() {
        this._userMoveSymbol = 'x';
        this._board = [['', '', ''], ['', '', ''], ['', '', '']];
    }
    getState() {
        return this._board;
    }

    acceptUserMove(x, y) {
        if (!this._isCellFree(x, y)) {
            return this._throwException('cell is already taken');
        }
        this._updateBoard(x, y);
    }
    _updateBoard(x, y) {
        this._board[x][y] = this._userMoveSymbol;
    }
    _isCellFree(x, y) {
        return !this._board[x][y];
    }
    _throwException(msg) {
        throw new Error(msg);
    }
}
