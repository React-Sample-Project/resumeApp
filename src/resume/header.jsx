import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ConditionalInput from '../utilities/conditionalInput.jsx';
import Icon from '../utilities/icon.jsx';
import ResumeReducer from './resumeReducer';
import { EDIT_RESUME } from './resumeActions';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit(val){
    console.log(val);
    ResumeReducer(this.props.data , {type: EDIT_RESUME, data: val})
  }

  render () {
    let { imageURL, lastName, firstName, title, phone, city, state, mediaAccounts } = this.props.data;
    let edit = this.props.edit;
    let mediaLinks = mediaAccounts.map((acct,i) => <a style={{marginRight: 5}} key={i} href={ '//' + acct.baseURL + acct.userExtension }><Icon icon={ acct.fa } /></a>)

    return (
      <Row>
        <Col md={3}><Image  src={ imageURL } rounded responsive/></Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Row>
                <ConditionalInput editFunc= { this.edit } placeholder="First Name" defaultValue={ firstName }>{ firstName } </ConditionalInput><span>{ lastName }</span>
              </Row>
              <Row>
                <span>{ title }</span>
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
