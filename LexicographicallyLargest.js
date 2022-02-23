function getLargestString(string,k) {
  let res = new Array(26).fill(0)
  let ans = ""

  for (let i of string) {
    let pointer = i.charCodeAt(0) - 97            //'a'.charCodeAt(0) = 97!!
    res[pointer] += 1
  }

  for (let i=25; i>= 0;) {
    if (res[i] == 0) {
      i--
      continue
    }
    else if (res[i]<=k) {
      let letter = String.fromCharCode(i+97)
      ans += letter.repeat(res[i])
      res[i] == 0
      i--
    }
    else if (res[i]>k) {
      let letter = String.fromCharCode(i+97)
      ans += letter.repeat(k)
      res[i] -= k

      let temp = k
      let j = i-1
      while (res[j] <= 0 && j>= 0) {
          j--
      }
      if (res[j]>0 && j>=0) {  
        let newletter = String.fromCharCode(j+97)
        ans += newletter
        res[j] -= 1
      }
      else {
        break
      }
    }
  }
  
  return ans
}


let string = "baccc"
let k = 2
console.log(getLargestString(string,k))