/// <reference path="../../../typings/tsd.d.ts" />
import * as I from 'immutable';

const defaultData = {
  id: '', // 先頭が0のidであるデータが存在し、そのデータのidを数値として扱うと0が省略されてしまうので、文字列として扱う
  name: '',
  initialText: '',
  generation: null,
  packName: ''
};

export default class Card extends I.Record(defaultData) {
  id: string;
  name: string;
  initialText: string;
  generation: number;
  packName: string;

  static createFromAction(props: any): Card {
    return new Card(props);
  }
}