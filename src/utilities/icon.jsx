import React from 'react';

class Icon extends React.Component {
  render(){
    let { icon } = this.props;
    return <i className={ icon }></i>
  }
}

export default Icon;
