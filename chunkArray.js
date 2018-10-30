function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];
  
  for (index = 0; index < arrayLength; index += chunkSize) {
      myChunk = myArray.slice(index, index+chunkSize);
      tempArray.push(myChunk);
  }

  return tempArray;
}
// Split in group of 3 items
var result = chunkArray([1,2,3,4,5,6], 2);

console.log(result);