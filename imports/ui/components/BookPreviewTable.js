import React, { Component, PropTypes } from 'react';
import ReactTable from 'react-table'

class BookPreviewTable extends Component {
   render(){
      const books = this.props.books;

      const columns = [{
         header: 'Price',
         accessor: 'price' // String-based value accessors !
      }, {
         header: 'Condition',
         accessor: 'condition',
      }, {
         header: 'Action',
         render: props => (
            <button>Reserve</button>
         )
      }]

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
