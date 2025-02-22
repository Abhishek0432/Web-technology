//functions
//wap of even or odd
// console.log("hiiiiiiiiiiiiiiiiiiiiii");

// function even(){
//     let no=10;
//     if(no%2==0)
//     {
//         console.log("evennn");
        
//     }
//     else{
//         console.log("oddd");
        
//     }
// }
// even()

//factorial
// function fact() {
//     let no=10;
//     let fact=1;
//     for(let i=1;i<=no;i++){
//         fact=fact*i;
//     }
//     console.log(fact);
    
// }
// fact()

//sum of numbers from 1 to 10
// function summ(){
//     let sum = 0;
//     for(let i=1;i<=10;i++)
//     {
//         sum+=i;
//     }
//     console.log(sum);
    
// }
// summ()

//swap two num using third variable
// function swap() {
//     let a = 20;
//     let b = 10;
//     let temp = a;
//         a = b;
//         b = temp;
//         console.log(a);
//         console.log(b);        
// }
// swap()

//swap two num without using third variable
// function swap1() {
//     let a = 20;
//     let b = 10;
//         a = a+b;
//         b = a-b;
//         a = a-b;
//         console.log(a);
//         console.log(b);       
// }
// swap1()

//count numbers from 1to10
// function con() {
//     let count=0;
//     for(let i=1;i<=10;i++)
//     {
//         count++;

//     }
//     console.log(count);
    
// }
// con()

//30/12 i have to do it


//arrow function

// let a=()=>console.log("hello");
// a()

// let res=()=>{
//     let a=10;
//     console.log(a+a);
    
// }
// res()

// let a=x=>{
//     console.log(x);
    
// }
// a(10)

// let a=(x,y)=>{
//     console.log(x,y);
    
// }
// a(10,20)

// let a=_=>{
//     console.log("hello");
    
// }
// a()


//function hoisting
// add()
// function add() {
//     console.log("named function");
    
// }

//we cannot  able to hoist arrow function
// a()
// let a=()=>{
//     console.log("hello");
    
// }

//callback function and higher order function

// let m=10;
// console.log(m+m);

// function add(sub) {
//     let a=10;
//     let b=20;
//     sub();
//     console.log(a+b);
    
// }
// add(sub)

// function sub() {
//    let x = 50;
//    let y = 60;
//    console.log(x+y);
    
// }


//nested function
// function a() {
//     let a = 10;

//     function b(){
//         let b = 20;
//         console.log(b);
//         console.log(a);
           
//     }
//     b()
// }
// a()

//IIFE 
// (function ()
// {
//     console.log("hello");
    
// })
// ()

//function with expression
// let a = function (){
//     console.log("abhishek");
    
// }
// a()

//first class function
// let res = function add(){
//     console.log("hellooo");
    
// }
// res()

//function written a function


//arrays
// let arr = new Array();
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;
// console.log(arr);


// console.log(arr.length);

// arr[1]=60;
// console.log(arr);

// let brr=[100,200,300,400];
// let crr=brr;
// console.log(brr);
// console.log(crr);


// let a = [10,20,30,40];
// console.log(a);

// let b = [10,'hi',20,true,undefined];
// console.log(b);

// //push : it is used to insert element at the end of the array.
// let x = [10,20,30,40];
// console.log(x);
// x.push(50);
// console.log(x);
// x.push(60,70);
// console.log(x);

// //unshift:it is used to insert element at the beginning of the array.
// x.unshift(500);
// console.log(x);
// x.unshift(600,700);
// console.log(x);

// //pop:it is used to remove one element at the end of the array.
// x.pop();
// console.log(x);
// x.pop();
// console.log(x);

// //shift: it is used to remove one element at the beginning of the array.
// x.shift();
// console.log(x);
// x.shift();
// console.log(x);


//slice //it excludess the last index array.
// let arr=[10,20,30,40,50];
// console.log(arr.slice(0,3));
// console.log(arr);


