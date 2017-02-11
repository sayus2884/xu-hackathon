import { Books } from '../imports/api/books';
import { Random } from 'meteor/random';

Meteor.startup(() => {

   if (Books.find().count() === 0) {

      const books = [
         {
            _id: Random.id(),
            title: 'Harry Potter',
            stock: 10,
            imageUrl: 'http://prodimage.images-bn.com/pimages/9780545139700_p0_v4_s1200x630.jpg',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            books: [
               {
                  _id: Random.id(),
                  price: 300,
                  owner: 'John Doe',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 200,
                  owner: 'John Dow',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 100,
                  owner: 'John Dough',
                  isSold: false,
                  condition: 'Good'

               },
            ]
         },
         {
            _id: Random.id(),
            title: 'Hardy Boys',
            stock: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/914d9xLbgrL.jpg',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            books: [
               {
                  _id: Random.id(),
                  price: 300,
                  owner: 'John Doe',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 200,
                  owner: 'John Dope',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 100,
                  owner: 'John Dot',
                  isSold: false,
                  condition: 'Good'

               },
            ]
         },
         {
            _id: Random.id(),
            title: 'Star Trek',
            stock: 10,
            imageUrl: 'https://d202m5krfqbpi5.cloudfront.net/books/1327281304l/1120870.jpg',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            books: [
               {
                  _id: Random.id(),
                  price: 300,
                  owner: 'John Doe',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 200,
                  owner: 'John Doe',
                  isSold: false,
                  condition: 'Good'

               },
               {
                  _id: Random.id(),
                  price: 100,
                  owner: 'John Doe',
                  isSold: false,
                  condition: 'Good'

               },
            ]
         },
      ];

      console.log('creating new book instances...');

      books.map((book) => {
         Books.insert(book, function(err, bookId){
            if(bookId){
               console.log('Server Startup: Created a new book instance:', book.title);
            } else {
               throw new Meteor.Error(err);
            }
         })
      });
   }

});
