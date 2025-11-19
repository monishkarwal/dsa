/**
 
 n = 4
 Output:
 1
 1 0
 1 0 1
 1 0 1 0
 
 */

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bit = 1;
    for (let j = 0; j <= i; j++) {
      row += `${bit} `;
      if (bit === 0) {
        bit = 1;
      } else {
        bit = 0;
      }
    }
    console.log(row);
  }
};

pattern(5);
