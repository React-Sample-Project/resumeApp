import React from 'react';

export default class Job extends React.Component {

  render() {
    let { explanations, title, companyName, startDate, endDate, city, state } = this.props.data.job;

    explanations = explanations.map((explanation, i) => <li key={i}>{explanation}</li>);

    endDate = endDate || 'Current';

    return (
      <div>
        <p><strong>{job.title}</strong></p>
        <p>{companyName}<span className="pull-right">{startDate} - {endDate}</span></p>
        <p>{city}, {state}</p>
        <ul>
          {exps}
        </ul>
      </div>
    )
  }
}
