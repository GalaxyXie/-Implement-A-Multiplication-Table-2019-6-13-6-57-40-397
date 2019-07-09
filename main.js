function isEndBiggerThanStart (start, end) {
    return start<=end;
}
function isNumberInRange (start, end) {
    var flag=false;
    if(start>=1&&start<=1000&&end>=1&&end<=1000)
    {
        flag=true;
    }
    return flag;
}
function createMultiplyEquation (x, y) {
    var equation=x+"*"+y+"="+x*y;
    console.log(equation);
    return equation;
}
function getMultipleTable (start, end) {
    var isMulitiplierRight=false;
    if (isEndBiggerThanStart(start,end)&&isNumberInRange (start, end))
    {
        isMulitiplierRight=true;
    } else{
        return null;
    }
    var result="";
    for (var i=start;i<=end;i++){
        for (var j=start;j<=i;j++){
            result+=createMultiplyEquation (j, i)+" ";
        }
        result+='\n';
    }

    return result;
}
module.exports = {isEndBiggerThanStart,isNumberInRange,createMultiplyEquation,getMultipleTable};