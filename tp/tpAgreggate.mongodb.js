use('livre')

// db.livre.aggregate([{$match:{authors:"Toru Ishida"}},{$sort:{title:1,"pages.start":1}},{$project:{title:1,pages:1,type:1}}])
// db.livre.aggregate([{$match:{authors:"Toru Ishida"}},{$group: { _id: null, nbr_publi: { $sum: 1 } }},{ $project: { _id: 0 } }])
// db.livre.aggregate([{$match:{authors:"Toru Ishida",year:{$gt:2011}}},{$group: { _id: "$_id", nbr_publi: { $sum: 1 } }},{ $project: { _id: 0 } }])
db.livre.aggregate([{$unwind: "$authors"},{$group: { _id: "$authors", nbr_publi: { $sum: 1 } }},{$sort:{nbr_publi:-1}},{$limit:2000}])


