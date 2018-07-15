   function quickSort(arr, left, right){
   var len = arr.length,pivot,partIndex;
  if(left < right){
    pivot = right;
    partIndex = partition(arr, pivot, left, right);
   quickSort(arr, left, partIndex - 1);
   quickSort(arr, partIndex + 1, right);
  }
  return arr;
}
   function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],partIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partIndex);
      partIndex++;
    }
  }
  swap(arr, right, partIndex);
  return partIndex;
}
  function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
} 
quickSort([12,9,15,4,7,3,8],0,6); 
