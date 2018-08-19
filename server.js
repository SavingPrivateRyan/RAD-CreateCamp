const express = require('express')
const fs = require('fs')
const path = require('path')
var data = fs.readFileSync('data/2013FamilyData.json', 'utf8')
var census = JSON.parse(data)

const app = express()

app.use(express.static(path.join(__dirname, 'client/client/build')))


app.get('/', (req, res) => res.send("Welcome to our dummy home page :)"))
app.get('/mesh', (req, res) => {
	console.log(req.query)
	if (req.query.lat == 4){
		const meshblock = "MB 1021000"
		console.log(returnObj(meshblock))
		res.json(meshblock)
	}
})

app.listen(process.env.PORT || 3000)


function returnObj(meshblock) {
	const ret = census.filter(x => x.meshblockCode == meshblock)
	return ret;
}


// function searchMeshblock(meshblockCode) {

// }

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
