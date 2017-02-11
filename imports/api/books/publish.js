import { Books } from './collection';

if (Meteor.isServer) {

   Meteor.publish('books', function() {
      return Books.find();
   });

   Meteor.publish('book', function(bookId) {
      return Books.find(bookId);
   });
}
