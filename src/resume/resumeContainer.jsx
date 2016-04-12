import React from 'react';
import { store } from '../main.js';
import Section from './section.jsx';
import Header from './header.jsx';
import {Row, Col} from 'react-bootstrap';

export default class ResumeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "Edward",
        lastName: "Wight",
        imageURL: "../images/bwface.jpg",
        title: "IT Consultant",
        phone: "503-887-4866",
        address: "642 N 200 E apt. 103",
        city: "Provo",
        state: "UT",
        zip: "84606",
        company: "Pariveda Solutions",
        email: "blake.wight@gmail.com",
        mediaAccounts: [
          {title: "facebook", baseURL: "www.facebook.com/", userExtension: "blake.wight", fa: "fa fa-facebook"},
          {title: "linkedIn", baseURL: "www.linkedin.com/in/", userExtension: "blakewight", fa: "fa fa-linkedin"}
        ]
      },
      sections: [{
        type: "education",
        id: 1,
        schools: [
          {
            id: 1,
            name: "Brigham Young University",
            logoURL: "some URL here",
            city: "Provo",
            state: "UT",
            degree: "Bachelor of Science",
            major: "Information Systems",
            college: "Marriott School of Management",
            graduation: "April 2016",
            gpa: "4.0",
            specializedCoursework: "Data Structures, Linear Algebra, Differential Equations"
          }
        ]
      },
      {
        type: "experience",
        id: 2,
        jobs: [
          {
            companyName: "BYU Store",
            title: "Web Developer",
            city: "Provo",
            state: "UT",
            startDate:"1/2001",
            endDate:"2/2006",
            explanations: ["blah blah blah, I loved this job","And i freakin killed it at this job"]
          },
          {
            companyName: "DOMO",
            title: "QA Engineer Intern",
            city: "American Fork",
            state: "UT",
            startDate:"3/2004",
            endDate: null,
            explanations: ["blah blah blah, I loved this job","And i freakin killed at it too"]
          }
        ]
      },
      {
        type: "generic",
        id: 3,
        title: "Skills",
        subSections: [
          "Proficient in C++, HTML, CSS, JavaScript, Python, SQL, C#",
          "My hobbies include blah blah blah"
        ]
      }
    ]};
  }

  render() {
    let sections = this.state.sections.map((section, i) => <div><hr /><Section key={i} data={section} /></div>)

    return (
      <div style={{backgroundColor: '#222222', padding: 20}}>
        <Row style={{width: 800, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', padding: 10}}>
          <Header data={this.state.user} />
          {sections}
        </Row>
      </div>
    );
  }
}
