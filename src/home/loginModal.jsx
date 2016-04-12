import React from 'react';
import {Button, Input, Modal} from 'react-bootstrap';

export default class LoginModal extends React.Component {

  render() {
    return (
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input type="text" placeholder="email"/>
            <Input type="password" placeholder="password" />
            <Button bsStyle="success">Login</Button>
            <Button bsStyle="danger">Cancel</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }
}
