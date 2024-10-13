
const showVar=document.getElementById('result');

function getValue(val){
    showVar.value+=val;
    
}

function clr(){
    showVar.value='';

}
function del(){
    const delet=showVar.value.slice(0,-1);
    showVar.value=delet;

    
}
function calculate(){
    
    const experssion=showVar.value;
    const showResult=handelExpression(experssion);
    
    showVar.value=showResult;
    
}
function handelExpression(exp) {
    const array = exp.replace(/\s/g,'').match(/(\d+(\.\d+)?|\x|\+|\-|\+|\/)/g).map(item => item.trim());
    console.log(array);
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
            console.log(array);
            continue;
        }
        if (indexDivide !== -1){
            const leftOperand = Number(array[indexDivide- 1]);
            const rightOperand = Number(array[indexDivide + 1]);
            const result=leftOperand/rightOperand;
            array.splice(indexDivide-1,3,result);
            console.log(array);
            continue;
        }

        const indexAdd=array.indexOf('+');
        const indexSub=array.indexOf('-');

        if((indexAdd<indexSub ||indexSub===-1 ) && indexAdd !== -1 ){
            console.log('s');
            const leftOperand = Number(array[indexAdd- 1]);
            const rightOperand = Number(array[indexAdd + 1]);
            const result = leftOperand + rightOperand;
            
            array.splice(indexAdd-1,3,result);
            console.log(array);
            continue;
        }
        
        if(indexSub !== -1 ){
            const leftOperand = Number(array[indexSub- 1]);
            const rightOperand = Number(array[indexSub + 1]);
            const result=leftOperand-rightOperand;
            array.splice(indexSub-1,3,result);
            console.log(array);
            continue;
        }
        return array[0];
        
    }
}