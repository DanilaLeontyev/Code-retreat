// put your game of life code heres
export function countSiblings(field, x , y) {
    let counter = 0;
    [-1, 0, 1].forEach((itemX) => {
        let newX = x + itemX;
        [-1, 0, 1].forEach((itemY) => {
            let newY = y + itemY;
            if (!itemX && !itemY) return;
            if (field.indexOf(`${newX},${newY}`) !== -1) {
                counter++;
            }
        })
    });
    return counter;
}

export function willBeAlive(siblings, state) {
    if (siblings < 2 || siblings > 3) return false;
    if (siblings === 3) return true;
    return state;
}

export function findEdgeCoord(field) {
    const xs = field.map(item => item.split(",")[0]);
    const ys = field.map(item => item.split(",")[1]);

    return {
        minX: Math.min(...xs) - 1,
        minY: Math.min(...ys) - 1,
        maxX: Math.max(...xs) + 1,
        maxY: Math.max(...ys) + 1
    }
}

export function nextState(field) {
    const newField = [];
    const coords = findEdgeCoord(field);
    for (let i = coords.minX; i <= coords.maxX; i++) {
        for (let j = coords.minY; j <= coords.maxY; j++) {
            const siblings = countSiblings(field, i ,j);
            const state = field.indexOf(`${i},${j}`) !== -1;
            if (willBeAlive(siblings, state)) {
                newField.push(`${i},${j}`);
            }
        }
    }
    return newField;
}

export function createField(x, y) {
     let field = [];
    for (let i = 0; i < x; i++) {
        field[i] = [];
        for (let j = 0; j < y; j++) {
            field[i][j] = '.';
        }
    }
    return field;
}

export function viewLife(startState, tick) {
    const field = createField(10, 10);
    startState = ["0,0", "1,0", "2,0"];
    let arrX = startState.map((item) => item.split(',')[0]);
    let arrY = startState.map((item) => item.split(',')[1]);


    let newField = startState;
    for (let i = 0; i < tick; i++){
        for (let j = 0; j < arrX.length; j++) {
            for (let k = 0; k < arrY.length; k++) {
                field[arrX][arrY] = '#';
            }
        }
        newField = nextState(newField);
    }
    return newField;
}