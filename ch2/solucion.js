
let funcion = (num)=>{
    let string = num.toString();
    let numZeros = 5 - string.length;
    let newString = '';
    console.log("numero de ceros");
    console.log(numZeros);
    
    
    for(let i=0;i<numZeros;i++){
        newString=newString+'0';
        console.log(newString);
        if(i==Number(num)){
            newString = newString+num.toString();
            return newString;
        }
    }
}



funcion(2);