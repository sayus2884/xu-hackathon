import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';

import Home from '../ui/pages/Home';

FlowRouter.route('/', {
   name: 'Lists.show',
   action() {
      mount(MainLayout, {
         content: <Home/>
      });
   },
});
