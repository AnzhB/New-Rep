function removeInvalidLastnames (list) {
  let newArr = []

  for (i=0; i<list.length; i++) {

    var stringArr = list[i].split('', list[i].length);

      function isRightSymbol(a){
        let codeNumber = a.charCodeAt(0)
       return (codeNumber >=1072 && codeNumber<=1103) || (codeNumber >=1040 &&  codeNumber<=1071)
       // 1040-1071 - А-Я , 1072-1103 - а-я
      }

      let isLastnameValid = stringArr.every(isRightSymbol)
        if (isLastnameValid) {
         newArr.push(list[i])
        }
    }
    console.log(newArr)
  }

  
  const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]
  removeInvalidLastnames(arr)
