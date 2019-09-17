const express=require('express');
const body-parser=require('body-parser');
const PORT=process.env.PORT || 8080;
const path=require('path');

const app=express();
app.use(bodyParser.json());
app.use(express.static('../react-client/dist'));
app.get('*',(req,res) => {res.sendFile(path.resolve('../react-client/dist/index.html'));});

app.listen(PORT,() => {console.log('listening on port ${PORT}!');});