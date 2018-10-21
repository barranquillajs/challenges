'use strict';

let obj = {
    name: 'Jon',
    lastname: 'Doe'
};

let extra = {
    address: 'street 45 with nowell rose',
    phone: '345687829',
    nacionality: 'american',
    job: 'developer',
    hobby: 'programming',
    age: '45'
}

const addKeys = (obj) => ({ ...obj, ...extra });

console.log(addKeys(obj));