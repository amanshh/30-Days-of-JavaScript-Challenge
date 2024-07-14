// Arithmetic Operations Script
function performOperations(x,y) {
    var sum = x + y;
    var subtract = x-y;
    var multiply = x * y;
    var divide = x / y;
    var modulus = x % y;

    console.log(sum + " Sum");
    console.log(subtract + " Subtract");
    console.log(multiply + " Multiply");
    console.log(divide + " Divide");
    console.log(modulus + " Modulus");

}
performOperations(11,2)



// Comparison and Logical Operator Script
function performComparison(x,y){
    if(x > 0 && y < 22){
        console.log("Yes");
    }else
    console.log("No");
    }
    performComparison(10, 24);
    
    function performORComparison(x1,x2){
        if(x1 < 0 || x2 > 40  ){
            console.log("Good to go");
        }else
        console.log("Ora Ora Ora!");
        }
    performORComparison(25, 45)
    
    function performNOTComparison(y1,y2){
        if(y1 < 0 != y2 > 40  ){
            console.log("Danger");
        }else
        console.log("Overload");
        }
    performNOTComparison(25, 45)
    

    function performPositiveTernary(x,y){
        let res= (x>0 && y>0? "Positive-No" :"Negative-No");
        console.log(res);
        }
        performPositiveTernary(15,18);
        
        function performNegativeTernary(x1,y1){
            let result =(x1<0 && y1<0? "Positive-No" :"Negative-No");
        console.log(result);    
        }
            performNegativeTernary(15,18);