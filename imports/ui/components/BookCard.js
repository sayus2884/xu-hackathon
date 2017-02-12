import React, { Component, PropTypes } from 'react';

class BookCard extends Component {
   render(){
      const book = this.props.book;

      return (

         <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
               <img src={book.imageUrl}
                  style={{height: '150px'}}/>
                  <div className="caption">
                    <h4 className="pull-right">$74.99</h4>
                      <h4><a href="#">Third Product</a></h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
               <h3>Stock: {book.books.length}</h3>

               {this.renderButtons()}
          </div>
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
