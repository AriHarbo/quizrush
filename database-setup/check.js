const { MongoClient } = require('mongodb');
require('dotenv').config();

async function checkData() {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const questionsCollection = database.collection('questions');

    const count = await questionsCollection.countDocuments();
    console.log(`📊 Total preguntas en la base: ${count}`);

    const sampleQuestions = await questionsCollection.find().limit(3).toArray();
    console.log('\nMuestra de preguntas:');
    sampleQuestions.forEach((q, i) => {
      console.log(`${i + 1}. ${q.question} (${q.category})`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkData();