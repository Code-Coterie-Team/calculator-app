
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
    const showResult=handelExpression(experssion);
    
    display.value=showResult;
}
function handelExpression(exp) {
    const array = exp.match(/(\d+|\x|\+|\-|\s+|\/)/g).map(item => item.trim())
                    .filter(item => item);

    
    return evaluateExpression(array); 
}

function evaluateExpression(array){
    const len=array.length;
    while(len > 1 ){
        const indexMultiply=array.indexOf('x');
        const indexDivide=array.indexOf('/');
        if(indexMultiply !== -1 &&(indexDivide === -1|| indexMultiply<indexDivide)){
            const leftOperand = Number(array[indexMultiply- 1]);
            const rightOperand = Number(array[indexMultiply + 1]);
            const result= leftOperand * rightOperand;
            
            array.splice(indexMultiply-1,3,result);
            continue;
        }
        if (indexDivide !== -1){
            const leftOperand = Number(array[indexDivide- 1]);
            const rightOperand = Number(array[indexDivide + 1]);
            const result=leftOperand/rightOperand;
            array.splice(indexDivide-1,3,result);
            
            continue;
        }
        const indexAdd=array.indexOf('+');
        if(indexAdd !== -1){
            const leftOperand = Number(array[indexAdd- 1]);
            const rightOperand = Number(array[indexAdd + 1]);
            const result = leftOperand + rightOperand;
            
            array.splice(indexAdd-1,3,result);
            console.log(result);
            continue;
        }
        const indexSub=array.indexOf('-');
        if(indexSub !== -1){
            const leftOperand = Number(array[indexSub- 1]);
            const rightOperand = Number(array[indexSub + 1]);
            const result=leftOperand-rightOperand;
            array.splice(indexSub-1,3,result);
            
            continue;
        }
        console.log(array[0])
        return array[0];
        
    }
}