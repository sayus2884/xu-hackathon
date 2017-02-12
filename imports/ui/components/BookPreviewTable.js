import React, { Component, PropTypes } from 'react';
import ReactTable from 'react-table'
import ReactDOM from 'react-dom'

import BookPushModal from './BookPushModal';
import BookReserveModal from './BookReserveModal';
import BookCheckbox from './BookCheckbox'

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

      const columns = [{
         header: 'Price',
         accessor: 'price' // String-based value accessors !
      }, {
         header: 'Condition',
         accessor: 'condition',
      }]

      if (this.props.isAdmin) {
        columns.push({
          header: 'Action',
          render: props => {
            return (
              <BookCheckbox book={props.row}/>
            )
          }
        })
      }else{
        columns.push({
           header: 'Transaction',
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
               data={books}
               columns={columns}
               defaultPageSize="5"
               />
         </div>
      );
   }
}

BookPreviewTable.propTypes = {
   books: PropTypes.array
};

export default BookPreviewTable;
