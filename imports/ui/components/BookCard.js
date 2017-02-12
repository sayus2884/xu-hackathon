import React, { Component, PropTypes } from 'react';

import BookPushModal from './BookPushModal';

const _ = lodash;

class BookCard extends Component {
   render(){
      const book = this.props.book;
      let stock = this.props.book.books.length;

      book.books.map((data) => {
         if (data.isReserved) {
            stock--;
         }
      });

      return (

         <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
               <img src={book.imageUrl}
                  style={{height: '150px'}}/>
               <div className="caption">
                  <h4><a onClick={this.goToPreview.bind(this, book._id)}>{book.title}</a></h4>
                  <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div>
               <h3>Stock: {stock}</h3>

               {this.renderButtons()}
            </div>
         </div>

      );
   }

   renderButtons(){
      const book = this.props.book;

      return this.props.isAdmin ? (
         <button onClick={this.goToManage.bind(this, book._id)}>Manage</button>
      ) : (
         <button className="btn btn-info" onClick={this.goToPreview.bind(this, book._id)}>View Details</button>
      );
   }

   goToPreview(id, event){
      event.preventDefault();
      FlowRouter.go('/book/' + id);
   }

   goToManage(id, event){
      event.preventDefault();
      FlowRouter.go('/admin/book/' + id);
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
