import { Random } from 'meteor/random';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

class Home extends Component {
   render(){
      const books = this.props.books;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Books</h2>
      ) : (
         <div>
            <h2>Books</h2>
            <ul>
               {this.renderBooks()}
            </ul>
         </div>
      );
   }

   renderBooks(){
      return this.props.books.map((book) => (
         <li key={book._id}>
            {book._id}
         </li>
      ));
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('books');

   const loading = !subscription.ready();
   const books = Books.find().fetch();

   return { loading, books  }

}, Home);
