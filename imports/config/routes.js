import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import AdminLayout from '../ui/layouts/AdminLayout';

import Home from '../ui/pages/Home';
import Admin from '../ui/pages/Admin';

FlowRouter.route('/', {
   name: 'Books.show',
   action() {
      mount(MainLayout, {
         content: <Home/>
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
