// let nums = [2,4,5,6,8];
// let target = 11;

// const twoSum = (nums , target) => {
//     for(let i = 0; i < nums.length-1; i++){
//         for(let j = 0; j < nums.length; j++){
//             console.log(`i = ${nums[i]} j = ${nums[j]} = ${nums[i] + nums[j]}`);
//             if(nums[i] + nums[j] == target){
//                 return [i,j];
//             }
//         }
//     }
//     return [-1,-1];
// }

// let ans = twoSum(nums , target);
// console.log("Ans",ans);

let nums = [2,3,4,7,11];
let target = 15;
const twoSum = (nums, target) => {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)){
            return [complement, i];
        }
        map.set(nums[i],i);
    }
} 
