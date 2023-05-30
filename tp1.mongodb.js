use ('hopital');

//db.patien.insertOne({_id: 1,nom:"toto",prenom:"tata",hitorique :[{maladie:"rhume",traitement:"sirop"},{maladie:"gripe",traitement:"medicaments"}]})
// db.patien.insertOne( {_id: 2,nom:"tutu",prenom:"titi",hitorique :[{maladie:"covid",traitement:"sirop"},{maladie:"gripe",traitement:"medicaments"}]})
// db.patien.insertOne(  {_id: 3,nom:"tota",prenom:"titi",hitorique :[{maladie:"toux",traitement:"sirop"},{maladie:"gripe",traitement:"medicaments"}]})

// db.patien.updateMany({},{$set:{age:32}});

//db.patien.updateOne({_id: 1},{$set:{age: 23,hitorique :[{maladie:"fievre",traitement:"sirop"},{maladie:"rhume",traitement:"repos"}]}})
// db.patien.find({hitorique : {$elemMatch: { maladie:"gripe"}}});
// db.patien.find({"hitorique.maladie":"toux"})

db.patien.deleteMany({hitorique : {$elemMatch: { maladie:"gripe"}}})
