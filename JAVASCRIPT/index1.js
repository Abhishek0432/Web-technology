//DOM (document obj model) * it is used for modifiying the contents and structuring the html elements.
//5 ways of styling
//a.document.getElementById();
// b.document.getElementByclassname();
// c.document.getElementBytagname();
//d.document.queryselector();
//e.document.queryselectorAll();

// //a.document.getElementById();
// let h1=document.getElementById("head");
// console.log(h1);
// h1.style.color="hotpink";

// // // b.document.getElementByclassname();
// let list=document.getElementsByClassName("list-items")
// console.log(list);
// console.log(Array.isArray(list));


// // list[0].style.color="red"
// // list[1].style.color="red"

// for(let i=0;i<list.length;i++){
//     list[i].style.color="blue"
// }

// // // c.document.getElementBytagname();
// let list1=document.getElementsByTagName("li")
// console.log(list1);
// list1[0].style.color="brown";

// // for(let i=0;i<list1.length;i++){
// //     list1[i].style.color="goldenrod"
// // }

// // //d.document.queryselector();
// let li=document.querySelector("#head")
// console.log(li);
// li.style.color="blue";


// // //e.document.queryselectorAll();
// let li1 = document.querySelectorAll(".list-items")
// console.log(li1);
// // li1[0].style.color="yellow";
// for(let i=0;i<li1.length;i++){
//     li1[i].style.color="green"
// }


// //adding new value to list
// let li=document.createElement("li")
// console.log(li);
// let ul=document.getElementById("ul")
// console.log(ul);
// ul.append(li);  //append is used to add an element.

// li.innerText="web tech"
// li.textContent="javascript"
// li.innerHTML=`<h1> webtech</h1>`

// li.innerText=`AL AND ML`;
// li.style.listStyleType="none";
// li.style.border="2px solid red"
// li.setAttribute("class","list-items")

// //creating TABLE by writing code in js.
let table=document.createElement("table")
console.log(table);
let body1=document.querySelector("body")
console.log(body1);
body1.append(table)

let tr=document.createElement("tr")
table.append(tr)
let td=document.createElement("td")
tr.append(td)
td.innerText="darshan"
let td1 = document.createElement("td")
tr.append(td1)
td1.innerText="appu"

let td2=document.createElement("td")
tr.append(td2);

td2.innerText="virat"

table.style.border="2px solid black";
td.style.border="1px solid black"
td1.style.border="1px solid green"
 let tr1 = document.createElement("tr1")
table.append(tr1)
let td3=document.createElement("td3")
 tr1.append(td3)
 td3.innerText="bajji"
 let td4=document.createElement("td4")
 tr1.append(td4)
 td4.innerText="piyush"
 let td5=document.createElement("td5")
 td5.innerText="chandru"
 tr1.append(td5)

 table.style.border="2px solid black";
td3.style.border="1px solid black"

//3ways setting attribute
//1.Setattribute
//2.getattribute
//3.removeattribute

let h1 = document.querySelector("#h1")
console.log(h1);
h1.innerText="champions trophy"

// h1.setAttribute("class","king kohli")
// console.log(h1.getAttribute(("class")));
// h1.removeAttribute("class")


//claasName and classList are used to add class attribute.

// h1.className="Highestrungetter"

h1.classList.add("ABD") 
console.log(h1.classList.contains("ABD"));
h1.classList.remove("ABD")


