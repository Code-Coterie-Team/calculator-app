const showVar=document.getElementById('result');


function getValue(val){
    document.getElementById('result').value+=val;

}

function clr(){
   showVar.value = "" ;

}
function del(){
    // showVar.substring(0,showVar.length-1);
}
function calculate(){
    const display=document.getElementById('result');
    const experssion=display.value;
    try{
        const result=handelExpression(experssion);
        display.value=result;
    } catch(erorr){
        display.value='Error'
    };
    
}
function  handelExpression(exp){
    const numbers=exp.split(/[\+\-\x\/][-]/).map(Number);
    const operators=exp.split(/[0-9]+/).filter(Boolean);
    const firstResult=operators.reduce((acc,operator,index)=>{
        if(operator==="x"){
            
            return acc * numbers[index+1];
            
        }  else if(operator==="/") {
            return acc/numbers[index+1]
        }
        else{
            return acc;
        }
    },numbers[0]);

    const finalResult=operators.reduce((acc,operator,index)=>{
        if(operator==="+"){
            return acc + numbers[index+1];
            
        } else if (operator==="-"){
            return acc - numbers[index-1];
        }
        else{
            return acc
        };
        
    }, firstResult);
    console.log(finalResult);
    return finalResult;
   
}
