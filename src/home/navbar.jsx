import React from 'react';
import LoginButton from './loginButton.jsx'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInAs: null
    };
  }

  render(){
    return <nav className="navbar navbar-default">
    <div className="container-fluid">
        <a className="navbar-brand"><i className="fa fa-file-text-o"></i> Resume</a>
        <div className="pull-right">
          <LoginButton />
        </div>
      </div>
    </nav>;
  }
}
