function snapCrackle(maxValue) {
    let result = '';

    for (let i = 1; i <= maxValue; i++) {
        
        if (i % 10 === 0) {
            result += ' Crackle '
        } else if (i % 5 === 0) {
            result += 'SnapCrackle'
        } else if (i % 2 !== 0) {
            result += 'Snap'
        } else {
            result += ' ' + i + ' '
        }
        
        
    }
        if (result[result.length - 1] === ' ') {
            result = result.slice(0, result.length-1) 
        }
        
        return result.split(' ').join(', ')

}


function primeNum(num) {

    for (let i = 2; i < num; i++) {
        
        if (num % i === 0) {
            return false
            
        }
    }
    return num > 1;
}

function snapCracklePrime(maxValue) {
    let result = '';

    for (let i = 1; i <= maxValue; i++) {

        if (i % 10 === 0) {
            result += ' Crackle '
        } else if (i % 5 === 0) {
            result += 'SnapCrackle'
            if (primeNum(i) === true) {
                result += 'Prime' 
            }
        } else if (i % 2 !== 0) {
            result += 'Snap'
            if (primeNum(i) === true) {
                result += 'Prime' 
            }
        } else if ( i === 2) {
            result += ' Prime '
        }  
        
        else {
            result += ' ' + i + ' '
        }
        
        
    }
    if (result[result.length - 1] === ' ') {
        result = result.slice(0, result.length-1) 
    }
    
    return result.split(' ').join(', ')
}