var matrix =[
   [4, 3, 2, 4],
  [9, 1, 5, 6],
     [2, 7, 9, 8], 
     [8, 5, 2, 0], ];
 
 function sumUpDiagonals(matrix) {
   var sum  = 0
     matrixLen = matrix.length;
 
   for (var i = 0; i < matrixLen; i++) {
     sum += matrix[i][i];
     
   }
   return sum
 }
 
 document.write(sumUpDiagonals(matrix))