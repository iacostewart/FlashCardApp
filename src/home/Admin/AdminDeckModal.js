import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form  } from 'reactstrap';
import AdminNewDeckForm from './AdminNewDeckForm';

class AdminDeckModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,  
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
    console.log(props)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          {' '}
          <Button color="primary" size='block' onClick={this.toggle}>CreateDeck</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg {this.props.className}" backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Create a Deck</ModalHeader>
          <ModalBody>
           <AdminNewDeckForm sessionToken={this.state.sessionToken} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>PassOn Wisdom</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminDeckModal;