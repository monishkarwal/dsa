/**
 
 n = 3
 Output:
 1
 2 2 
 3 3 3
 
 */

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += `${i + 1} `;
    }
    console.log(row);
  }
};

pattern(5)