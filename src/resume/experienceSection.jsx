import React from 'react';
import Job from './job.jsx';
import {Row} from 'react-bootstrap'

export default class ExperienceSection extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
      var jobs = this.props.data.jobs.map((job,i) => <Job data={job} key={i} />);

      return(
      <div>
        <h3>Experience</h3>
        {jobs}
      </div>
      )
    }
}
