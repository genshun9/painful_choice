export default class CardDto {
  constructor(array) {
    this.id = Number(array[2]);
    this.name = array[0];
    this.initialText = array[1];
  }
}