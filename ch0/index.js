const obj = {
    0: { name: 'Jon', lastname: 'Doe' },
    1: { name: 'Linus', lastname: 'Torlvalds' },
    2: { name: 'Mark', lastname: 'Zuckerberg' }
}

function convertObjToArray(obj) {
    return Object.values(obj);
}

console.log(convertObjToArray(obj));