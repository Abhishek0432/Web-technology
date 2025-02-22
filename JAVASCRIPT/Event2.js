// console.log("hiiii");
// function a() {
//     console.log("heloooo"); 
// }
// a();
// console.log("byeee");

// console.log("hiiii");
// function a() {
//     setTimeout(()=>{
//         console.log("i am first function");
        
//     },5000)  
// }
// a()
// function b() {
//     setTimeout(()=>{
//         console.log("i am second function");
        
//     },2000)
// }
// b()
// console.log("byeeee");

//event propagation
let a=document.querySelector("#a")
let b=document.querySelector("#b")
let c=document.querySelector("#c")

a.addEventListener("click",()=>{
    console.log("grand parent");
    
},true)
b.addEventListener("click",(e)=>{
    console.log("parent");
    e.stopPropagation();
    
},true)

c.addEventListener("click",()=>{
    console.log("child");
    
},true)


//prototype inheritence
let a={
    id:100,
    name:"abhi"
}

let b={
    address:"bangalore"
}

a.__proto__=b;
console.log(a.address);
console.log(a);

//BOM
//SCREEN
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);

//location
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    location.href="form.html"
})

btn.addEventListener("click",()=>{
    window.location.assign("form.html")
})

//history
console.log(window.location.protocol);
btn.addEventListener("click",()=>{
    window.history.back();
})

let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    window.history.forward()
})

//navigator

console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.appCodeName);


