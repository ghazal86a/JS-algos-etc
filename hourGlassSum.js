let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

    //0//1//2//3//4//5
//0  [1, 1, 1, 0, 0, 0]
//1  [0, 1, 0, 0, 0, 0]
//2  [1, 1, 1, 0, 0, 0]
//3  [0, 0, 2, 4, 4, 0]
//4  [0, 0, 0, 2, 0, 0]
//5  [0, 0, 1, 2, 4, 0]

function hourglassSum(data) {
    let sum = 0;
    var max = false;
    for (let i=0; i<4;i++){
        for (let j=0; j<4; j++){
            sum = data[i][j] + data[i][j + 1] + data[i][j + 2] + data[i + 1][j + 1] + data[i + 2][j] + data[i + 2][j + 1] + data[i +2][j + 2];

            if (max === false | sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);
    return max

}

hourglassSum(arr)