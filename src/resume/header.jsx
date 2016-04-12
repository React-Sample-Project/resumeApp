import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

export default class Header extends React.Component {
  render () {
    let user= this.props.data;
    let mediaLinks = user.mediaAccounts.map((acct,i) => <a style={{marginRight: 5}} key={i} href={'//'+acct.baseURL + acct.userExtension}><i className={acct.fa} /></a>)

    return (
      <Row>
        <Col md={3}><Image  src={user.imageURL} rounded responsive/></Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <Row>
                <span>{user.firstName} {user.lastName}</span>
              </Row>
              <Row>
                <span>{user.title}</span>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <span><i className="fa fa-phone"/> {user.phone}</span>
              </Row>
              <Row>
                <span><i className="fa fa-home"/> {user.city}, {user.state}</span>
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
