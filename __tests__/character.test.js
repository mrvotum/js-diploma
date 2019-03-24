import Character from '../src/js/Character';

test('Instantiating Character = error', () => {
  const input = 'Rick';

  const received = () => new Character(input); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('instantiating child class should not throw', () => {
  class Child extends Character {
    constructor(level) {
      super(level);
    }
  }
  const expected = {
    level: 1,
    attack: 0,
    defence: 0,
    health: 50,
    type: 'noType',
  };
  const child = new Child(1);
  expect(child).toEqual(expected);
});
