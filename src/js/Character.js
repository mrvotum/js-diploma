export default class Character {
  constructor(level, type = 'noType') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
    if (new.target === Character) throw new TypeError('Так делать нельзя!');
  }
}
