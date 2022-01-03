module.exports = function reverse (number) {
    let strNumber = number.toString()
  let result = ''
  if (isPositive (number)) {
    for (let i = strNumber.length - 1; i >= 0; i--) {
      result += strNumber[i]
    }
  } else {
    for (let i = strNumber.length - 1; i > 0; i--) {
      result += strNumber[i]
    }
  }
  result = + result
  return result
}

function isPositive (number) {
    if (number.toString()[0] === '-') {
      return false
    }
    return true
  }
