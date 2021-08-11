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
        result = result.split(' ').join(', ')

        return result
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
    
    return result.split(' ').join(', ')
}