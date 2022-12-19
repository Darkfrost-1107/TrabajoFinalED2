function cut(i){
    return i.substr(0, i.length - 1);
}

function switchSign(){
    ;
}

function Solve(com){
    alert(com);
    let text = com;
    let op, op1, op2, res;
    for(pattern = /^.*(\(([0-9\.\+\-\*\/]+)\)).*$/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        text = text.replace(op[1],Solve(op[2]));
    }
    for(pattern = /(^|\+|\-|\/|\*)(-?[0-9\.]+)(\*)(-?[0-9\.]+)($|\+|\-|\/|\*)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\+|\-|\/)(-?[0-9\.]+)(\/)(-?[0-9\.]+)($|\+|\-|\/)?/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\+|\-)(-?[0-9\.]+)(\+)(-?[0-9\.]+)($|\+|\-)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\-)(-?[0-9\.]+)(\-)(-?[0-9\.]+)($|\-)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    /*
    pattern = /^-?(\d|\.)*$/g;
    if(pattern.test(text))
        return ChompPlus(text);
    else
        return "ERR";
        */
       return ChompPlus(text);


   
}

function Operate(a, sign, b){
    alert(a + ";" + sign + ";" + b);
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