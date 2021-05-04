import * as Mongo from 'mongodb';

interface DBAccess {
	Connect(mongoURI:string, fun: DoOnDatabaseFn): Promise<any>,
}

// TODO: Add MongoURI to .env

type DoOnDatabaseFn = (client: Mongo.MongoClient, database: Mongo.Db, collection: Mongo.Collection) => Promise<void>;

export let DatabaseAccess: DBAccess = {
	Connect: (mongoURI: string, fun: DoOnDatabaseFn) => {
		return new Promise(async (res, req) => {
			const client = new Mongo.MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
			let returnData = null;
			try {
				await client.connect();
				let db = client.db("Cluster0");
				let coll = db.collection("SoupRPG");
				returnData = await fun(client, db, coll);
			} catch (err) {
				req(err);
			} finally {
				client.close();
			}
			res(returnData);
		});
	},
};
