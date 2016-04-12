import React from 'react';

export default class School extends React.Component {
  render() {
    let school = this.props.data;

    return(
      <div>
        <h5>{school.name} - {school.college}</h5>
        <p>{school.degree} {school.major}</p>
        <p>{school.graduation} </p>
        <p>GPA: {school.gpa} </p>
        <p>Specialized Coursework: {school.specializedCoursework}</p>
      </div>
    )
  }
}
