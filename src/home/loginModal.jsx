import React from 'react';
import {Button, FormControl, Modal} from 'react-bootstrap';

export default class LoginModal extends React.Component {

  render() {
    return (
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl type="text" placeholder="email"/>
            <FormControl type="password" placeholder="password" />
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
