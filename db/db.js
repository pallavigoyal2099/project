const mongoose = require('mongoose')
require('dotenv').config()
const uri="mongodb+srv://Pallavi:C8cWsXwitVX33jAw@pallavi.6vdhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('MongoDB Connected...')
  })
  .catch((e)=>{
    console.log(e);
  })
