import React from 'react';
import Job from './job.jsx';
import {Row} from 'react-bootstrap'

export default class ExperienceSection extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    let { jobs } = this.props.data
    let jobSet = jobs.map((job,i) => <Job data={job} key={job.id} />);

    return(
    <div>
      <h3>Experience</h3>
      {jobSet}
    </div>
    )
  }
}
