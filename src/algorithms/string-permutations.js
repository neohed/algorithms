// From SO answer
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    console.log({arr,m})
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        console.log({curr,next})
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr)

  return result;
}

console.log(permutator(['c','a','t']))
