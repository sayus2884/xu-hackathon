import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';

import { Milestones } from './collection';

const _ = lodash;

Meteor.methods({
   'milestones.insertMilestone' (name){
      check(name, String);

      // if (!Meteor.userId()) {
      //    throw new Meteor.Error('not-authorized');
      // }

      return Milestones.insert(milestone);
   },

   'milestones.completeMilestone' (milestoneId, isCompleted){
      Milestones.update(milestoneId, {
         $set: {
            completed: isCompleted
         }
      });
   },
});
