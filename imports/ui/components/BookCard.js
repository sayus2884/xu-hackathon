import React, { Component, PropTypes } from 'react';

class BookCard extends Component {
   render(){
      const book = this.props.book;

      return (
         <div id="wrapper">
            {book.title}
         </div>
      );
   }
}

BookCard.propTypes = {
   book: PropTypes.object.isRequired
};

export default BookCard;
