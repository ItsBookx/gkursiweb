let developement = true;

function defs(developement) {
    let s=document.styleSheets;
    if(developement==true){
        console.log('Developer mode detected, enabling debugger.css');
        s[0].disabled=false;
    }
    else {
        console.log('User mode detected, disabling debugger.css');
        s[0].disabled=true;
    }
};



defs(developement);
console.info("Debugger loaded"); // Notify that func defs have loaded