//Block Scope, Function Scope, Global Scope

//1. Mobile

{
    var mobile_cost = 10000;
    let mobile_model = 'Oppo';
    const mobile_color = 'Black';
    console.log(mobile_cost,mobile_model,mobile_color);
}

function mobile(){
    var mobile_cost = 10000;
    let mobile_model = 'Oppo';
    const mobile_color = 'Black';
    console.log(mobile_cost,mobile_model,mobile_color);
}
mobile();

var mobile_cost = 10000;
let mobile_model = 'Oppo';
const mobile_color = 'Black';
function mobile1(){
    console.log(mobile_cost,mobile_model,mobile_color);
}
mobile1();

//2. Car
{
    var car_cost = 15500000;
    let car_model = 'BMW';
    const car_type = 'Petrol';
    console.log(car_cost,car_model,car_type);
}

function car(){
    var car_cost = 15500000;
    let car_model = 'BMW';
    const car_type = 'Petrol';
    console.log(car_cost,car_model,car_type);
}
car();

var car_cost = 15500000;
let car_model = 'BMW';
const car_type = 'Petrol';
function car1(){
    console.log(car_cost,car_model,car_type);
}
car1();

//3. School
{
    var school_name = 'SKR school';
    let school_grade = 'A section';
    const school_strength = 45;
    console.log(school_name,school_grade,school_strength);
}

function school(){
    var school_name = 'SKR school';
    let school_grade = 'A section';
    const school_strength = 45;
    console.log(school_name,school_grade,school_strength);
}
school();

var school_name = 'SKR school';
let school_grade = 'A section';
const school_strength = 45;
function school1(){
    console.log(school_name,school_grade,school_strength);
}
school1();

//4. TV
{
    var tv_cost = 15000;
    let tv_brand = 'LG';
    const tv_type = 'LED';
    console.log(tv_cost,tv_brand,tv_type);
}

function tv(){
    var tv_cost = 15000;
    let tv_brand = 'LG';
    const tv_type = 'LED';
    console.log(tv_cost,tv_brand,tv_type);
}
tv();

var tv_cost = 15000;
let tv_brand = 'LG';
const tv_type = 'LED';
function tv1(){
    console.log(tv_cost,tv_brand,tv_type);
}
tv1();

//5. Bike
{
    var bike_cost = 120000;
    let bike_brand = 'Shine';
    const bike_color = 'Red';
    console.log(bike_cost,bike_brand,bike_color);
}

function bike(){
    var bike_cost = 120000;
    let bike_brand = 'Shine';
    const bike_color = 'Red';
    console.log(bike_cost,bike_brand,bike_color);
}
bike();

var bike_cost = 120000;
let bike_brand = 'Shine';
const bike_color = 'Red';
function bike1(){
    console.log(bike_cost,bike_brand,bike_color);
}
bike1();

//6. College
{
    var course_name = 'BE';
    let unvir_name = 'VTU';
    const exam_cost = 1850;
    console.log(course_name,unvir_name,exam_cost);
}

function college(){
    var course_name = 'BE';
    let unvir_name = 'VTU';
    const exam_cost = 1850;
    console.log(course_name,unvir_name,exam_cost);
}
college();

var course_name = 'BE';
let unvir_name = 'VTU';
const exam_cost = 1850;
function college1(){
    console.log(course_name,unvir_name,exam_cost);
}
college1();

//7. Laptop
{
    var laptop_name = 'Dell';
    let laptop_cost = 25000;
    const laptop_brand = 'Dell';
    console.log(laptop_name,laptop_cost,laptop_brand);
}

function laptop(){
    var laptop_name = 'Dell';
    let laptop_cost = 25000;
    const laptop_brand = 'Dell';
    console.log(laptop_name,laptop_cost,laptop_brand);
}
laptop();

var laptop_name = 'Dell';
let laptop_cost = 25000;
const laptop_brand = 'Dell';
function laptop1(){
    console.log(laptop_name,laptop_cost,laptop_brand);
}
laptop1();

//8. Home
{
    var home_name = 'Basava Nelaya';
    let home_cost = 1500000;
    const home_color = 'Brown';
    console.log(home_name,home_cost,home_color);
}

function home(){
    var home_name = 'Basava Nelaya';
    let home_cost = 1500000;
    const home_color = 'Brown';
    console.log(home_name,home_cost,home_color);
}
home();

var home_name = 'Basava Nelaya';
let home_cost = 1500000;
const home_color = 'Brown';
function home1(){
    console.log(home_name,home_cost,home_color);
}
home1();

