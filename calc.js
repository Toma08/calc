/*let str='2+6-9*6-1'
console.log(str)
console.log(eval(str))*/

let boxArr=document.querySelectorAll('.box')
//feliratkozunk a clickre:
boxArr.forEach(obj=>obj.addEventListener('click',myCalc))

function myCalc(){
    console.log(this.innerHTML)
    let x=this.innerHTML
    let boxR=document.querySelector('.boxResult')
    if(x=='C'){
        boxR.innerHTML=""
    }else if(x=="="){
        boxR.innerHTML=eval(boxR.innerHTML)
    }else{
        boxR.innerHTML+=x
    }
}


