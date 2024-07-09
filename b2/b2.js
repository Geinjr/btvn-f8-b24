var nums1 = [1, 2];
var nums2 = [3, 4, 5];

var mergedArray = nums1.concat(nums2);
var lengthOfMergedArray = mergedArray.length;
let result;

if (lengthOfMergedArray % 2 === 0) {
    result =
        (mergedArray[lengthOfMergedArray / 2 - 1] +
            mergedArray[lengthOfMergedArray / 2]) /
        2;
} else {
    result = mergedArray[Math.floor(lengthOfMergedArray / 2)];
}

console.log(result);
