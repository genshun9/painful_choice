import React from 'react';
import {Button, InputGroup, Modal, ProgressBar} from 'react-bootstrap';
import CardActionCreators from '../actions/CardActionCreators';
import CardStore from '../stores/CardStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillInitCards: false,
      inputStr: ''
    };

    this._onChangeCard = this.onChangeCard.bind(this);
  };

  componentWillMount() {
    CardStore.addChangeListener(this._onChangeCard);
    CardActionCreators.initList();
  }

  componentWillUnmount() {
    CardStore.removeChangeListener(this._onChangeCard);
  }

  render() {
    if (!this.state.fillInitCards) {
      return (
        <div id="main">
          <Modal bsSize="large" animation={true} show={true} onHide={() => {
          }}>
            <Modal.Header>{'データの取得中です'}</Modal.Header>
            <Modal.Body>
              <ProgressBar striped bsStyle="success" now={40}/>
            </Modal.Body>
          </Modal>
        </div>
      )
    } else {
      const cardDataElm = (
          <div>
            <input type="text" onChange={this.onChangeInputStr.bind(this)}/>
            {CardStore.getAllFilterByInitText(this.state.inputStr).map(c => (
              <tr key={c.id}>
                <td ><input type="text" disabled={true} value={c.id}/></td>
                <td ><input type="text" disabled={true} value={c.name}/></td>
                <td ><input type="text" disabled={true} value={c.initialText}/></td>
              </tr>
            ))}
          </div>
        );

      return (
        <div id="app">
          {cardDataElm}
        </div>
      );
    }
  }

  onChangeCard() {
    this.setState({fillInitCards: true});
  }

  onChangeInputStr(e) {
    this.setState({inputStr: e.target.value});
  }
}