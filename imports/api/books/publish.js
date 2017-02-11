import { Books } from './collection';

if (Meteor.isServer) {
   Meteor.publish('books', function() {
      return Books.find();
   });
}
