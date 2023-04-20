

function oddEven(n){
    if(n%2 == 0){
        console.log(" I am happy")
    }
    else if(n%2 == 1){
         throw new Error("I am sad")
    }

}


try{
   oddEven(11)
}

catch(err){
    console.log("Ohh you entered a wrong number")
}