function Solve(com){
    var text = com.replace(/ /g,"");
    alert(text);
    //sum
    let op, op1, op2, pattern = /^([0-9\.\+\-\*\/\(\)]+)(\+|\-)([0-9\.\+\-\*\/\(\)]+)$/;
    if(pattern.test(text)){
        op = pattern.exec(text);
        op1 = op[1];
        op2 = op[3];
        return Operate(Solve(op1),op[2],Solve(op2))
    }
    //multi
    let pattern = /^([0-9\.\+\-\*\/\(\)]+)(\*|\/)([0-9\.\+\-\*\/\(\)]+)$/;
    if(pattern.test(text)){
        op = pattern.exec(text);
        op1 = op[1];
        op2 = op[3];
        return Operate(Solve(op1),op[2],Solve(op2))
    }
    //esp
    let pattern = /^(\(([0-9\.\+\-\*\/\(\)]+)\))$/;
    if(pattern.test(text)){
        op = pattern.exec(text);
        return Solve(op[2]);
    }
    
    alert(text + ": fin");
    let pat = /^-?[0-9\. ]+$/g;
    if(pat.test(text)){
        return text;
    }
    else
        return "ERR";
}

function Operate(a, sign, b){
    alert(a + ";" + sign + ";" + b);
    if(a == null && b == null){
        return 0;
    }
    switch(sign){
        case "":
            return parseFloat(b);
        case "+":
            return parseFloat(a) + parseFloat(b);
        case "-":
            return parseFloat(a) - parseFloat(b);
        case "*":
            return +a * +b;
        case "/":
            return +a / +b;
        case "%":
            return +a * 0.01;
        default:
            return +a*10 + sign;
    }
}

function ChompPlus(x){
    return x.replace(/^\+/i, "");
}