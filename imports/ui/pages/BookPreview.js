import { Random } from 'meteor/random';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

class BookPreview extends Component {
   render(){
      const book = this.props.book;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Books</h2>
      ) : (
         <div>
            <h2>{book.title}</h2>
         </div>
      );
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('book', FlowRouter.getParam('id'));

   const loading = !subscription.ready();
   const book = Books.findOne();

   return { loading, book  }

}, BookPreview);
