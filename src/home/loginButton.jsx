import React from 'react';
import {Button, Input, Modal} from 'react-bootstrap';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return <div>
      <Button bsStyle="success" onClick={this.open}>Login</Button>
      <Modal show={this.state.showModal} onHide={this.close}>
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
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  }
}
