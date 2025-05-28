// let nums = [1,1,2];
// const removeDuplicate = (nums) => {
//     let map = new Map();
//     let idx = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(!map.has(nums[i])){
//             map.set(nums[i],i);
//             nums[idx++] = nums[i];
//         }
//         nums[++idx] = "_";
//     }
//     console.log(nums);
//     return map.size;
// }

// let ans = removeDuplicate(nums);
// console.log(ans);

// 2nd method 
// let nums = [2,3,4,4,5,5,5,8];
// const removeDuplicate = (nums) => {
//     let l = 0;
//     let h = l + 1;
//     let lastDup;
//     while(h < nums.length){
//         if(nums[l] === nums[h]){
//             nums[h] = "_";
//             lastDup = nums[l];
//         }
//         if(lastDup === nums[l]){
//             nums[l] = "_";
//         }
//         l++;
//         h++;
//     }
//     for(let i = 0; i < nums.length; i++){
//         console.log(nums[i]);
//     }
//     return nums;
// }

// let nums = [2,3,4,4,5,5,5,8];
// const removeDuplicate = (nums) => {
//     let idx = 0;
//     let result = [];
//     for(let i = 0; i < nums.length; i++){
//         if
//     }
//     for(let i = 0; i < nums.length; i++){
//         console.log(nums[i]);
//     }
//     return nums;
// }
// let ans = removeDuplicate(nums);
// console.log(ans);