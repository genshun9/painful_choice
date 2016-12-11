import * as I from 'immutable';
import * as _ from 'lodash';
import AppDisptach from '../dispatchers/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import Store from './Store';
import Card from '../models/Card';

let cards:I.OrderedMap<string, any> = null;

/**
 * datasディレクトリ内のtxtファイルを読み込む
 * initialTextの文字が降順（あ行→わ行）になるようにソートする
 */
function initStore(objects:Array<any>) {
  cards = I.OrderedMap<string, Card>(objects.map<any>(
    (object) => [object.id, Card.createFromAction(object)]
  ));
  cards = cards.sort((A, B) => A.initialText > B.initialText ? 1 : -1);
}

export class CardStore extends Store {
  getAll() {
    return cards;
  }

  getAllFilterByInitText(text) {
    const filteredCards = text === '' ? cards : cards.filter(c => c.initialText.startsWith(text));
    return filteredCards;
  }

  getOneById(id) {
    return cards.get(id);
  }
}

const cardStore = new CardStore();
export default cardStore

AppDisptach.register((action:any) => {
  switch (action.actionType) {
    case ActionConstants.CARD_INIT_LIST:
      initStore(action.data);
      cardStore.emitChange();
      break;

    default:
  }
});