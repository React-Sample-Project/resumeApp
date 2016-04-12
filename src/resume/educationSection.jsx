import React from 'react';
import School from './school.jsx'

export default class EducationSection extends React.Component {

  render() {
    let schools = this.props.data.schools.map((school,i) => <School data={school} key={i} />);

    return (
      <div>
        <h3>Education</h3>
        {schools}
      </div>
    )}
}
