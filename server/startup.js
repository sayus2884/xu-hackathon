import { Milestones } from '../imports/api/milestones';
import { Random } from 'meteor/random';

Meteor.startup(() => {

   if (Milestones.find().count() === 0) {

      const gatheringId = Random.id(); // level 1
      const craftingId = Random.id(); // level 1

      const miningId = Random.id(); // level 2, req crafting
      const fishingId = Random.id(); // level 2, req crafting
      const huntingId = Random.id() // level 2, req gathering, crafting

      const constructionId = Random.id() // level 3, req mining
      const smeltingId = Random.id(); // level 3, req mining

      const shipwrightId = Random.id(); // level 4, req construction, fishing

      const milestones = [
         {
            _id: gatheringId,
            name: 'Gathering',
            req: [],
            position: 0,
            completed: false
         },
         {
            _id: craftingId,
            name: 'Crafting',
            req: [],
            position: 0,
            completed: false
         },
         {
            _id: miningId,
            name: 'Mining',
            req: [craftingId],
            position: 1,
            completed: false
         },
         {
            _id: fishingId,
            name: 'Fishing',
            req: [craftingId],
            position: 1,
            completed: false
         },
         {
            _id: huntingId,
            name: 'Hunting',
            req: [gatheringId],
            position: 1,
            completed: false
         },
         {
            _id: constructionId,
            name: 'Construction',
            req: [craftingId, miningId],
            position: 2,
            completed: false
         },
         {
            _id: smeltingId,
            name: 'Smelting',
            req: [craftingId, miningId],
            position: 2,
            completed: false
         },
         {
            _id: shipwrightId,
            name: 'Shipwright',
            req: [craftingId, fishingId, constructionId],
            position: 3,
            completed: false
         }
      ];

      milestones.map((milestone) => {
         Milestones.insert(milestone, function(err, milestoneId){
            if(milestoneId){
               console.log('Server Startup: Created new milestone', milestoneId, milestone.name);
            } else {
               throw new Meteor.Error(err);
            }
         })
      });
   }

});
