import { numberToPair, pairToNumber } from './pairsAndNumbers';

const moveReach = {
  swordsman: 4,
  undead: 4,
  bowman: 2,
  vampire: 2,
  magician: 1,
  daemon: 1,
};

const attackReach = {
  swordsman: 1,
  undead: 1,
  bowman: 2,
  vampire: 2,
  magician: 4,
  daemon: 4,
};

function sameRow(idx1, idx2, boardSize) {
  return Math.floor(idx1 / boardSize) === Math.floor(idx2 / boardSize);
}

export function attackIndices(type, boardSize, index) {
  const resultPairs = [];
  const reachCount = attackReach[type];
  const [row, column] = numberToPair(boardSize, index);
  for (let i = row - reachCount; i <= row + reachCount; i += 1) {
    for (let j = column - reachCount; j <= column + reachCount; j += 1) {
      if (i >= 0 && i < boardSize && j >= 0
        && j < boardSize && !(i === row && j === column)) resultPairs.push([i, j]);
    }
  }
  return resultPairs.map(pair => pairToNumber(boardSize, pair));
}


export function moveIndices(type, boardSize, index) {
  const reachCount = moveReach[type];
  const result = [];
  for (let i = 1; i <= reachCount; i += 1) {
    const left = index - i;
    const leftFlag = sameRow(left, index, boardSize);
    if (leftFlag) result.push(left);

    const right = index + i;
    const rightFlag = sameRow(index, right, boardSize);
    if (rightFlag) result.push(right);

    const up = index - boardSize * i;
    const upFlag = up >= 0;
    if (upFlag) result.push(up);

    const down = index + boardSize * i;
    const downFlag = down < boardSize ** 2;
    if (downFlag) result.push(down);

    const lu = index - i - boardSize * i;
    if (leftFlag && upFlag) result.push(lu);

    const ru = index + i - boardSize * i;
    if (rightFlag && upFlag) result.push(ru);

    const ld = index - i + boardSize * i;
    if (leftFlag && downFlag) result.push(ld);

    const rd = index + i + boardSize * i;
    if (rightFlag && downFlag) result.push(rd);
  }
  return result;
}
