
// 1 - Biggie Size

function biggie(arr) {

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(biggie([-2,1,-2,8]));

// 2 - Print Low, Return High

function printReturn(arr) {

    var max = arr[0];
    var min = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(printReturn([1,2,3,4]));

// 3 - Print One, Return Another

function printReturn(arr) {

    console.log(arr[arr.length-2]);

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}
console.log(printReturn([1,2,3,4]));



// 4 - Double Vision

function double(arr) {

    var origArr = [];

    for(var i = 0; i < arr.length; i++) {
        origArr.push(arr[i]);
        arr[i] = arr[i] * 2;
    }

    console.log(origArr);
    return arr;
}
console.log(double([1,2,3]));


// 5 - Count Positives

function countPositives(arr) {

    var posNums = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            posNums++;
        }
    }
    arr[arr.length-1] = posNums;
    return arr;
}
console.log(countPositives([1,1,1,0]));


// 6 - Evens and Odds

function evenOdd(arr) {

    var oddCount = 0;
    var evenCount = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            evenCount = 0;
            oddCount++;
            if (oddCount == 3) {
                console.log("That's odd!");
            }

        } else if (arr[i] % 2 == 0) {
            oddCount = 0;
            evenCount++;
            if (evenCount == 3) {
                console.log("Even more so!");
            }
        }
    }
}

evenOdd([1,1,1,2,2,2]);


// 7 - Increment the Seconds

function incrementSec(arr) {

    for(var i = 0; i < arr.length; i++) {
        if(i % 2 != 0) {
            arr[i]++;
        }
    }
    console.log(arr);
    return(arr);
}
incrementSec([1,2,3,4,5]);

// 8 - Previous Lengths

function prevLen(arr) {

    for(var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
        console.log(arr);
    }
    return arr;
}

prevLen(['hi', 'hello']);
prevLen(['hello', 'dojo', 'awesome']);

// 9 - Add Seven

function addSeven(arr) {
    
    var newArr = [];

    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }

    return newArr;
}
console.log(addSeven([1,2,3,4,5]));

// 10 - Reverse Array

function revArr(arr) {

    arr.reverse();
    return arr;
}
console.log(revArr([1,2,3,4,5]));

// 11 - Outlook: Negative

function outNeg(arr) {

    var newArr = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] <= 0) {
            newArr.push(arr[i]);
        }
        else if(arr[i] > 0) {
            newArr.push(arr[i] * -1);
        }
    }
    return newArr;
}
console.log(outNeg([-1,0,1,2,3]));

// 12 - Always Hungry

function hungArr(arr) {
    
    var count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if(count == 0) {
        console.log("I'm hungry");
    }
}
hungArr(["food"]);
hungArr([0,1,2]);

// 13 - Swap Toward the Center

function swap(arr) {

    var temp1 = arr[0];
    var temp2 = arr[2];

    arr[0] = arr[arr.length - 1];
    arr[2] = arr[arr.length - 3];
    arr[arr.length -1] = temp1;
    arr[arr.length - 3] = temp2;
    return arr;
}
console.log(swap([1,2,3,4,5,6]));

// 14 - Scale the Array

function scaleArr(arr) {

    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

var num = 3;
console.log(scaleArr([1,2,3], 3));

