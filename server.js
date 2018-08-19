const express = require('express')
const fs = require('fs')
const path = require('path')
var data = fs.readFileSync('data/2013FamilyData.json', 'utf8')
var census = JSON.parse(data)

const app = express()

app.use(express.static(path.join(__dirname, 'client/client/build')))


app.get('/', (req, res) => res.send("Welcome to our dummy home page :)"))
app.get('/mesh', (req, res) => {
	const meshblock = "MB 0499200"
	var returnObject = returnObj(meshblock);
	res.json(returnObject[0])
})

app.listen(process.env.PORT || 3001)


function returnObj(meshblock) {
	const ret = census.filter(x => x.meshblockCode == meshblock)
	return ret;
}