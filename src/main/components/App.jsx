/// <reference path="../lib/lib.d.ts" />
import React from 'react';
import {Form, FormGroup, ControlLabel, Col, FormControl, Modal, ProgressBar, Table} from 'react-bootstrap';
import * as _ from 'lodash';
import If from 'ifx';
import CardActionCreators from '../actions/CardActionCreators';
import CardStore from '../stores/CardStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillInitalCards: false,
      inputText: ''
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
    if (!this.state.fillInitalCards) {
      return (
        <div id="main">
          <Modal bsSize="large" animation={true} show={true} onHide={() => {}}>
            <Modal.Header>{'データの取得中です'}</Modal.Header>
            <Modal.Body>
              <ProgressBar striped bsStyle="success" now={40}/>
            </Modal.Body>
          </Modal>
        </div>
      )
    } else {
      const inputElm = (
        <div className="parent-form">
          <Form horizontal className="inner-form">
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>{'決まり字'}</Col>
              <Col sm={10}>
                <FormControl type="text" className="form-control" placeholder="決まり字を入力してください"
                             onChange={this.onChangeInputText.bind(this)}/>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );

      const informationElm = If(this.state.inputText === '')(() =>
        <div className="font-bold information-form">
          通常モンスター<span className="font-red">{` ${CardStore.getAll().size} `}</span>体あります。
        </div>
      ).Else(() =>
        <div className="font-bold information-form">
          決まり字<span className="font-blue">{`『${this.state.inputText}』`}</span>で始まる通常モンスターは
          <span className="font-red">{` ${CardStore.getAllFilterByInitText(this.state.inputText).size} `}</span>体あります。
        </div>
      );

      const cardDataElm = (
        <div>
          <Table striped bordered condensed hover>
            <thead>
            <tr key="header">
              <th>{'ID'}</th>
              <th>{'名前'}</th>
              <th>{'バニラフレーバー'}</th>
              <th>{'期'}</th>
              <th>{'パック名'}</th>
            </tr>
            </thead>
            <tbody>
            {CardStore.getAllFilterByInitText(this.state.inputText).map(c => (
              <tr key={c.id}>
                <td >{c.id}</td>
                <td >{c.name}</td>
                <td >{c.initialText}</td>
                <td >{`${c.generation}期`}</td>
                <td >{c.packName}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </div>
      );

      return (
        <div id="app">
          {inputElm}
          {informationElm}
          {cardDataElm}
        </div>
      );
    }
  }

  onChangeCard() {
    this.setState({fillInitalCards: true});
  }

  onChangeInputText(e) {
    this.setState({inputText: e.target.value});
  }
}