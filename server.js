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
		var returnObject = returnObj(meshblock);
		console.log("retjurn obj", returnObject[0]);
		res.json(returnObject[0])
	}
	else {
		res.json({"numberOfFamilies": "3"})
	}
})

app.listen(process.env.PORT || 3001)


function returnObj(meshblock) {
	const ret = census.filter(x => x.meshblockCode == meshblock)
	return ret;
}