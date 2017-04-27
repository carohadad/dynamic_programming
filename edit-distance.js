/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // create empty matrix
  matrix = Array(word2.length + 1);

  for (var i =0; i<matrix.length; i++) {
    matrix[i] = Array(word1.length + 1);
  }


  // intialize first row
  for(var j=0; j<word1.length+1; j++) {
    matrix[0][j] = j;
  }

  // initialize firs column
  for(var i=0;i<word2.length+1; i++) {
    matrix[i][0] = i;
  }

  for(var col=1; col<word2.length+1; col++) {
    for (var row=1; row<word1.length+1; row++) {
      var minVal = Math.min(matrix[col][row-1], matrix[col-1][row], matrix[col-1][row-1])
      if (word1[row-1] == word2[col-1]) {
        matrix[col][row] = matrix[col-1][row-1];
      } else {
        matrix[col][row] = minVal + 1;
      }
    }
  }

  return matrix[word2.length][word1.length]

};


console.log(minDistance("CA", "RA") + " should be equal to 1");
console.log(minDistance("CAR", "RAT") + " should be equal to 2");
console.log(minDistance("CA", "RAT") + " should be equal to 2");
console.log(minDistance("HORSE", "ROS") + " should be equal to 3");
console.log(minDistance("zoologicoarchaeologist","zoogeologist") + " should be equal to 10");
