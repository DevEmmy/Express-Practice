const mongoose = require('mongoose');
const uri = "mongodb+srv://DevEmmy:<password>@cluster0.fk6dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
