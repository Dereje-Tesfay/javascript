// function declaring
function smg(){
   let message="hello dereje";
   console.log(message);
}
smg();

function hello(){
    const name="dereje";
}
console.log(hello());
// for example 1
function findAverage(x,y){
    let answer =(x+y)/2;
    return answer;
}
let avg=findAverage(5,9);
console.log(avg);

//  example 2

function add(a,b){
    let sum=a+b;
    return sum;
}
let total=add(10,35);
console.log(total);

// function expression
let catSays =function(max){
console.log("Hello world!");

}
catSays();

function makeline(max){
    var max=10;
    for(let i=1;i<=10;i++){
        console.log("*");
        
    }
    return "\n";
}