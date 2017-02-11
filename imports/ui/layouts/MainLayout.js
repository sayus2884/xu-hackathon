import React, { Component } from 'react';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';


class MainLayout extends Component {
   render(){
      return (
         <div id="wrapper">

            <div id="page-wrapper" className="gray-bg no-navigation">

               <TopNavbar />

               <div>{this.props.content}</div>
               
               <Footer />


            </div>

         </div>
      );
   }
}

export default MainLayout;
