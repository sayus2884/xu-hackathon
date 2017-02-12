import React, { Component } from 'react';

import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

class AdminLayout extends Component {
   render(){
      return (
         <div id="wrapper">

            <div id="page-wrapper" className="gray-bg no-navigation">

                <TopNavbar />
                 <div className="container">
                   <div className="row">
                     <div className="col-md-9">
                       <div>{this.props.content}</div>
                     </div>
                   </div>
                  </div>
                <Footer />


            </div>

         </div>
      );
   }
}

export default AdminLayout;
