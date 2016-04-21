import React from 'react';
import GenericSection from './genericSection';
import ExperienceSection from './experienceSection';
import EducationSection from './educationSection';


export default class Section extends React.Component {

  render() {
    let {data} = this.props;

    var section = {
      'education': <EducationSection  data={data} />,
      'experience': <ExperienceSection data={data} />,
      'generic': <GenericSection data={data} />
    }

    return section[data.type];
  }
}
