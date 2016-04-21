import React from 'react';

export default class School extends React.Component {
  render() {
    let { name, college, degree, major, graduation, gpa, specializedCoursework } = this.props.data;

    return(
      <div>
        <h5>{name} - {college}</h5>
        <p>{degree} {major}</p>
        <p>{graduation} </p>
        <p>GPA: {gpa} </p>
        <p>Specialized Coursework: {specializedCoursework}</p>
      </div>
    )
  }
}
