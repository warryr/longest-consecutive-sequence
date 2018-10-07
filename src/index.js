module.exports = function longestConsecutiveLength(array) {
  const set = new Set();
  let len = 0;

  for (let el in array){
    set.add(array[el]);
  }

  for (let i = 0, l = array.length; i < l; i++){
    let j = 0;
    if (!set.has(array[i] - 1)){
      j = array[i];
      while (set.has(j)){
        j++;
      }
      len = Math.max(len, j - array[i]);
    }
  }
  return len;
}