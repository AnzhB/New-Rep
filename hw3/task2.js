
var fs = require("fs")
var jsonData =fs.readFileSync('data2.json', 'utf8')
var dataFromJson = JSON.parse(jsonData)

let dataFromJsonUpdatedArr = [];

dataFromJson.forEach((el) => {
  if (dataFromJsonUpdatedArr.indexOf(JSON.stringify(el)) === -1) {
    dataFromJsonUpdatedArr.push(JSON.stringify(el));
  }
});
console.log(dataFromJsonUpdatedArr.length);

fs.writeFileSync("dataNew.json", JSON.stringify(dataFromJsonUpdatedArr));