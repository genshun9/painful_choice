/// <reference path="../../../typings/tsd.d.ts" />
import * as I from 'immutable';

const defaultData = {
  id: null,
  name: '',
  initialText: ''
};

export default class Card extends I.Record(defaultData) {
  id: number;
  name: string;
  initialText: string;

  static createFromAction(props: any): Card {
    return new Card(props);
  }
}