//9. Employee
{
    var emp_id = 101;
    let emp_sal = 30000;
    const emp_grade = 'A Grade';
    console.log(emp_id,emp_sal,emp_grade);
}

function employee(){
    var emp_id = 101;
    let emp_sal = 30000;
    const emp_grade = 'A Grade';
    console.log(emp_id,emp_sal,emp_grade);
}
employee();

var emp_id = 101;
let emp_sal = 30000;
const emp_grade = 'A Grade';
function employee1(){
    console.log(emp_id,emp_sal,emp_grade);
}
employee1();

//10. Cloth
{
    var cloth_color = 'Blue';
    let cloth_cost = 1000;
    const cloth_size = 'M';
    console.log(cloth_color,cloth_cost,cloth_size);
}

function cloth(){
    var cloth_color = 'Blue';
    let cloth_cost = 1000;
    const cloth_size = 'M';
    console.log(cloth_color,cloth_cost,cloth_size);
}
cloth();

var cloth_color = 'Blue';
let cloth_cost = 1000;
const cloth_size = 'M';
function cloth1(){
    console.log(cloth_color,cloth_cost,cloth_size);
}
cloth1();


    // function one(){
                     let str="Sachin";
                     let res="";

                     for(let i=str.length-1;i>=0;i--)
              {
                     res=res+str.charAt(i);
              }
              document.write(res);
              }
              one();

//write a program to print the vowels in a String

              function two(){
                     let str="Saaeiour";
                     let res="";

                     for(let i=0;i<str.length;i++){
                            let ch=str.charAt(i);

                            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
                                   // document.write(ch);
                                   console.log(ch);
                                   
                            }
                     }

              }
              two()


 //write a program to print the consonants in a String

 function three(){
    let str="Saaeiour";

    for(let i=0;i<str.length;i++){
           let ch=str.charAt(i);
           if(ch!='a' && ch!='e' && ch!='i' && ch!='o' && ch!='u'){
           console.log(ch);
           
           }

    }
}
three()


// Write a program to count number of vowels in a String

    function four(){
           let str="Saaeiour";
           
           let res="";
           for(let i=0;i<str.length;i++){
                  let ch=str.charAt(i);
                  

                  if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
                         // document.write(ch);
                         // console.log(ch);
                         res=res+ch;
                         
                  }
           }
           console.log(res.length);
           
    }
    four()



// Write a program to count number of vowels in a String

    function five(){
           let str="Saaeiour";
           
           let count=0;
           for(let i=0;i<str.length;i++){
                  let ch=str.charAt(i);
                  

                  if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
                         // document.write(ch);
                         // console.log(ch);
                         count++;
                         
                  }
           }
           console.log(count); 
    }
    five()


// Write a program to count number of consonants in a String

    function six(){
           let str="Saaeiour";
           let count=0;
           for(let i=0;i<str.length;i++){
                  let ch=str.charAt(i);

                  if(ch!='a' && ch!='e' && ch!='i'&& ch!='o' && ch!='u'){
                         // document.write(ch);
                         console.log(ch);
                         count++;
                  }
           }
           console.log(count); 
    }
    six()


// function a(){
    let str = "hi how are";
    let s1 = str.split(" ");
    let res = "";
    for(let i=s1.length-1;i>=0;i--)
    {
        res=res+s1[i]+" ";
    }
    console.log(res);
    
}
a()



let str = "hi how are you";
 function b()
 {
    
    let s1 = str.split(" ");
    for(let i=0;i<s1.length;i++)
    {
        let a = s1[i];
        s1[i]= reverse(a);
    }
      reverse(str)
     let res = "";
     for(let i=str.length-1;i>=0;i--)
     {
        
        res = res+str.charAt(i);
     }
     return res;
     
 }
 b()



 function a()
 {
    let str = "amma";
    let res = "";
    for(let i=str.length-1;i>=0;i--)
    {
        res=res+str.charAt(i);
    }
    if(str==res)
    {
        console.log("palindrome");
        
    }
    else{
        console.log("not palindromee");
        
    }
 }

function reverseStr(str){
    //let str="";
    let s1=str.split(" ");
    let res="";

    for(let i=s1.length-1;i>=0;i--){
           res=res+s1[i]+" ";
    }
    document.write(res);
    // console.log(res);
    
}
reverseStr("jspider rajajinagar");


