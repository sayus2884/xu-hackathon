import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import AdminLayout from '../ui/layouts/AdminLayout';

import Home from '../ui/pages/Home';
import Admin from '../ui/pages/Admin';
import BookPreview from '../ui/pages/BookPreview';

FlowRouter.route('/', {
   name: 'Books.show',
   action() {
      mount(MainLayout, {
         content: <Home/>
      });
   },
});

FlowRouter.route('/:id', {
   name: 'Book.show',
   action() {
      mount(MainLayout, {
         content: <BookPreview/>
      });
   },
});

FlowRouter.route('/admin', {
   name: 'Admin.show',
   action() {
      mount(AdminLayout, {
         content: <Admin/>
      });
   },
});
