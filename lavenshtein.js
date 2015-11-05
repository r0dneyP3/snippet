export default function levenshtein(str1, str2){
  return mutate(str1.split(''), str2.split(''), {});
}

// both array of string reprsentation
function mutate(src, dst, memoir){
  var hash = src.join('') + "+" + dst.join('');
  if (memoir.hasOwnProperty(hash)) return memoir[hash];
  // Base case 1: src is empty.
  if (src.length === 0) return dst.length;
  // Base case 2: dst is empty.
  if (dst.length === 0) return src.length;
  // Both not empty at this stage
  if (src[0] === dst[0]){
    var distance = mutate(src.slice(1), dst.slice(1), memoir);
    memoir[hash] = distance;
    return distance;
  }
  var distance = 1 + Math.min(
    mutate(src.slice(1), dst.slice(1), memoir),    // Replace first character of src to match dst
    mutate(src, dst.slice(1), memoir),             // Add a character to src
    mutate(src.slice(1), dst, memoir));            // Remove a character from src
  memoir[hash] = distance;
  return distance;
}
