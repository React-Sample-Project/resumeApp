import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

export default class Header extends React.Component {
  render () {
    let {imageURL, lastName, firstName, title, phone, city, state, mediaAccounts} = this.props.data;
    let mediaLinks = mediaAccounts.map((acct,i) => <a style={{marginRight: 5}} key={i} href={'//'+acct.baseURL + acct.userExtension}><i className={acct.fa} /></a>)

    return (
      <Row>
        <Col md={3}><Image  src={imageURL} rounded responsive/></Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Row>
                <span>{firstName} {lastName}</span>
              </Row>
              <Row>
                <span>{title}</span>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <span><i className="fa fa-phone"/> {phone}</span>
              </Row>
              <Row>
                <span><i className="fa fa-home"/> {city}, {state}</span>
              </Row>
              <Row>
                {mediaLinks}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )}
}
