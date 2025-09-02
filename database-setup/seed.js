const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
    const url = process.env.MONGODB_URL;
    const client = new MongoClient(url);

    try {
    await client.connect();
    console.log('✅ Conectado a MongoDB Atlas');

    const database = client.db(process.env.DB_NAME);
    const questionsCollection = database.collection('questions');

    // Cargar preguntas desde el JSON
    const questions = require('./questions.json');
    console.log(`📝 Cargadas ${questions.length} preguntas desde el JSON`);

    // Verificar si ya existen datos
    const existingCount = await questionsCollection.countDocuments();
    
    if (existingCount > 0) {
      console.log(`⚠️  Ya existen ${existingCount} preguntas en la base de datos`);
      console.log('🔄 Agregando nuevas preguntas...');
         
      await questionsCollection.deleteMany({});
      const result = await questionsCollection.insertMany(questions);
      console.log(`✅ ${result.insertedCount} nuevas preguntas insertadas`);
      
    } else {
      // No hay datos existentes, insertar normalmente
      const result = await questionsCollection.insertMany(questions);
      console.log(`✅ ${result.insertedCount} preguntas insertadas`);
    }

    // Crear índices para optimizar búsquedas
    await questionsCollection.createIndex({ category: 1 });
    await questionsCollection.createIndex({ difficulty: 1 });
    console.log('📈 Índices de categoría y dificultad creados/actualizados');

    // Mostrar resumen por categorías
    const categoriesSummary = await questionsCollection.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ]).toArray();
    
    console.log('\n📊 Resumen por categorías:');
    categoriesSummary.forEach(cat => {
      console.log(`   ${cat._id}: ${cat.count} preguntas`);
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
    console.log('🔌 Conexión cerrada');
  }
}

main();