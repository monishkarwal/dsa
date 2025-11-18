const findLargest = (arr) => {
    if(arr.length <= 1){
        return arr[0]
    }

    // let largest = arr[0]
    let largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

const arr = [-1, 10, 7, 100, 90]

console.log(findLargest(arr))