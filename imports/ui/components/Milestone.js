import { Random } from 'meteor/random';

import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Milestones } from '/imports/api/milestones';

class Milestone extends Component {
   constructor(props){
      super(props);

      this.completeMilestone = this.completeMilestone.bind(this);
   }

   render(){
      const milestone = this.props.milestone;
      return (
         <div>
            Milestone: {milestone.name} :
            <button onClick={this.completeMilestone} disabled={this.canBeCompleted()}>{this.setButtonLabel()}</button>
         </div>
      );
   }

   renderRequirements(){
      return this.props.milestone.req.map((requirementId) => (
         <span key={Random.id()}>
            {requirementId},
         </span>
      ));
   }

   setButtonLabel(){
      const milestone = this.props.milestone;
      return milestone.completed ? 'Completed' : 'Research'
   }

   canBeCompleted(){
      const milestoneIdArr = this.props.milestone.req;
      let flag = true;
      let milestone;

      for (let i = 0; i < milestoneIdArr.length; i++) {
         milestone = Milestones.findOne(milestoneIdArr[i]);
         flag = milestone.completed;

         if (!flag) {
            break;
         }
      }

      return !flag;
   }

   completeMilestone(event){
      event.preventDefault();

      const milestone = this.props.milestone;
      Meteor.call('milestones.completeMilestone', milestone._id, !milestone.completed);
   }
}

Milestone.propTypes = {
   milestone: PropTypes.object.isRequired,
};

export default Milestone;
