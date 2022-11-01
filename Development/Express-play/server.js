//depdendancies need to build server
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const protein = {
  'meat': {
    'name': "'chicken', 'beef', 'shrimp'",
  },
  'plant': {
    'name': "'edamame', 'tofu'",
  },
  'unknown': {
    'name': "'Not a protein source"
  }
};



//app is variable name we gave to express while the get method allows us to request something where its a file, route or data.
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:type', (req, res)=>{
    const type = req.params.type.toLocaleLowerCase()
    if(protein[type]){
       res.json(protein[type])  
    } else  {
        res.json(holidays['unknown'])
    }
   
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`GO TO PORT ${PORT}`)
})
