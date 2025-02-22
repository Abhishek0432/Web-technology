console.log(window);

window.localStorage.setItem("name","virat")
window.localStorage.setItem("name1","anushka")
window.localStorage.setItem("name2","dannywatt")

console.log(window.localStorage.getItem("name"));
console.log(window.localStorage.getItem("name1"));
console.log(window.localStorage.getItem("name2"));

window.localStorage.removeItem("name2")

console.log(window.localStorage.length);

window.localStorage.clear();

window.localStorage.setItem("id",100)
window.sessionStorage.setItem("name","abhishek");
window.sessionStorage.setItem("name1","sanvi");

console.log(window.sessionStorage.getItem("name"));

window.sessionStorage.removeItem("name")
console.log(window.sessionStorage.length);

window.sessionStorage.clear();







