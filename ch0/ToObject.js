let obj = {
    0: { name: 'Jon', lastname: 'Doe' },
    1: { name: 'Linus', lastname: 'Torlvalds' },
    2: { name: 'Mark', lastname: 'Zuckerberg' }
  }

console.log(toObjectArray(obj));

function toObjectArray(obj){
    var transforme=[];
    array.forEach(obj => {
        transforme.push(obj);
    });
    return transforme;
}

/*# Turn an object of objects into an array of objects

Given an object of objects
 ```
 let obj = {
   0: { name: 'Jon', lastname: 'Doe' },
   1: { name: 'Linus', lastname: 'Torlvalds' },
   2: { name: 'Mark', lastname: 'Zuckerberg' }
 }
 ```

 You have to write a function that receives an object like above and turns it in an
 array of object like below:

 let obj = [
   { name: 'Jon', lastname: 'Doe' },
   { name: 'Linus', lastname: 'Torlvalds' },
   { name: 'Mark', lastname: 'Zuckerberg' }
 ]
*/