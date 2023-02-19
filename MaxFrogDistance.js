function maxFrogDistance(startingBlock, blocks) {

    const total = blocks.length;
    let left = startingBlock;
    let right = startingBlock;
    let leftSide = false;
    let rightSide = false;

    while (!leftSide || !rightSide) {
        if (right < total - 1 && canJump(blocks[right], blocks[right + 1])) {
            right++;
            } else {
            rightSide = true;
            }
        if (left > 0 && canJump(blocks[left], blocks[left - 1])) {
            left--;
            } else {
            leftSide = true;
            }
    }

    return right - left + 1;
}

function canJump(block1, block2) {
    return block2 >= block1;
}

function solution(blocks) {

    if (blocks.length === 1) {
    return 1;
    }

    let max = 0;
    for (let i = 0; i < blocks.length; i++) {
        const distance = maxFrogDistance(i, blocks);
        max = distance > max ? distance : max;
        if (max === blocks.length) {
        break;
    }
    }
    return max;
}

// Example usage
const blocks1 = [2, 6, 8, 5];
console.log(solution(blocks1)); // should output 3

const blocks2 = [1, 5, 5, 2, 6];
console.log(solution(blocks2)); // should output 4
