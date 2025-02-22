let btn1=document.querySelector("#btn-1");
let btn2=document.querySelector("#btn-2");
let c = document.querySelector("#c")

btn1.addEventListener("click",()=>{
    console.log("highest run scrorer king kohli");
    
})

btn2.addEventListener("mouseover",()=>{
c.style.backgroundColor="blue";
document.body.style.backgroundColor="goldenrod";
})

let btn=document.querySelector("#btn")
function random() {
    let color="#";
    for(let i=0;i<6;i++){
        color=color+parseInt(Math.random()*10)
        console.log(color);
        
    }
    document.body.style.backgroundColor=color;
}
btn.addEventListener("click",random)

let btn5=document.querySelector("#btn5");
let btn6=document.querySelector("#abhi");
btn5.addEventListener("click",()=>{
    btn6.innerText=Date();
})