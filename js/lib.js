for (var i = 1; i <=100; i++){
    var output = "";
    if (getSpecialMessage(i,3)) output = output + "Fizz";
    if (getSpecialMessage(i,5)) output = output + "Buzz";
    if (output === "")
        console.log(i);
    else 
        console.log(output);
}

function getSpecialMessage(iterator, moduloValue){
    if (iterator%moduloValue === 0) return true;
}