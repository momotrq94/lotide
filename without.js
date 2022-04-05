const without = function(source,itemsToRemove){
  let outputArray =[];
  for (const j of source){
    outputArray.push(j);
  }

  for (const element of itemsToRemove){
    let indexArray = [];
    for (i=0; i<outputArray.length; i++){
      if (outputArray[i]===element){
        outputArray.splice(i,1);
      }
    }
  }
return outputArray;
}