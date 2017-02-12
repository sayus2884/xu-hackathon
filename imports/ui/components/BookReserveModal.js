import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import { Form, Text } from 'react-form'


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
            <button onClick={this.openModal}>Add Stock</button>
            <Modal
               isOpen={this.state.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.closeModal}
               style={customStyles}
               contentLabel="Example Modal"
               >

               <h2 ref="subtitle">Hello</h2>
               <Form
                  onSubmit={this.addBookToStock.bind(this)}
                  >

                  {({submitForm}) => {
                     return (
                        <form onSubmit={submitForm}>
                           <label>Name: <Text field='name' type='number'/></label>
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

   addBookToStock(values) {
      console.log(this.state);

      Meteor.call('books.stockInsert', this.state.book._id, {
         price: values.price,
         condition: values.condition,
      });
   }
}

BookReserveModal.propTypes = {
   book: PropTypes.object.isRequired
};

export default BookReserveModal;
