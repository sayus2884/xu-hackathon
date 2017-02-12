import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import { Form, Text } from 'react-form'

const _ = lodash;

const customStyles = {
   content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
   }
};

class BookReserveModal extends Component {
   constructor(props) {
      super(props);

      this.state = {
         modalIsOpen: false,
         book: this.props.book
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
   }

   openModal() {
      this.setState({modalIsOpen: true});
   }

   afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.refs.subtitle.style.color = '#f00';
   }

   closeModal() {
      this.setState({modalIsOpen: false});
   }

   render() {
      return (
         <div>
            <button onClick={this.openModal}>Reserve</button>
            <Modal
               isOpen={this.state.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               >

               <h2 ref="subtitle">Input Your Name</h2>
               <Form
                  onSubmit={this.reserveBook.bind(this)}
                  >

                  {({submitForm}) => {
                     return (
                        <form onSubmit={submitForm}>
                           <label>Name: <Text field='name'/></label>
                           <button type='submit'>Submit</button>
                        </form>
                     )
                  }}
               </Form>
               <button onClick={this.closeModal}>close</button>
            </Modal>
         </div>
      );
   }

   reserveBook(values) {
      Meteor.call('books.reserve', FlowRouter.getParam('id'), _.assign({}, this.state.book, {
         buyer: values.name,
         isReserved: true
      }));
   }
}

BookReserveModal.propTypes = {
   book: PropTypes.object.isRequired
};

export default BookReserveModal;
