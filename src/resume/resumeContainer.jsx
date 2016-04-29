import React from 'react';
import { store } from '../main.js';
import Section from './section.jsx';
import Header from './header.jsx';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ resume: store.getState().resume });

export class resumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false};
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(){
    this.setState({ edit: !this.state.edit })
  };

  render() {
    let { user, sections } = this.props.resume;
    let secs = sections.map((section, i) => <div><hr /><Section edit={ edit } data={ section } key={ section.id } /></div>);
    let edit = this.state.edit;

    return (
      <div style={{backgroundColor: '#222222', padding: 20}}>
        <div className="pull-right"><a href="javascript:;" onClick={ this.toggleEdit } style={{ marginTop: -20 }}>{ edit ? "edit" : "save" }</a></div>
        <Row style={{ width: 800, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', padding: 10 }}>
          <Header edit={ edit } data={ user } />
          { secs }
        </Row>
      </div>
    );
  }
}

const ResumeContainer = connect(mapStateToProps)(resumeContainer);
export default ResumeContainer;
