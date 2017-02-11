import { Random } from 'meteor/random';

import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Milestones } from '/imports/api/milestones';

import Milestone from './Milestone';

class Level extends Component {
   render(){
      const milestones = this.props.milestones;
      return (
         <div key={Random.id()}>
            <h3>Tech Level {milestones[0].position + 1}</h3>
            <ul>
               {this.renderMilestones()}
            </ul>
         </div>
      );
   }

   renderMilestones(){
      const milestones = this.props.milestones;
      return milestones.map((milestone) => (
         <li key={milestone._id}>
            <Milestone milestone={milestone}/>
         </li>
      ));
   }
}

Level.propTypes = {
   milestones: PropTypes.array.isRequired,
};

export default Level;
