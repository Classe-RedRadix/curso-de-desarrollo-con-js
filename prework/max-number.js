// Crea una función que devuelva el número máximo
// No utilizes Math.Max ni similares

function max(nums) {
    if (nums.length === 2) {
        if (nums[0] >= nums[1]) return nums[0];
        else return nums[1];
    }

    

    return max()
}

max([2, 4, 6, 8]); // 8