import { calcTileType, calcHealthLevel } from '../src/js/utils';

// test for calcTileType
test('top-left', () => {
  const inputIndex = 0;
  const inputBoardSize = 10;

  const expected = 'top-left'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('top-right', () => {
  const inputIndex = 55;
  const inputBoardSize = 56;

  const expected = 'top-right'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('bottom-left', () => {
  const inputIndex = 30;
  const inputBoardSize = 6;

  const expected = 'bottom-left'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('bottom-right', () => {
  const inputIndex = 2499;
  const inputBoardSize = 50;

  const expected = 'bottom-right'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('top', () => {
  const inputIndex = 5;
  const inputBoardSize = 10;

  const expected = 'top'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('bottom', () => {
  const inputIndex = 78;
  const inputBoardSize = 9;

  const expected = 'bottom'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('left', () => {
  const inputIndex = 50;
  const inputBoardSize = 10;

  const expected = 'left'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('right', () => {
  const inputIndex = 44;
  const inputBoardSize = 15;

  const expected = 'right'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

test('center', () => {
  const inputIndex = 25;
  const inputBoardSize = 7;

  const expected = 'center'; // ожидает
  const received = calcTileType(inputIndex, inputBoardSize); // получает
  expect(received).toBe(expected); // сравнивает
});

// test for calcHealthLevel
test('critical', () => {
  const inputHealth = 10;

  const expected = 'critical'; // ожидает
  const received = calcHealthLevel(inputHealth); // получает
  expect(received).toBe(expected); // сравнивает
});

test('normal', () => {
  const inputHealth = 40;

  const expected = 'normal'; // ожидает
  const received = calcHealthLevel(inputHealth); // получает
  expect(received).toBe(expected); // сравнивает
});

test('high', () => {
  const inputHealth = 80;

  const expected = 'high'; // ожидает
  const received = calcHealthLevel(inputHealth); // получает
  expect(received).toBe(expected); // сравнивает
});
