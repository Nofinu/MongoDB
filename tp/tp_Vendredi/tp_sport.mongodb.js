use('tp_sport');

// db.sportifs.find({Age:{$gt:20,$lt:30}},{_id:1,Nom:1,Prenom:1});
// db.gymnase.aggregate([{$match: {$or:[{Ville :"VILLETANEUSE"},{Ville :"SARCELLES"}] ,Surface:{$gt:400}}}])
// db.sportifs.aggregate([{$unwind:"$Sports.Jouer"},{$match:{"Sports.Jouer":"Hand ball"}}])
// db.sportifs.aggregate([{$match:{Sports:null}}])

// db.gymnase.find({$and:[{"Seances.Libelle":"Basket ball"},{"Seances.Libelle":"Volley ball"}] })
// db.sportifs.aggregate([{$match: {Sexe:"F"}},{$unwind:"$Sports.Jouer"},{$match:{"Sports.Jouer":"Basket ball"}},{$group: {_id: "$Sports.Jouer",nbr_Joueuse: {$sum: 1}}}])

// db.sportifs.aggregate([{$unwind:"$Sports.Arbitrer"},{$group: {_id: "$_id",nbr_Abitrage: {$sum: 1}}}])




