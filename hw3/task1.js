

function getPricesFromJson () {
    var fs=require('fs');
    var jsonData =fs.readFileSync('data.json', 'utf8');
    var dataFromJson = JSON.parse(jsonData);
    
    console.log(jsonData)
    console.log(dataFromJson)
    
    console.log(dataFromJson.data[0].SKU)
    
    //console.log(dataFromJson.data[0].Prices.Price)
    let course = 0.86
    var values = []
    var keys = []
    for(var k in dataFromJson.data[0].Prices) {
      values.push(dataFromJson.data[0].Prices[k]*course)
    
      keys.push(k)
    
    
    }
    
    
    console.log(values)
    console.log(keys)
    }
    
    getPricesFromJson ()
    