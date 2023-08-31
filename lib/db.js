import {MongoClient} from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(`mongodb+srv://olsolsols:yxxxxxxxxxx@cluster0.erererer.mongodb.net/auth-demo?retryWrites=true&w=majority`);

    return client;
}
