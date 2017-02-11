import { Random } from 'meteor/random';

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Milestones } from '/imports/api/milestones';

import Level from '../components/Level';

class Home extends Component {
   render(){
      const milestones = this.props.milestones;
      const isLoading = this.props.loading;

      return isLoading ? (
         <h2>Loading Milestones</h2>
      ) : (
         <div>
            <h2>Milestones</h2>
            {this.renderMilestones()}
         </div>
      );
   }

   renderMilestones(){
      const milestones = this.props.milestones;

      const filteredMilestones = this.separatingMilestonesByPosition(milestones);

      return filteredMilestones.map((milestonesArr) => (
         <Level key={Random.id()} milestones={milestonesArr} />
      ));
   }

   separatingMilestonesByPosition(milestones){
      let milestonesArr = [];
      milestones.map((milestone) => {

         if (!milestonesArr[milestone.position]) {
            milestonesArr[milestone.position] = [];
         }

         milestonesArr[milestone.position].push(milestone);
      });

      return milestonesArr;
   }
}

export default createContainer(() => {
   const subscription = Meteor.subscribe('milestones');

   const loading = !subscription.ready();
   const milestones = Milestones.find().fetch();

   return { loading, milestones  }

}, Home);
