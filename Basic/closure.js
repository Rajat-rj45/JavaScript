function x(){
    var a = 7;
    function y(){
        console.log(a);  
    }
    return y;
}

let l=x();  // it have full function y()
console.log(l);  //[Function: y]
l();


/* Uses of closures 
- Module Desing Pattern
-currying 
- Function like once
- maintaning state in async world
- SetTimeouts
-Iterators
- and many more...**/