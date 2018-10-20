var json = {
    0: { name: 'Jon', lastname: 'Doe' },
    1: { name: 'Linus', lastname: 'Torlvalds' },
    2: { name: 'Mark', lastname: 'Zuckerberg' }
};

function convertJsontoArray(json) {
    var array;
    json.map((variables) => {
        array.push(variables);
    });
    return array;
}