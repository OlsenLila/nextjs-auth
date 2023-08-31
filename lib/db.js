import {MongoClient} from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(`mongodb+srv://olsenlila8:xxxxxxxxxx@cluster0.ut6eejb.mongodb.net/auth-demo?retryWrites=true&w=majority`);

    return client;
}