//splice  //it effects the original array
// let brr=[10,20,30,40,50];
// let a = brr.splice(0,2,"hii","hello");
// console.log(a);
// console.log(brr);


//map
// let arr = [10,20,30,40,50];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }
// let a = arr.map((element)=> {
//     return(element);
// })
// console.log(a);


//filter
// let arr=[5,4,3,2,1];
// let a = arr.filter((ele)=>{
//     return(ele%2==0);
// })
// console.log(a);


//reduce
// let arr = [1,2,3,4,5];
// let a=arr.reduce((accu,ele)=>{  //accumulator,element,index,array
//     return accu+ele
// })
// console.log(a);


//concat
// let arr = [10,20,30,40,50];
// let arr1 = ['hi','hello'];
// let a = arr.concat(arr1);
// console.log(a);

//includes
// let arr = [10,20,30,40,50];
// console.log(arr.includes(30));
// console.log(arr.includes(70));


//indexOf and lastindexof

// let arr = [10,20,30,40,30,60,70,30];
// console.log(arr.indexOf(30));
// console.log(arr.lastIndexOf(30));


// //join
// let str = "jspiders rajajinagar";
// let str1 = str.split(" ");
// console.log(str1);
// let str2=str1.join(" ");
// console.log(str2);


//reverse
// let arr=[10,20,30,40];
// console.log(arr.reverse());

//sort
// let str=['z','x','b','a']
// console.log(str.sort());


// let arr=[50,10,30,20,40];
// console.log(arr.sort((x,y)=>{
//     return x-y; //x-y will return the ascending order.
// }));

// console.log(arr.sort((x,y)=>{
//     return y-x; //y-x will return the descending order.
// }));

//some
// let age = [18,6,7,8,9];
// console.log(age.some((ele)=>{
//     return ele>=18;  //if any one of the method is greater then 18 then it returns true.
// }));


//every
// let age = [12,30,40,46,30];
// console.log(age.every((a)=>{
//     return a>=18; //here all the value shuld be greater then 18 then only it will return true
// }));


// let age1=[20,30,40,50];
// console.log(age1.every((b)=>{
//     return b>=18;
// }));


//foreach
// let arr=[10,20,30,40,50];
// arr.forEach((Element,index,array)=>{
//     console.log(Element,index,array);
    
// })


// foreach
// let arr=[10,20,30,40,50];
// arr.forEach((Element,index,array)=>{
//     return (arr.Element);
    
// })
// console.log(Element);



//dynamic input 
// let arr=[];
// let no=Number(prompt("enter the array size"));
// for(let i=1;i<=no;i++){
//     let a=Number(prompt('enter the ${i} element'))
//     arr.push(a)
// }
// console.log(arr);

// let arr=[60,70,80,90,100];  
// let a=arr.map((element)=>{
//     return element;
// })
// console.log(a);

//objects

let fruit = [
    {
        name:"mango",
        price:350
    },

    {
        name:"grapes",
        price:160
    },
    {
        name:"apple",
        price:250
    }
]

function callback({price}) {
    return price>160?"ok":"low";
    
}

let a = Object.groupBy(fruit,callback)
console.log(a);

let date=new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getMonth());
console.log(date.getTime());


//math functions
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));
console.log(Math.min(2,3,4,5,6,8));
console.log(Math.max(34,23,456,788,44));
console.log(Math.ceil(10.3));
console.log(Math.floor(10.8));
console.log(Math.pow(2,3));

// let otp=parseInt(Math.random()*100); //generates random digit
// console.log(otp);

// let no=Number(prompt(`enter the above otp`))
// if(otp===no){
//     console.log("login successful");
    
// }
// else{
//     console.log("login failed");
    
// }


//object destructing
let b = {
    name:"raj",
    age:25
}
console.log(b.name);
console.log(b.age);

let {name,age}=a;
console.log(name,age);

















