/**
 * Compares two arrays (of any diamensions) and returns true if they're equals.otherwise return false.
 * @param arr1 
 * @param arr2 
 */
const compareArrays = function(arr1: any[], arr2: any[]): boolean {
  if(!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
  if(arr1.length !== arr2.length) return false;
  
  for(let i = 0, len = arr1.length; i < len; i++) {
    if(!compareArrays(arr1[i], arr2[i])) return false;
  }

  return true;
}

export default compareArrays;