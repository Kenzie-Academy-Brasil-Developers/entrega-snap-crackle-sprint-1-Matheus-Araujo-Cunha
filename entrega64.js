function snapCrackle (maxValue){
    let value = '';
    for (let i = 1; i <= maxValue; i ++){
        if (i % 5 === 0 && i % 2 !== 0) {
            value += ' SnapCrackle, '
        } else if (i % 5 === 0) {
            value += 'Crackle, '
        } else if (i % 2 !== 0) {
            value += ' Snap, '
        }
        else  value  +=    i + ',' 
    }
    return value
}

console.log(snapCrackle(20))

// function snapCracklePrime(maxValue){
//     let valuePrime = ''
//     for (let i = 1; i <= maxValue; i++){
//         if (i % 2 !== 0 && i % 5 === 0 && (( i / 1 ) === i && (i / i) === 1 ) ) {
//             valuePrime += ' SnapCracklePrime,'
            
//         } else if (i % 2 !== 0 && i % 5 === 0) {
//             valuePrime += ' SnapCrackle'
            
//         } 
//         else if (i % 2 !== 0 && i / 1 / i === i) {
            
//         }
//         else valuePrime += i + ','
//     } 
//     return valuePrime
// }
// console.log(snapCracklePrime(15))