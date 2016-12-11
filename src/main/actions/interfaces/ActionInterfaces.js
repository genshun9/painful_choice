export default class CardDto {
  constructor(array, generation, packName) {
    this.id = array[2];
    this.name = array[0];
    this.initialText = array[1];
    this.generation = generation;
    this.packName = packName;
  }
}