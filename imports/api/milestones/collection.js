import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Milestones = new Mongo.Collection('milestones');

Milestones.allow({
   insert(userId, milestone) {
      return userId && milestone.owner === userId;
   },
   update(userId, milestone, fields, modifier) {
      return userId && milestone.owner === userId;
   },
   remove(userId, milestone) {
      return userId && milestone.owner === userId;
   }
});
