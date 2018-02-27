// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form} from 'reactstrap';
// // import AdminNewDeckForm from './AdminNewDeckForm';
// import AdminUserModTable from './AdminUserModTable';

// class AdminBanHammer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       backdrop: true
//     };

//     this.toggle = this.toggle.bind(this);
//     this.changeBackdrop = this.changeBackdrop.bind(this);
//   }


// //onsubmit handle for generation of UserTables
// //id# delete 



//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }

//   changeBackdrop(e) {
//     let value = e.target.value;
//     if (value !== 'static') {
//       value = JSON.parse(value);
//     }
//     this.setState({ backdrop: value });
//   }

//   render() {
//     return (
//       <div>
//         <Form inline onSubmit={(e) => e.preventDefault()}>
//           {' '}
//           <Button color="primary" size='block' onClick={this.toggle}>AdminBanHammer</Button>
//         </Form>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//           <AdminUserModTable />
//                      </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>..GTFO..</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default AdminBanHammer;