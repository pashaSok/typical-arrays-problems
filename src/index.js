
exports.min = function min (array) {
  if(arguments.length ==0){
    return 0;
   }
   else{
    let min = array[0];
    if(array.length==0 || arguments.length ==0){
      min=0;
    }
    for(let i=0;i<array.length;i++){
      if(min>array[i]){
        min=array[i];
      }
    }
    return min;
   }
}

exports.max = function max (array) {
  let max = 0;
  if(arguments.length ==0){
    return 0;
   }
  else {
    for (let i = 0; i < array.length; i++) {
    if(max<array[i]){
      max=array[i];
    }
  }
  return max;}
}

exports.avg = function avg (array) {
  let sum=0;
  let sred=0;
  if(arguments.length ==0){
   return 0;
  }
  else{
    for(let i=0;i<array.length;i++){
      sum+=array[i];
      sred = sum/array.length;
    }
  return sred;
  }
}
