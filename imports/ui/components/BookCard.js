import React, { Component, PropTypes } from 'react';

class BookCard extends Component {
   render(){
      const book = this.props.book;

      return (
         <div className="col-lg-4">
               <img src={book.imageUrl}
                  style={{height: '150px'}}/>
               <h2>{book.title}</h2>
               <h3>Stock: {book.books.length}</h3>

               {this.renderButtons()}
         </div>
      );
   }

   renderButtons(){
      const book = this.props.book;

      return this.props.isAdmin ? (
         <button onClick={this.addStock.bind(this, book._id)}>Add Stock</button>
      ) : (
         <button onClick={this.goToPreview.bind(this, book._id)}>View Details</button>
      );
   }

   goToPreview(id, event){
      event.preventDefault();
      FlowRouter.go('/book/' + id);
   }

   addStock(id, event){
      event.preventDefault();
      console.log('no logic yet');
   }
}

BookCard.propTypes = {
   book: PropTypes.object.isRequired
};

export default BookCard;
