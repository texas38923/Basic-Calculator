let inputEle=document.querySelector('.inputBox');
let buttonsEle=document.querySelectorAll('button');

let output='';

let arr=Array.from(buttonsEle);
arr.forEach( button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            output=eval(output);
            inputEle.value=output;
        }

        else if(e.target.innerHTML==='AC'){
            output='';
            inputEle.value=output;
        }

        else if(e.target.innerHTML==='DEL'){
            output=output.substring(0,output.length-1);
            inputEle.value=output
        }

        else if(e.target.innerHTML==='x'){
            output+='*';
            inputEle.value=output;
        }

        else{
            output+=e.target.innerHTML;
            inputEle.value=output;  
        }
    })
})