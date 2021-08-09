function snapCrackle(maxValue) {
    let result = '';

    for (let i = 1; i <= maxValue; i++) {
        
        if (i % 10 === 0) {
            result += 'Crackle'
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

