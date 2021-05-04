const MongoClient = require('mongodb').MongoClient;

let DatabaseAccess = {
	Connected:false
};

DatabaseAccess.Connect = ()=>{
	return new Promise(async (res,req)=>{
		const client = new MongoClient(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true } );
		try{
			await client.connect();
			let db = client.db("Cluster0");
			let coll = db.collection("SoupRPG");
		}catch(err){
			req(err);
		}finally {
			client.close();
		}
		res();
	});
}

module.exports = DatabaseAccess;