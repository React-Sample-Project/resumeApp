import React from 'react';
export default class GenericSection extends React.Component{

  render () {
    let subSections = this.props.data.subSections;
    let sections = subSections.map((subSection, i) => <li key={i}>{subSection}</li>)

    return (
      <div>
        <h3>{this.props.data.title}</h3>
        <ul>
          {sections}
        </ul>
      </div>
    )
  }
}
