
const arr=[];
  function muliples(num) {
    for (let i=1; i<=num; i++) {
      if(i%2==0 && i%3==0 && i%5==0){
      let i=("yu-gi-oh"); arr.push(i)
      }
        else if (i%2==0 && i%3==0) {
        let i=("yu-gi"); arr.push(i)
        }
         else if (i%2==0 && i%5==0) {
         let i=("yu-oh"); arr.push(i)
         }
          else if (i%3==0 && i%5==0) {
          let i=("gi-oh"); arr.push(i)
          }
           else if (i%2==0) {
           let i="yu"; arr.push(i)
           }
            else if (i%3==0) {
            let i="gi"; arr.push(i)
            }
              else if (i%5==0) {
              let i="oh"; arr.push(i)
            }
              else{
              arr.push(i)
              }
    }
  }
console.log(arr);
muliples(10);
muliples(100);


