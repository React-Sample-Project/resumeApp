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
  }

  render() {
    let { user, sections } = this.props.resume;
    let secs = sections.map((section, i) => <div><hr /><Section data={section} key={i} /></div>);

    return (
      <div style={{backgroundColor: '#222222', padding: 20}}>
        <Row style={{width: 800, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
          <Header data={user} />
          {secs}
        </Row>
      </div>
    );
  }
}

const ResumeContainer = connect(mapStateToProps)(resumeContainer);
export default ResumeContainer;
