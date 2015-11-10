// fib(n+2) = fib(n+1) + fib(n)
// fib(n) = fib(n+2) - fib(n+1)

function fib(n){
  if (n >= 0){
    let memo = [0,1];
    for (let i = 2; i <= n; i++) {
      memo.push(bigIntegerAdd(memo[i-2], memo[i-1]));
    }
    return memo[n];
  }else{
    let memo = [1,0];
    for (let i = -1; i >= n; i--) {
      memo.push(bigIntegerSubtract(memo[i+2], memo[i+1]));
    }
    return memo[1-n];
  }
}

function bigIntegerAdd(a,b){
  // Short circuit when the sum will be less than Number.MAX_SAFE_NUMBER
  if (typeof a === 'number' &&
      typeof b === 'number' &&
      a < 4503599627370495 &&
      b < 4503599627370495) {
    return a+b;
  }
  [a, b] = canonicalNumber(a,b);
  let carry = 0;
  let sum = [];
  for (let index = a.length - 1; index >= 0; index --){
    let digit = +a[index] + carry + +b[index];
    carry = digit > 9 ? 1 : 0;
    sum[index] = (digit%10);
  }
  // let sum = Array.prototype.map.call(a, function(value, index){
  //   let digit = +value + carry + +b[index];
  //   carry = digit > 9 ? 1 : 0;
  //   return digit%10;
  // });
  if (carry === 1){
    sum = '1' + sum.join('');
  }else{
    sum = sum.join('');
  }
  return sum;
}

function bigIntegerSubtract(a,b){
  return a-b;
}

function canonicalNumber(a,b){
  a = String(a);
  b = String(b);
  let desiredLength = Math.max(a.length, b.length);
  return [
    padZero(a, desiredLength),
    padZero(b, desiredLength)
  ];
}

function padZero(str, targetLength, padRight){
  if (padRight === true){
    return str + '0'.repeat(Math.max(targetLength - str.length, 0));
  }
  return '0'.repeat(Math.max(targetLength - str.length, 0)) + str;
}
