import React from 'react';
export default class GenericSection extends React.Component{

  render () {
    let subSections = this.props.data.subSections;
    let sections = subSections.map((subSection, i) => <li key={subSection.id}>{subSection.data}</li>)

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
