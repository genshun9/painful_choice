import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import {PACK_NAME_2_GENERATION_ARR} from '../constants/Constants';
import CardDto from './interfaces/ActionInterfaces';

let result2GenerationDatas = [];
let finish2GenerationFlag = 0;

export default {
  /**
   * ローカルに設置したtxtファイルをHTTPで読み込む
   * XMLHttpRequestオブジェクトを生成し、HTTPリクエストを発行する
   * 帰ってきたレスポンスは、改行文字で区切り、1配列1モンスターの2次元配列に一旦変換する
   * その後Store内でModelを生成しやすいように、CardDtoクラスとして変換する
   */
  initList() {
    //TODO: Using Maps as children のエラーが発生している
    PACK_NAME_2_GENERATION_ARR.forEach(p => {
      const request = new XMLHttpRequest();
      request.open('get', `datas/2_generation/${p}.txt`, true);
      request.send(null);

      request.onload = function() {
        const convertDtoDatas = request.responseText.split('\n').map(r => new CardDto(r.split(','), 2, p));
        result2GenerationDatas = result2GenerationDatas.concat(convertDtoDatas);
        finish2GenerationFlag++;
        if (finish2GenerationFlag === PACK_NAME_2_GENERATION_ARR.length) {
          AppDispatcher.dispatch({
            actionType: ActionConstants.CARD_INIT_LIST,
            data: result2GenerationDatas
          })
        }
      };
    });
  }
};