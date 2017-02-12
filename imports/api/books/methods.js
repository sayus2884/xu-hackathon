import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';

import { Books } from './collection';

const _ = lodash;

Meteor.methods({
   'books.insert'(book){
     Books.insert(book)
  },

   'books.stockInsert'(bookId, book){
      Books.update(bookId, {
         $push: {
            books: {
               price: book.price,
               condition: book.condition,
               _id: Random.id()
            }
         }
      })
   }
});
