let firstvalue ="";
let secondvalue="";
let opt=""
let output=0;
let add =document.getElementById('display')

const Value =(num)=>{
    if(opt.length<=0){
        firstvalue+=num
        add.value=firstvalue
    }else{
        secondvalue+=num
        add.value+=num
    }
    console.log(firstvalue,opt,secondvalue)
}


result =()=>{
    if(opt=="+"){
console.log("+")
output=Number(firstvalue)+Number(secondvalue);
    }
    else if( opt=="-"){
        console.log("-")
        output=Number(firstvalue)-Number(secondvalue);

    }
    else if( opt=="*"){
        console.log("*")
        output=Number(firstvalue)*Number(secondvalue);

    }
    else if( opt=="/"){
        console.log("/")
        output=Number(firstvalue)/Number(secondvalue);

    }
    else if( opt=="%"){
        console.log("%")
        output=Number(firstvalue)%Number(secondvalue);

    }
    else{
        console.log("invalid operator")
    }
    add.value=output;


}


const operator=(A)=>{
opt=A
add.value+=opt
}