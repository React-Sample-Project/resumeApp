import React from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

export default class ConditionalInput extends React.Component {
  constructor(props){
    super(props);

    this.state = { edit: false, placeholder: props.placeholder };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.doneEditing = this.doneEditing.bind(this);
  }

  doneEditing(e){
    this.toggleEdit();
    this.props.editFunc(e.target.value);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  render(){
    let { defaultValue } = this.props;
    let input = (<FormGroup bsSize="sm"><FormControl autoFocus defaultValue={ defaultValue } type="text" onBlur={ this.doneEditing } placeholder={ this.state.placeholder } ></FormControl></FormGroup>);

    return this.state.edit ? input : <span onClick={ this.toggleEdit }>{ this.props.children }</span>;
  }
}
