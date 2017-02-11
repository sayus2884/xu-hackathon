import { Random } from 'meteor/random';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

class Admin extends Component {
   render(){
      const books = this.props.books;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Books</h2>
      ) : (
         <div>
            <h2>This is the admin panel</h2>
         </div>
      );
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('books');

   const loading = !subscription.ready();
   const books = Books.find().fetch();

   return { loading, books  }

}, Admin);
