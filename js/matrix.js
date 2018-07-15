function matrixMultiply(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
var m1 = [[3,2],[5,6]]
var m2 = [[7,9],[3,1]]
var multiplyResult = matrixMultiply(m1, m2)
console.table(multiplyResult)