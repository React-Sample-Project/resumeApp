import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ContentEditable from '../utilities/contentEditable.jsx';
import Icon from '../utilities/icon.jsx';
import { store } from '../main.js';
import { EDIT_RESUME_FIRSTNAME, EDIT_RESUME_LASTNAME, EDIT_RESUME_TITLE } from './resumeActions.js';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit(obj){
    store.dispatch({
      type: obj.action,
      id: obj.id,
      value: obj.target.value
    });
  }

  render () {
    let { imageURL, lastName, firstName, title, phone, city, state, mediaAccounts } = this.props.data;
    let edit = this.props.edit;
    let mediaLinks = mediaAccounts.map((acct,i) => <a style={{marginRight: 5}} key={acct.id} href={ '//' + acct.baseURL + acct.userExtension }><Icon icon={ acct.fa } /></a>)

    return (
      <Row>
        <Col md={3}><Image  src={ imageURL } rounded responsive/></Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Row>
                <ContentEditable action={EDIT_RESUME_FIRSTNAME} html={ firstName } disabled={ edit } onChange={ this.edit } tagName="span"/> 
                <ContentEditable action={EDIT_RESUME_LASTNAME} html={ lastName } disabled={ edit } onChange={ this.edit } tagName="span"/>
              </Row>
              <Row>
                <ContentEditable action={EDIT_RESUME_TITLE} html={ title } disabled={ edit } onChange={ this.edit } tagName="span"/>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <span><Icon icon= "fa fa-phone" /> { phone }</span>
              </Row>
              <Row>
                <span><Icon icon= "fa fa-home"/> { city }, { state }</span>
              </Row>
              <Row>
                { mediaLinks }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )}
}

export default Header;