function fetchWord1(str){
    let s1=str.split(" ");

    for(let i=0;i<s1.length;i++){
           reverseWord1(s1[i]+" ");
    }
    
}
fetchWord1("Hi how are you");

function reverseWord1(str2){
    let res="";

    for(let i=str2.length-1;i>=0;i--){
           res=res+str2.charAt(i);
    }
    document.write(res);
}
reverseWord1();

function reverseWord(str2){
    let res="";

    for(let i=str2.length-1;i>=0;i--){
           res=res+str2.charAt(i);
    }
    if(str2==res){
           document.write("Palindrome");
    }else{
           document.write("Not Palindrome");
    }
    document.write(res);
}
reverseWord("appa");

//5.charCodeat method used fetch the particular characters

let str = "jspiders";
console.log(str.charCodeAt(0));

//6.slice method  
let str = "jspiders";
console.log(str.slice(0,5));
console.log(str.slice(-8,-3));


//7.substring
let str1 = "jspiders";
console.log(str1.substring(0,3));

//8.substr
let str = "mohan";
console.log(str.substr(0,5));

//9.replace
let str = "jspiders rajajinagar"
console.log(str.replace("jspiders","qspiders"));
console.log(str.replaceAll('j','q'));

//10.length,trim,trimstart,trimend
let str = "               rajajinagar"
console.log(str.length);
str=str.trimEnd()
console.log(str.length);
str=str.trimStart();
console.log(str.length);

str=str.trim()
console.log(str.length);


// 11.split
let str = "jspiders rajajinagar"
let s=str.split(" ");
console.log(s);


//pgm to reverse sentence
function reverse() {
    let s1 = "how are you";
    let s2 = s1.split(" ");
    let s3 = "";
    for(let i=s2.length-1;i>=0;i--)
    {
        s3=s3+s2[i];
    }
    console.log(s3);
    
}
reverse()

//reverse the words in sentence
function a() {
    let str = "hi helloo";
    let res = "";
    let arr = str.split(" ");
    for(let i=0;i<arr.length;i++){
        let word = "";
         for(let j = arr[i].length-1;j>=0;j--){
            word+=arr[i].charAt(j);
         }
         res += word + " ";
         console.log(res.trim());
         
    }
}
a()

let str = "hi hello friends";
function b(){
    let str1=str.split(" ");
    for(let i=0;i<str1.length;i++){
        let a = str1[i];
        str1[i]=reverse(a);
    }
    console.log(str1);
    
}
b()
function reverse(str) {
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str.charAt(i);
    }
return rev;
}



//concat method .used to concat two strings
let str = "abhi"
let str1 = "shek"
let str2 = "upari"

let a=str.concat(" ",str1," ",str2);
console.log(a);

//includes method if the character is their means give true or else false

let str = "jspider rajajinagar";
console.log(str.includes("j"));


//indexof and lastindexof
let str = "jspider rajajinagar";
console.log(str.indexOf("j"));
console.log(str.lastIndexOf("r"));

//padStart and padEnd
let str = "5";
console.log(str.padStart(3,'0'));
console.log(str.padEnd(3,'1'));

//repeat
let str = "helloooo";
console.log(str.repeat(5));

//undefined
let a;
console.log(a);

// //boolean
let str = "foo";
let str1 = "foo";
console.log(str==str1);

//bigint
let no = 123456n;
console.log(typeof no);
let no1 = BigInt(12345678);
console.log(typeof no1);

let no2 = BigInt("12345678");
console.log(typeof no2);

 //symbol
 let str = "foo";
 let str1 = "foo";
 console.log(str==str1);  //true
 
let sym=Symbol("foo");
let sym1=Symbol("foo");
console.log(sym==sym1);
console.log(sym);

//equals and strictly equals
let a="10";
let b = 10;
console.log(a==b); //true
console.log(a===b);  //false



console.log(typeof null); //object
console.log(typeof undefined); //undefined

//typecasting:implicit type casting
let a="5";
let b=a+5;
console.log(b);  //55
console.log(typeof b);  //string

let x="5";
let y = x*5;
console.log(y);  //25
console.log(typeof y); //number


//Explicit typecasting
let m = 100;
console.log(typeof m); //number

let n = String(m);
console.log(typeof n); //string
console.log(n);


//taking dynamic input

let no=Number(prompt("enter the first value"));
console.log(typeof no);  //number

let no1=Number(prompt("enter the second value"));
console.log(typeof no1);  //number

let res=no+no1;
console.log(res);



