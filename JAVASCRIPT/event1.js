// let li=document.querySelector(".list-items:nth-child(1)")
// li.addEventListener("click",()=>{
//     li.style.background="red"
// })

// let li1=document.querySelector(".list-items:nth-child(2)")
// li1.addEventListener("click",()=>{
//     li1.style.background="red"
// })

// let li2=document.querySelector(".list-items:nth-child(3)")
// li2.addEventListener("click",()=>{
//     li2.style.background="red"
// })

// let li3=document.querySelector(".list-items:nth-child(4)")
// li3.addEventListener("click",()=>{
//     li3.style.background="red"
// })

// let li4 = document.createElement("li");
// let ul = document.querySelector("#ul");
// ul.append(li4)
// li4.innerText="CSS";
// li4.style.listStyleType="none";
// li4.setAttribute("class","list-items")

//event delegation
// for above after the css or one element for that given style is not applying to overcome that we go for event delegation that is by using target and style again.
let ul=document.querySelector("#ul")
ul.addEventListener("click",(e)=>{
    if(e.target.matches(".list-items")){
        e.target.style.background="red";
    }
})

let li = document.createElement("li");
ul.append(li);
li.innerText="CSS";
li.style.listStyleType="none";
li.setAttribute("class","list-items");