
  var fs=require('fs');
  var jsonData =fs.readFileSync('data.json', 'utf8');
  var dataFromJsonToBeChanged = JSON.parse(jsonData);
  let dataFromJson = JSON.parse(JSON.stringify(dataFromJsonToBeChanged));

  dataFromJsonToBeChanged.data.forEach((el) => {
    el.Prices.Currency = "USD";
  });

  let course = 0.86

  dataFromJson.data.forEach((el) => {
    el.Prices.Price = Math.round(
      ((el.Prices.Price * course) * 100) / 100
    );

    el.Prices["Retail Price"] = Math.round(
      ((el.Prices["Retail Price"] * course) * 100) / 100
    );

    el.Prices["Wholesale Price"] = Math.round(
      ((el.Prices["Wholesale Price"] * course) * 100) / 100
    );

    el.Prices.Currency = "EUR";
  });

  fs.writeFileSync("dataBeforeUpdated.json", JSON.stringify(dataFromJsonToBeChanged));
  fs.writeFileSync("updatedData.json", JSON.stringify(dataFromJson));