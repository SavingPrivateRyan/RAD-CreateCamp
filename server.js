const express = require('express')
const fs = require('fs')
const path = require('path')
var data = fs.readFileSync('data/dummy.json', 'utf8')
var census = JSON.parse(data)

const app = express()

app.use(express.static(path.join(__dirname, 'client/client/build')))

var meshblock = 'MB 0000200';

app.get('/', (req, res) => res.send("Welcome to our dummy home page :)"))
app.get('/mesh', (req, res) => {
	console.log(req.query)
res.json(census)
})

app.listen(process.env.PORT || 3000)

console.log(census);
// const csvFilePath = 'C:/Users/Ryan/Documents/GitHub/RAD-CreateCamp/server/csv-file/test.csv';
// const csv = require('csvtojson')
//
//
//
// const printJSON = () =>{
//   csv()
//
//   .fromFile(csvFilePath)
//   .then((jsonObj) =>{
//
//     console.log(jsonObj);
//   })
//
// }
//
// printJSON();

// const jsonArray=await csv().fromFile(csvFilePath);
//
//
// console.log(jsonArray());
