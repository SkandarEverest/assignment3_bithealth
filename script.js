/////////// Nomor 1 ///////////
console.log('Nomor 1');
function isArimethicProgression (array1) {
    let initialValue = array1.shift();
    let difference = array1[0] - initialValue;
    
    let jawaban =  array1.reduce((accumulator, currentValue) => {
        let currentDifference = currentValue - accumulator.previousValue;
        let isArimethicProgression = accumulator.isArimethic;
        if (difference !== currentDifference) {
            isArimethicProgression = false;
        };
        return {previousValue:currentValue, isArimethic: isArimethicProgression};
    },{previousValue:initialValue, isArimethic:true}, );
    
    return(jawaban.isArimethic); 
}

console.log(isArimethicProgression([1,2,3,4,5,6]));
console.log(isArimethicProgression([2,4,6,12,24]));
console.log(isArimethicProgression([2,4,6,8]));
console.log(isArimethicProgression([2,6,18,54]));
console.log(isArimethicProgression([1,2,3,4,7]));
/////////// Nomor 2 ///////////
console.log('Nomor 2');
function threeStepsAB(text){
    const array1 = text.split("");

    let jawaban =  array1.reduce((accumulator, currentValue, currentIndex) => {
        let isFoundA = accumulator.isFoundA;
        let currentIndexA = accumulator.currentIndexA;
        let isFoundB = accumulator.isFoundB;
        let currentIndexB = accumulator.currentIndexB;
        let isAB = accumulator.isAB;
        if (currentValue === "a") {
            isFoundA = true;
            currentIndexA = currentIndex;
        }
        if (currentValue === "b") {
            isFoundB = true;
            currentIndexB = currentIndex;
        }
        if (isFoundA === true && currentValue === "b"){
            if (currentIndex - currentIndexA === 4){
                isAB = true;
            }
        }
        if (isFoundB === true && currentValue === "a"){
            if (currentIndex - currentIndexB === 4){
                isAB = true;
            }
        }
        return {currentIndexA: currentIndexA, isFoundA: isFoundA, currentIndexB: currentIndexB, isFoundB: isFoundB, isAB: isAB};
    },{currentIndexA: 0, isFoundA: false, currentIndexB: 0, isFoundB: false, isAB: false},);

    return(jawaban.isAB);
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));
/////////// Nomor 3 ///////////
console.log('Nomor 3');
function sumArray(arr, targetSum) {
    const result = [];

    // Sort array to simplify the process
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === targetSum) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}

console.log(sumArray([2,1,4,3],5));
console.log(sumArray([1,8,10,3],11));
/////////// Nomor 4 ///////////
console.log('Nomor 4');
function arrSum(arr) {
    let maxSum = Number.NEGATIVE_INFINITY;  // Inisialisasi dengan nilai negatif tak terhingga
    let currentSum = 0;
    let start = 0;
    let end = 0;
    let currentStart = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = currentStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            currentStart = i + 1;
        }
    }

    return [arr.slice(start, end + 1), maxSum];
}

// Contoh penggunaan
const inputArray = [-2, -3, 4, -1, -2, 1, 5, -3];

const result = arrSum(inputArray);
console.log("Subarray yang akan memberikan jumlah terbesar:", result[0]);
console.log("Sum dari subarray:", result[1]);
console.log(result);