use('info');
// db.produit.insertOne({nom:"MacBook Pro",fabriquant:"apple",prix:11435.99,options:["intelCore i5","Retina Display","Long life battery"]});
// db.produit.insertOne({nom:"MacBook Air",fabriquant:"apple",prix:125794.73,ultrabook:true,options:["intelCore i7","SSD","Long life battery"]});
// db.produit.insertOne({nom:"Thinkpad X230",fabriquant:"Lenovo",prix:114358.74,options:["intelCore i5","SSD","Long life battery"]});
// db.produit.find({})
// db.produit.find({}).limit(1)
// db.produit.find({nom:"Thinkpad X230"});
// db.produit.find({_id:ObjectId("64760a8c830d9f3060f34135")})
// db.produit.find({prix:{$gt:13723}})
// db.produit.find({ultrabook:true}).limit(1)
// db.produit.find({nom: {$regex: /MacBook/ }})
// db.produit.find({nom: {$regex: /MacBook$/ }})
// db.produit.deleteMany({fabriquant:"apple"})
db.produit.deleteOne({_id:ObjectId("64760a8c830d9f3060f34135")})







