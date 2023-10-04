const addButon = document.getElementById("btn");
console.log(addButon);
addButon.style.backgroundColor = "#dedede";
addButon.style.border = "none";
addButon.style.borderRadius = "5px";
addButon.style.padding = "8px";

//*değer atama
addButon.value = "SAVE";

//*h1
const h1 = document.getElementById("head1");
console.log(h1);

h1.textContent = "DOM Introduction";
console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

const myInputs = document.getElementsByTagName("input");
console.log(myInputs);
console.log("Size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);
//? Array'e cevilebilir.
const myLists = document.getElementsByTagName("li");
const myListsArr = [...myLists]; //?Array'e cevir
console.log(myListsArr);

myListsArr.forEach((li) => (li.style.color = "pink"));
myListsArr.forEach((a) => (a.style.backgroundColor = "purple"));

//?Alternative olarak

const myListsArr1 = Array.from(myLists); //?Array'e cevir

console.log(myListsArr1);

myListsArr1.map((li) => (li.style.listStyleType = "none"));

const lists = document.getElementsByClassName("list");

lists[2].innerHTML = "fulya";
lists[2].innerHTML = `<h1>FULYA</h1>`;
