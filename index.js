let firstvalue ="";
let secondvalue="";
let opt=""
let add =document.getElementById('display')

const Value =(num)=>{
    if(opt.length<=0){
        firstvalue+=num
        add.value=firstvalue
    }else{
        secondvalue+=num
        add.value+=num
    }
    console.log(firstvalue,secondvalue,opt)
}


result =()=>{

}


const operator=(A)=>{
opt=A
add.value+=opt
}