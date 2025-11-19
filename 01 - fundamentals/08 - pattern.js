/**
 
 n = 3
 Output:
 1 2 3
 1 2
 1
 
 */

const pattern = (n) => {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
};

pattern(5);
