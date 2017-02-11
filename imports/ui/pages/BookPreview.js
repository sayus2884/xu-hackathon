import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

import BookPreviewTable from '../components/BookPreviewTable';

class BookPreview extends Component {
   render(){
      const book = this.props.book;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Books</h2>
      ) : (
         <div>
            <h2>{book.title}</h2>
            <button onClick={this.goBack.bind(this)}>Go Back</button>

            <BookPreviewTable books={book.books}/>
         </div>
      );
   }

   goBack(event){
      event.preventDefault();
      FlowRouter.go('/');
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('book', FlowRouter.getParam('id'));

   const loading = !subscription.ready();
   const book = Books.findOne();

   return { loading, book  }

}, BookPreview);
