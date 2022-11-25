let developement = true;

function defs(developement) {
    if(developement==true){
        console.log('Developer mode detected');
    }
    else {
        console.log('User mode detected');
    }
};



defs(developement);
console.info("Debugger loaded"); // Notify that func defs have loaded