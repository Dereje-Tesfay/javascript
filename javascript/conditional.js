
// conditionals
let price=15;
let money=20.5;
if(money>=price){
    console.log("buy the hammer!");   
}
else{
    console.log("do not buy the hammer!");  
}//print:buy the hammer!



//another example
let a=10;
let b=20;
if(a>=b){
    console.log("a is greater than b:");  
}
else{
    console.log("a is less than or equal to b");
}//print:a is less than or equal to b




//another example
const weather="sunny";
if(weather==="snow"){
    console.log("Bring a coat!");
}
else if(weather==="rain"){
    console.log("bring a rain jacket");
}
else{
    console.log("wear what you have on");
}




//    exersise
const ranner ="dereje";
const position =2;
let medal;
if(position===1){
    medal="gold";
}
else if(position===3){
    medal="siliver";

}
else if(position===2){
    medal="brase";
}
else{
    medal="pat on the back!";
}
console.log(ranner +" received a " + medal + "medal");
//print:dereje received abrase medal


//even or odd
let n=544255726673;
if(n%2===0){
    console.log("n is even!");
}
else{
    console.log("n is odd");
}//print:n is odd


//logical operators
let colt="not busy";
let clas ="nice";
if(colt==="not busy"&&clas==="nice"){//true&&true=true
    console.log("go to the exam!"); 
}//print:go to the exam!



// example
let balance=-230;
let checkBalance=true;
let inActive=true;
if(balance===-230&&checkBalance===inActive){
console.log("Your Balance is negative. please contact bank");
}//print:your Balance is negative. please contact bank


//if statment
let value=3;
if(value===1){
    console.log("your select value 1:");
    
}
else if(value===2){
    console.log("your select value 2:");
    
}
else if(value===3){
    console.log("your select value 3:");
    
}
else if(value===4){
    console.log("your select value 4:");
    
}//print: your select value 3:



// switch statment
let option=4;
switch(option){
    case 1:
        console.log("your select option 1:");
        break;
    case 2:
        console.log("your select option 2:");
        break;
     case 3:
        console.log("your select option 3:");
        break;
        case 4:
            console.log("your select option 4!");
            default:      
}//print: your select option 4!


