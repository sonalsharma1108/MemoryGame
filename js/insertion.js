function insertionSort (items) {
for (var i = 0; i < items.length; i++) {
    let value = items[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
    items[j + 1] = items[j]
    }
    items[j + 1] = value
}

return list
}

const list = [8,6,3,5,4,9,7,1,2,10]
console.log(insertionSort(list))