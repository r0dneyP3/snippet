// fib(n+2) = fib(n+1) + fib(n)
// fib(n) = fib(n+2) - fib(n+1)

function fib(n){
  if (n >= 0){
    let memo = [0,1];
    for (let i = 2; i < n; i++) {
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
  if (a < 4503599627370495 && b < 4503599627370495) {
    return a+b;
  }
  // Split string to

}

function bigIntegerSubtract(a,b){
  return a-b;
}

function stringSegment(str, segLength){
  if (str)
}
