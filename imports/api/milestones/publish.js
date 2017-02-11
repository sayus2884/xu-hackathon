import { Milestones } from './collection';

if (Meteor.isServer) {
   Meteor.publish('milestones', function() {
      return Milestones.find();
   });
}
