import React from 'react';

export default class Job extends React.Component {

  render() {
    let { explanations, title, companyName, startDate, endDate, city, state } = this.props.data;

    let exps = explanations.map((explanation, i) => <li key={i}>{explanation}</li>);

    let endDateMaybe = endDate || 'Current';
    return (
      <div>
        <p><strong>{ title }</strong></p>
        <p>{ companyName }<span className="pull-right">{ startDate } - { endDateMaybe }</span></p>
        <p>{ city }, { state }</p>
        <ul>
          {exps}
        </ul>
      </div>
    )
  }
}
