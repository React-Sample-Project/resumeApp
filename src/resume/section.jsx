import React from 'react';
import GenericSection from './genericSection';
import ExperienceSection from './experienceSection';
import EducationSection from './educationSection';


export default class Section extends React.Component {

  render() {
      var section = {
        'education': <EducationSection  data={this.props.data} />,
        'experience': <ExperienceSection data={this.props.data} />,
        'generic': <GenericSection data={this.props.data} />
      }

      return section[this.props.data.type];
  }
}
