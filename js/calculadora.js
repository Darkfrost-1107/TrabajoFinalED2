function cut(i){
    return i.substr(0, i.length - 1);
}

function addHistory(op,res){
    document.getElementById('Historial').innerHTML +=
    '<p class = "operation">' + op + '</p>' +
    '<p class = "result">' + res + '</p>';
}

function clearHistory(){
    document.getElementById('Historial').innerHTML = '';
}

function Solve(com, print){
    var text = com.replace(/ /g,"");
    alert(text);
    var text = com.replace(/%/g,"/100");

    let op, op1, op2, res, pattern = /(\(([0-9\.\+\-\*\/]+)?\))/;
    while(pattern.test(text)){
        op = pattern.exec(text);
            alert(op);
            text = text.replace(op[1],Solve(op[2]));
            alert("finito");
            alert(text);
            alert("continue");
        
    }
    for(pattern = /(^|\+|\-|\/|\*)(-?[0-9\.]+)(\/)(-?[0-9\.]+)($|\+|\-|\/|\*)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\+|\-|\*)(-?[0-9\.]+)(\*)(-?[0-9\.]+)($|\+|\-|\*)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\+|\-)(-?[0-9\.]+)(\-)(-?[0-9\.]+)($|\+|\-)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    for(pattern = /(^|\+)(-?[0-9\.]+)(\+)(-?[0-9\.]+)($|\+)/; pattern.test(text);){
        op = pattern.exec(text);
        alert(op);
        op1 = op[2];
        op2 = op[4];
        res = Operate(op1,op[3],op2);
        text = text.replace(op1 + op[3] + op2,res);
    }
    text = ChompPlus(text);
    
    alert(text + ": fin");
    let pat = /^-?[0-9\. ]+$/g;
    if(pat.test(text)){
        if(print){ addHistory(com,text); }
        return text;
    }
    else
        return "ERR";


   
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

/*
function Solve(com){
    var text = com.replace(/ /g,"");
    alert(text);
    var text = com.replace(/%/g,"/100");
    //sum [[\(][][\)]]
    let op, op1, op2, pattern = /^([0-9\.\+\-\*\/\(\)]+)(\+|\-)([0-9\.\+\-\*\/\(\)]+)$/;
    if(pattern.test(text)){
        op = pattern.exec(text);
        op1 = op[1];
        op2 = op[3];
        return Operate(Solve(op1),op[2],Solve(op2))
    }
    //multi
    pattern = /^([0-9\.\+\-\*\/\(\)]+)(\*|\/)([0-9\.\+\-\*\/\(\)]+)$/;
    if(pattern.test(text)){
        op = pattern.exec(text);
        op1 = op[1];
        op2 = op[3];
        return Operate(Solve(op1),op[2],Solve(op2))
    }
    //esp
    pattern = /^(\(([0-9\.\+\-\*\/\(\)]+)\))$/;
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
*/