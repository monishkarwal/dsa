/**
 
 n = 5
 Output:
 1
 0 1
 0 1 0
 1 0 1 0 
 1 0 1 0 1

 */

const pattern = (n) => {
  let bit = 1;

  for (let i = 0; i < n; i++) {
    let row = "";
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
