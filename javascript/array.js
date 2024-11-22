const name=["dereje","tesfaye","gebre","kebed","alemu"];
console.log(name[1]);
console.log(name[0]);

//change the value of an element by setting is equal to a new value,
name[1]="alemitu";
console.log(name[1]);
name[3]="abebe";
console.log(name[3]);

//array properties and methods
//array.length
const myArray=["powdered","kebed","bini", "dereje"];
console.log(myArray.length);


const inventory = [
    ["gold pieces", 25],
    ["belt", 4],
    ["ring", 1],
    ["shoes", 2]
  ];
  console.log(inventory.length);
  //push()method: to add elements to the end of an array.
//   for example
const arrayPush=["powdered","kebed","bini", "dereje"];
arrayPush.push("demis");
console.log(arrayPush);


//pop() method: to remove elements from the end of an array.
arrayPush.pop("demis");
console.log(arrayPush);

const array=[1,2,3,4,5,6,7,8,9];
console.log(array);

//for each loop
let numbers=[1,2,3,4,5];
numbers.forEach((n)=>{
  console.log(n);
})
//example
let matrix=[
[2,10,4],
[4,5,6]];

for(let i=0;i<2;i++){
  for(let j=0;j<3;j++){
    console.log(matrix[i][j]);
  }
}

