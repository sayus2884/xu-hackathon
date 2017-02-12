import React, { Component, PropTypes } from 'react';
import ReactTable from 'react-table'
import ReactDOM from 'react-dom'

import BookPushModal from './BookPushModal';
import BookReserveModal from './BookReserveModal';
import BookCheckbox from './BookCheckbox'

const _ = lodash;

class BookPreviewTable extends Component {
    constructor(props){
      super(props)

      this.state = {
        reserved: false,
        complete: false
      }
    }

   render(){
      const books = this.props.books;
      let booksArr = [];

      books.map((book) => {
         if (!book.isReserved) {
            booksArr.push(book)
         }
      });

      const columns = [{
         header: 'Price',
         accessor: 'price' // String-based value accessors !
      }, {
         header: 'Condition',
         accessor: 'condition',
      }]

      if (this.props.isAdmin) {
        columns.push({
          header: 'Reserved',
          render: props => {
            return !props.row.isReserved ? (
                 <h5></h5>
              ) : this.renderButton(props)

          }
        },{
          header: 'Transaction',
          render: props => {
            return (
              <BookCheckbox book={props.row}/>
            )
          }
        })
      }else{
        columns.push({
           header: 'Action',
           render: props => {

              return (
                 <BookReserveModal book={props.row}/>
              )
           }
        });
      }

      return (
         <div className="col-lg-12">
            <ReactTable
               data={this.props.isAdmin ? books : booksArr}
               columns={columns}
               defaultPageSize="5"
               />
         </div>
      );
   }

   renderButton(props){
      return (
         <div>
            <h5>Reserved by {props.row.buyer}</h5>
            <button onClick={this.unreserve.bind(this, props)}>Unreserve</button>
         </div>
      );
   }

   unreserve(book, event){
      event.preventDefault()
      Meteor.call('books.reserve', FlowRouter.getParam('id'), _.assign({}, book.row, {
         isReserved: false
      }));
   }
}

BookPreviewTable.propTypes = {
   books: PropTypes.array
};

export default BookPreviewTable;
