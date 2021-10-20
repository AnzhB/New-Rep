
const vovelsCounter = (str) => {
  const vovels = ['a', 'e', 'i', 'o', 'u', 'y'] 
  let counter = 0
  let strArr = str.split("");

  for(letter of strArr){
    if (vovels.includes(letter)){
        counter ++
   }
 }
 console.log(counter)
}

vovelsCounter('The current directory is AD-123')

