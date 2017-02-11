import React, { Component } from 'react';

import TopNavbar from '../components/TopNavbar';

class AdminLayout extends Component {
   render(){
      return (
         <div id="wrapper">

            <div id="page-wrapper" className="gray-bg no-navigation">

               <TopNavbar />

               <div>{this.props.content}</div>

            </div>

         </div>
      );
   }
}

export default AdminLayout;
