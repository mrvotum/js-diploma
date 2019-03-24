import tooltips from '../src/js/helpers/tooltips';

test('Generate tooltip for character', () => {
  const received = tooltips({ // получает
    level: 1,
    attack: 20,
    defence: 50,
    health: 90,
  });

  const expected = '🎖1 ⚔20 🛡50 ❤90'; // ожидает
  expect(received).toBe(expected);
});
