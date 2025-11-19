/**
 
 n = 3
 Output:
 1 
 1 2 
 1 2 3
 
 */

 const pattern = (n) => {
    for(let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row+=`${j} `
        }
        console.log(row)
    }
 }

 pattern(5)