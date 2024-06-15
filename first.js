let string="";
let evalue;
let display=document.querySelector("#value");

let val7=document.querySelector("#a7");
val7.onclick = () => {
    string=string+"7";
    display.innerText=string;
    
}
let val8=document.querySelector("#a8");
val8.onclick = () => {
    string=string+"8";
    display.innerText=string;
    
}
let val9=document.querySelector("#a9");
val9.onclick = () => {
    string=string+"9";
    display.innerText=string;
    
}
let valsum=document.querySelector("#asum");
valsum.onclick = () => {
    string=string+"+";
    display.innerText=string;

}
let val4=document.querySelector("#a4");
val4.onclick = () => {
    string=string+"4";
    display.innerText=string;
    
}
let val5=document.querySelector("#a5");
val5.onclick = () => {
    string=string+"5";
    display.innerText=string;
    
}
let val6=document.querySelector("#a6");
val6.onclick = () => {
    string=string+"6";
    display.innerText=string;
    
}
let valsub=document.querySelector("#asub");
valsub.onclick = () => {
    string=string+"-";
    display.innerText=string;

}
let val1=document.querySelector("#a1");
val1.onclick = () => {
    string=string+"1";
    display.innerText=string;
    
}
let val2=document.querySelector("#a2");
val2.onclick = () => {
    string=string+"2";
    display.innerText=string;
    
}
let val3=document.querySelector("#a3");
val3.onclick = () => {
    string=string+"3";
    display.innerText=string;
    
}
let valmul=document.querySelector("#amul");
valmul.onclick = () => {
    string=string+"*";
    display.innerText=string;

}
let valdel=document.querySelector("#adel");
valdel.onclick = () => {
    string=" ";
    display.innerText=string;
    
}
let val0=document.querySelector("#a0");
val0.onclick = () => {
    string=string+"0";
    display.innerText=string;
    
}
let valdot=document.querySelector("#adot");
valdot.onclick = () => {
    string=string+".";
    display.innerText=string;
    
}
let valdiv=document.querySelector("#adiv");
valdiv.onclick = () => {
    string=string+"/";
    display.innerText=string;

}

let valzero=document.querySelector("#azero");
valzero.onclick = () => {
    string=string+"00";
    display.innerText=string;

}

let valleft=document.querySelector("#aleft");
valleft.onclick = () => {
    string=string+"(";
    display.innerText=string;

}
let valright=document.querySelector("#aright");
valright.onclick = () => {
    string=string+")";
    display.innerText=string;

}
let vale=document.querySelector("#ae");
vale.onclick = () => {
    evalue =eval(string);
    display.innerText= evalue;
    string=evalue;
    
}

