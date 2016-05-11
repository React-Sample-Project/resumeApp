import React from 'react';
import { Dropdown, ButtonToolbar, MenuItem, Modal, Button, FormControl, Row, Col } from 'react-bootstrap';
import Media from '../utilities/personalMediaAccounts.jsx';
import Icon from '../utilities/icon.jsx';
import { store } from '../main.js';
import { EDIT_RESUME_ICON, NEW_RESUME_ICON } from './resumeActions.js';

class MediaEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      new: props.new,
      selectedMedia: props ? props.acct : {}
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.selectMedia = this.selectMedia.bind(this);
    this.inputExtension = this.inputExtension.bind(this);
    this.save = this.save.bind(this);
  }

  close(){
    this.setState({ showModal: false, selectedMedia: this.props.acct })
  }

  open(e){
    e.preventDefault();
    this.setState({ showModal: true })
  }

  //just update the id that links to the media acct info
  selectMedia(id){
    this.setState({...this.state, selectedMedia: { ...this.state.selectedMedia, acctId: id }});
  }

  inputExtension(e){
    this.setState({ ...this.state, selectedMedia: { ...this.state.selectedMedia, userExtension: e.target.value }})
  }

  save(){
    let self = this;
    store.dispatch({
      type: self.props.new ? NEW_RESUME_ICON : EDIT_RESUME_ICON,
      value: this.state.selectedMedia
    })
    this.setState({ showModal: false })
  }

  render() {
    const { edit } = this.props;
    //attaching the acctId to the matching media account
    let selectedMedia = Object.assign({}, this.state.selectedMedia, Media.filter((m)=> this.state.selectedMedia.acctId == m.id)[0]);

    let media = Media.map(acc => (
      <MenuItem key={ acc.id } eventKey={ acc.id } onClick={ this.selectMedia.bind(this, acc.id) }><Icon icon={ acc.icon } /> { acc.name }</MenuItem>
    ))

    let dropdownTitle = selectedMedia ? <span><Icon icon={selectedMedia.icon }/> { selectedMedia.name }</span> : "Pick one";
    console.log(edit);
    if(edit){
      return (<a href={ '//' + selectedMedia.url + selectedMedia.extension }><Icon icon={ selectedMedia.icon }/> </a>);
    }

    return (
      <span style={{paddingRight: 5}}>
      <a onClick={ this.open }><Icon icon={ selectedMedia.icon } /></a>
      <Modal show={ this.state.showModal } onHide={ this.close }>
        <Modal.Header closeButton>
          <Modal.Title>{ this.props.new ? "New Media" : "Edit Media" }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="text" defaultValue={ selectedMedia.extension } placeholder="username/extension" onChange={ this.inputExtension } /><span>example</span>
          <ButtonToolbar>
            <Dropdown acct={ selectedMedia }  id="dropdown-size-medium">
              <Dropdown.Toggle bsStyle="primary">{ dropdownTitle }</Dropdown.Toggle>
              <Dropdown.Menu> { media } </Dropdown.Menu>
            </Dropdown>
          </ButtonToolbar>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" onClick={ this.save }><Icon icon="fa fa-save" /> Save</Button>
          <Button bsStyle="danger"onClick={ this.close }><Icon icon="fa fa-trash"/> Cancel</Button>
        </Modal.Footer>
      </Modal>
    </span>)
  }
}

//<a style={{marginRight: 5}} ></a>

export default MediaEdit;
