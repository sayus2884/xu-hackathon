import { Random } from 'meteor/random';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';

import BookCard from '../components/BookCard';

class Home extends Component {
   render(){
      const books = this.props.books;
      const isLoading = this.props.loading;

      return isLoading ? (
         <img src="http://www.stackbuddy.com/wp-content/uploads/2014/08/loader.gif" style={{height: '150px'}}/>
      ) : (


         <div className="row">
            <div className='col-lg-12'>
               <h2>Books</h2>
            </div>

            {this.renderBooks()}

         </div>
      );
   }

   renderBooks(){
      return this.props.books.map((book) => (
         <BookCard key={book._id} book={book}/>
      ));
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('books');

   const loading = !subscription.ready();
   const books = Books.find().fetch();

   return { loading, books  }

}, Home);
