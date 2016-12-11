import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import CardDto from './interfaces/ActionInterfaces';

export default {
  /**
   * ローカルに設置したtxtファイルをHTTPで読み込む
   * XMLHttpRequestオブジェクトを生成し、HTTPリクエストを発行する
   * 帰ってきたレスポンスは、改行文字で区切り、1配列1モンスターの2次元配列に一旦変換する
   * その後Store内でModelを生成しやすいように、CardDtoクラスとして変換する
   */
  initList() {
    const req = new XMLHttpRequest();
    req.open('get', 'datas/2_generation/magic_ruler.txt', true);
    req.send(null);

    req.onload = function() {
      const convertDtoDatas = req.responseText.split('\n').map(r => new CardDto(r.split(','), 2, 'magic_ruler'));
      AppDispatcher.dispatch({
        actionType: ActionConstants.CARD_INIT_LIST,
        data: convertDtoDatas
      })
    }
  }
};