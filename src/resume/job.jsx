import React from 'react';

export default class Job extends React.Component {

  render() {
    let job = this.props.data;

    var explanations = job.explanations.map((explanation, i) => <li key={i}>{explanation}</li>);

    var endDate = job.endDate ? job.endDate : 'Current'

    return (
      <div>
        <p><strong>{job.title}</strong></p>
        <p>{job.companyName}<span className="pull-right">{job.startDate} - {endDate}</span></p>
        <p>{job.city}, {job.state}</p>
        <ul>
          {explanations}
        </ul>
      </div>
    )
  }
}
