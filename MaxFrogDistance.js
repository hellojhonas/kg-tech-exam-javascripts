function max_frog_distance(blocks) {
    const n = blocks.length;
    if (n < 2) return 0; // edge case with only one block
  
    // Find optimal starting block for the second frog
    const right_max = new Array(n);
    let max_height = -Infinity;
    for (let i = n - 1; i >= 0; i--) {
      if (blocks[i] >= max_height) {
        max_height = blocks[i];
        right_max[i] = i;
      } else {
        right_max[i] = right_max[i + 1];
      }
    }
  
    // Find optimal starting block for the first frog
    const left_max = new Array(n);
    let min_height = Infinity;
    for (let i = 0; i < n; i++) {
      if (blocks[i] <= min_height) {
        min_height = blocks[i];
        left_max[i] = i;
      } else {
        left_max[i] = left_max[i - 1];
      }
    }
  
    // Calculate maximum distance between optimal starting blocks
    let max_distance = -Infinity;
    for (let i = 0; i < n - 1; i++) {
      const distance = Math.max(right_max[i + 1] - i, i - left_max[i]);
      max_distance = Math.max(max_distance, distance);
    }
    return max_distance;
}

// Test case 1: Normal case
const blocks1 = [1, 3, 5, 4, 2, 3, 4, 5];
const expected1 = 6;
const result1 = max_frog_distance(blocks1);
console.log(result1); // should print 6

// Test case 2: Case with only one block
const blocks2 = [10];
const expected2 = 0;
const result2 = max_frog_distance(blocks2);
console.log(result2); // should print 0

// Additional Test Cases
// // Test case 3: Case with two blocks
// const blocks3 = [3, 5];
// const expected3 = 1;
// const result3 = max_frog_distance(blocks3);
// console.log(result3); // should print 1

// // Test case 4: Case with blocks in decreasing order
// const blocks4 = [5, 4, 3, 2, 1];
// const expected4 = 0;
// const result4 = max_frog_distance(blocks4);
// console.log(result4); // should print 0

// // Test case 5: Case with blocks in increasing order
// const blocks5 = [1, 2, 3, 4, 5];
// const expected5 = 4;
// const result5 = max_frog_distance(blocks5);
// console.log(result5); // should print 4

// // Test case 6: Case with blocks of the same height
// const blocks6 = [1, 1, 1, 1, 1, 1, 1];
// const expected6 = 3;
// const result6 = max_frog_distance(blocks6);
// console.log(result6); // should print 3

// // Test case 7: Case with negative block heights
// const blocks7 = [-1, -3, -5, -4, -2, -3, -4, -5];
// const expected7 = 6;
// const result7 = max_frog_distance(blocks7);
// console.log(result7); // should print 6

// // Test case 8: Case with large block heights
// const blocks8 = [1000, 500, 200, 800, 700, 600, 900, 100, 300, 400];
// const expected8 = 8;
// const result8 = max_frog_distance(blocks8);
// console.log(result8); // should print 8
