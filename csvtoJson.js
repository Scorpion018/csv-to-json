const CSVToJSON = require('csvtojson')
const fs = require('fs');
const path = require('/home/v-labsai-vishwasm/Desktop/osha/2016.json');

CSVToJSON()
  .fromFile('2019.csv')
  .then(users => {
	fs.writeFile('2019.json', JSON.stringify(users, null, 4), (err) => {
		if (err) {
			throw err;
		}
		console.log("JSON array is saved.");
	});
  })
  .catch(err => {
    console.log(err)
  })





// const fs = require("fs");
// csv = fs.readFileSync("file.csv")
// var array = csv.toString().split("\r");
// let result = [];

// let headers = array[0].split(", ")

// for (let i = 1; i < array.length - 1; i++) {
// let obj = {}

// let str = array[i]
// let s = ''

// let flag = 0
// for (let ch of str) {
// 	if (ch === '"' && flag === 0) {
// 	flag = 1
// 	}
// 	else if (ch === '"' && flag == 1) flag = 0
// 	if (ch === ', ' && flag === 0) ch = '|'
// 	if (ch !== '"') s += ch
// }

// let properties = s.split("|")

// for (let j in headers) {
// 	if (properties[j].includes(", ")) {
// 	obj[headers[j]] = properties[j]
// 		.split(", ").map(item => item.trim())
// 	}
// 	else obj[headers[j]] = properties[j]
// }

// result.push(obj)
// }

// let json = JSON.stringify(result);
// fs.writeFileSync('output.json', json);

