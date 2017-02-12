import { Random } from 'meteor/random';
import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books';
import { Form, Text } from 'react-form'
import BookCard from '../components/BookCard'

class Admin extends Component {
   render(){
      const books = this.props.books;
      const isLoading = this.props.loading;
      const isAdmin = this.props.isAdmin

      return isLoading ? (
         <img src="http://www.stackbuddy.com/wp-content/uploads/2014/08/loader.gif" style={{height: '150px'}}/>
      ) : (
        <div className="row" >
           <div className='col-lg-12'>
              <h2>Add New Books</h2>
              {this.renderAddBookForm()}
           </div>

           {this.renderBooks()}

        </div>
      );
   }

   renderAddBookForm(){
     return (
       <Form
        onSubmit={(values) => {
          Meteor.call('books.insert', {
            title: values.title,
            imageUrl: values.imageUrl,
            description: values.description,
            books:[]
          })
        }}
        >
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm}>
              <label>Title: <Text field='title' /></label>
              <label>Image URL: <Text field='imageUrl' /></label>
              <label>Description: <Text field='description' /></label>
              <button type='submit'>Submit</button>
            </form>
          )
        }}
      </Form>
     )
   }

   renderBooks(){
     return this.props.books.map((book) => (
       <BookCard key={book._id} book={book} isAdmin={this.props.isAdmin}/>
     ))
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('books');

   const loading = !subscription.ready();
   const books = Books.find().fetch();
   const isAdmin = true

   return { loading, books, isAdmin }

}, Admin);
