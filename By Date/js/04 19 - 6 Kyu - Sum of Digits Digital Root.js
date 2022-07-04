// // MY Solution
// function digital_root(n) {
//   //convert n to string
//   //use split()
//   //use reduce()
//   //keep using reduce() until single digit is acquired

//   while( n.toString().length !== 1){
//     //console.log(n.toString().split('').map(e => Number(e)).reduce((a,b) => a + b))
//     n = n.toString().split('').map(e => Number(e)).reduce((a,b) => a + b);
//   }
//   //console.log(n)
//   return n;
// }


// Best Solution
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
digital_root(456)
