import React, { Component } from 'react';

class AdminLayout extends Component {
   render(){
      return (
         <div id="wrapper">

            <div id="page-wrapper" className="gray-bg no-navigation">

               <div>{this.props.content}</div>

            </div>

         </div>
      );
   }
}

export default AdminLayout;
