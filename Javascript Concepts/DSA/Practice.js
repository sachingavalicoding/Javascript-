// let num = 121;
// // check is palindrome or not 
// let temp = num;
// let rev = 0;
// while(num != 0){
//     rev = (rev * 10) + num % 10
//     num = Math.floor(num / 10);
// }
// console.log("rev",rev);

// if(rev === temp){
//     console.log("is Palindrome");
// }
// else{
//     console.log("not a palindrome");
// }

// factorial of number 

// const factorial = (num) => {
//     if(num === 1 || num === 0 ) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(5));

// let fact = 1;
// const factorial = (num) => {
//     if(num <= 1) return 1;
//     for(let i = num ; i > 0; i--){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));

//fibonnachi series 
// 0 1 1 2 3 5 8 

// let n1 = 0;
// let n2 = 1;
// let n3;
// while(n2 <= 50){
//     n3 = n1 + n2;
//     n1 = n2;
//     n2 = n3;
//     console.log(n1);
// }

// prime number 
// const isPrime = (num) => {
//     if(num < 2) return false;
//     for(let i = 2; i <= num / 2 ; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(1));

//let str = "aabbccdd";
// const revString = (str) => {
//     return String(str).split("").reverse().join("");
// }
// console.log(revString(str));

// const rev = (str) => {
//     let revString = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         revString += str.at(i);
//     }
//     return revString;
// }
// console.log(rev(str));

// const palindrome = (str) => {
//     let high = str.length-1;
//     let low = 0;
//     while(low <= high){
//        if(!str[low] === str[high]){
//         return false;
//        }
//        low++;
//        high--;
//     }
//     return true;
// }
// console.log(palindrome("aba"));
let str = "Hey Hello How are you ";

// const countWords = (str) => {
//     str.trim();
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str.at(i) === " "){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countWords(str));
const countWords = (str) => {
    str = str.trim();
    if(str.length === 0) return 0;
    return str.split(" ").length;
}
console.log(countWords(str));