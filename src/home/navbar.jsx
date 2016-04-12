import React from 'react';
import {Button} from 'react-bootstrap'
import LoginModal from './loginModal.jsx';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInAs: null,
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

  render(){
    return <nav className="navbar navbar-default">
    <div className="container-fluid">
        <a className="navbar-brand"><i className="fa fa-file-text-o"></i> Resume</a>
        <div className="pull-right">
          <Button bsStyle="success" onClick={this.open}>Login</Button>
          <LoginModal showModal={this.state.showModal} close={this.close} />
        </div>
      </div>
    </nav>;
  }
}
