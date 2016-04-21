import React from 'react';
import { store } from '../main.js';
import Section from './section.jsx';
import Header from './header.jsx';
import {Row, Col} from 'react-bootstrap';

export default class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState().bind(this);
  }

  render() {
    let {user, sections} = this.props;
    let sec = sections.map((section, i) => <div><hr /><Section data={section} key={i} /></div>)
    return (
      <div style={{backgroundColor: '#222222', padding: 20}}>
        <Row style={{width: 800, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
          <Header data={user} />
          {sections}
        </Row>
      </div>
    );
  }
}
