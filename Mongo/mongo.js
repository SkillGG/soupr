const MongoClient = require('mongodb').MongoClient;

let DatabaseAccess = {
	Connected:false
};

DatabaseAccess.Connect = ()=>{
	return new Promise(async (res,req)=>{
		const uri = "mongodb+srv://Mangadods:<password>@cluster0.8wecw.mongodb.net/Cluster0?retryWrites=true&w=majority";
		const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true } );
		try{
			await client.connect();
			let db = client.db("Cluster0");
			let coll = db.collection("SoupRPG");
		}catch(err){
			console.error(err.stack);
		}finally {
			client.close();
		}
		res();
	});
}

module.exports = DatabaseAccess;