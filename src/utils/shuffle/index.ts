/**
 * An array using the fisher-Yates shuffle: Algorithm.
 * @param array Pass any array that you want to shuffled.
 */

const ShuffleArray = function(array: any) {
  for(let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    
    // What is happeding here is, we are creating an array who doen't have a name, and we are swaping element around. And somehow it's working due to closers thing in JavaScript.
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export default ShuffleArray;
