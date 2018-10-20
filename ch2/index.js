let clearZero = (input) => {
    if (input.length > 5) {
        return false;
    }
    const zeros = 5 - input.length;
    let zString = '';
    for (let i = 0; i < zeros; i++) {zString+= '0'}
    return `${zString}${input}`;
};