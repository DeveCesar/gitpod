const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-f3qce.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res=>{
    console.log('DB is connect')
}).catch(error =>{
    console.log('Error al conectarse a Mongo Atlas');
})