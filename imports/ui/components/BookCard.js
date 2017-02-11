import React, { Component, PropTypes } from 'react';

class BookCard extends Component {
   render(){
      const book = this.props.book;

      return (
         <div className="col-lg-4">
               image here
               <h2>{book.title}</h2>
               <button onClick={this.goToPreview.bind(this, book._id)}>View Details</button>
         </div>
      );
   }

   goToPreview(id, event){
      event.preventDefault();
      FlowRouter.go('/book/' + id);
   }

   addStock(event){
      event.preventDefault();
      console.log('logic here');
   }
}

BookCard.propTypes = {
   book: PropTypes.object.isRequired
};

export default BookCard;
