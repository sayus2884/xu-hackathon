import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

import BookPreviewTable from '../components/BookPreviewTable';
import BookPushModal from '../components/BookPushModal';

class BookManage extends Component {
   render(){
      const book = this.props.book;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Books</h2>
      ) : (
         <div>
            <h2>{book.title}</h2>
            <BookPushModal book={book}/>
            <button onClick={this.goBack.bind(this)}>Go Back</button>

            <BookPreviewTable books={book.books} isAdmin={true}/>
         </div>
      );
   }

   goBack(event){
      event.preventDefault();
      FlowRouter.go('/admin');
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('book', FlowRouter.getParam('id'));

   const loading = !subscription.ready();
   const book = Books.findOne();

   return { loading, book  }

}, BookManage);
