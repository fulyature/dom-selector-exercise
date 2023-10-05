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
lists[3].innerText = `<h1>ZEYNEP</h1>`;

/*id secıldı*/
const header = document.querySelector("#head1");
console.log(header);

/*class secıldı*/
const itemList = document.querySelector(".add-item");
console.log(itemList);

//? CSS deki selector mantigi kullanabilir
const otherH2 = document.querySelector("section h2");
console.log(otherH2);

// Yukarı yönde traverse
const head2 = document.querySelector(".head2");
console.log(head2);
console.log(head2.parentElement);
console.log(head2.parentNode.parentNode);

//closest()

const list = document.querySelector(".list");
console.log(list.textContent);

console.log(list.closest("body").querySelector("header h1").innerText);

//Asagı yonde traverse
console.log(itemList.children);
