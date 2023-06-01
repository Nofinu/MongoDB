use('restaurants')

// db.restaurants.aggregate([{$limit:10}]);
// db.restaurants.aggregate([{$sort:{name:1}},{$limit:10}]);
// db.restaurants.aggregate([{$match:{borough:"Brooklyn"}},{$sort:{name:1}},{$limit:10}]);
// db.restaurants.aggregate([{$limit:10},{$project:{name:1,address:1,_id:0}}]);
// db.restaurants.aggregate([{$limit:10},{$project:{grades:0,address:0}}]);
// db.restaurants.aggregate([{$unwind:"$grades"},{$group: {_id: "$_id",nbr_note: {$sum: 1}}},{$limit:10},{$sort:{nbr_note:1}}])
// db.restaurants.aggregate([{$limit:10},{$project: {name: { $toUpper: "$name" },borough:1}}])
// db.restaurants.aggregate([{$limit:10},{$project: {name: { $toUpper: "$name" },borough:{$substr: [ "$borough", 0, 3 ]}}}])
// db.restaurants.aggregate([{$group:{_id:"grades",nbr_restau:{$sum:1}}}])
db.restaurants.aggregate([{$group:{_id:"$borough",nbr_restau_quartier:{$sum:1}}}])

