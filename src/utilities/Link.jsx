import React from 'react';

export default class Link extends React.Component {
  render(){
    let s = this.props.isExternal ? <link to={this.props.to}>{this.props.children}</link> : <a href={this.props.to}>{this.props.children}</a>
    return s;
  }
}
