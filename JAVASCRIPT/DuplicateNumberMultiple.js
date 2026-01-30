function allDuplicates(nums) {
    const freq = {};
    const duplicates = [];

    for (let num of nums) {
        if (freq[num]) {
            // Only push if it’s the first time we notice the duplicate
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            freq[num] = 1;
        }
    }

    return duplicates;
}

const nums = [1, 3, 4, 2, 5, 3, 2];
console.log(allDuplicates(nums)); // Output: [3, 2]
