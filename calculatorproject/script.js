var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
console.log(buttons);
var operand1=0;
var operand2=null;
var operator=null;
var plus=0;
var minuscount=0;
function isoperator(value){
    var val=String(value);
    if(val=='+')
    {
        return true;
    }
    else if(val=='*')
    {
        return true;
    }
    else if(val=='-')
    {
        return true;
    }
    else if(val=='/')
    {
        return true;
    }
    else{
        return false;
    }
}
// display.textContent="akhil"

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        console.log(typeof(value));
        var text = display.textContent.trim();
        console.log(isoperator(value));
        function calculate(){
            operand2 = parseFloat(text);
            if(operand1!=0.0 && operand2==0.0)
            {
                display.textContent="error";
                return;
            }
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
             
            if (result) {
                 
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        if(isoperator(value))
        {   if(operator!=null)
            {
                calculate();
            }
            else{
            operator=value;
            operand1=text;
            display.textContent="";
            }
        }
        else if(value=='ac'){
            display.textContent="";
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        }

        else if(value=='!'){
            display.textContent=text.slice(0,text.length-1);
        }
        else if(value=='sign'){
            if(minuscount==0)
            { if(plus==1)
                {
                 display.textContent='-'+text.slice(1,text.length);
                 minuscount=1;

                }
                else{
                    display.textContent='-'+text;
                     minuscount=1;
                }
             
            }
            else{
             display.textContent='+'+text.slice(1,text.length);
                minuscount=0;
                plus=1;
            }

        }
        else if(value=='.'){
            if(text.length && !text.includes('.')){
                 display.textContent=text+'.';

            }
        }
            else if(value=='='){
              calculate();  
            }
            else{
                display.textContent+=value;
                    }
        // display.textContent=text+value;
         
    });
}