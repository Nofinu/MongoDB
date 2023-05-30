use('User');
//db.users.insertOne({name:"Chuck Norris",age:77,hobbies:["Karate", "Kung-fu", "Ruling the world"]})
// db.users.find({name:"Chuck Norris"},{_id:0})
// db.users.find({age:{$gt:20,$lt:25}})
// db.users.find({gender:"male",age:{$gt:30,$lt:40}})
// db.users.find({"address.state" : "Louisiana"})
// db.users.aggregate([{$sort:{age:-1}},{$limit:20}]);
// db.users.find({gender:"female",age:{$gt:30}}).count()
// db.users.updateMany({},{$set:{phone:null}})
// db.users.updateOne({name:"Chuck Norris"},{$set: {age:"inifity"}})
// db.users.updateMany({age:{$gt:50}},{$push:{hobbies:"jardinage"}})
db.users.find({age:{$gt:50}})
