function miniMaxSum(arr) {
    // Write your code here
    
     let x = arr.sort();
    
    let sum = x.reduce((partialSum, a) => partialSum + a, 0);
    
console.log(sum-arr[4], sum-arr[0]);

}
