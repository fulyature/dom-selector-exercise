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

//************  CREATE NODE */

// inputun altında p elementi oluşturma;

const myInput = document.querySelector("#input");

//1-create

const newP = document.createElement("p");

//2-eğer text tabanlı ıse text dugumunu olustur

const text = document.createTextNode(myInput.value);

//3-oluşturulan text duğumunu yenı elemente bağla append

newP.appendChild(text);

console.log(newP);

//4-Yeni elementin DOM reee ye baglanması(append)

const main = document.querySelector("main");

main.appendChild(newP); // akışta en sona ekler

//item-list in onune bastı. diğerini ezdi.aynı elementı dom a bır kere ekleyebılırsın.sondakı ılkını ezer
const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

//*----ID , CLASS ----

//1.YONTEM

newP.id = "paragraf";
newP.className = "par raf";

//2.Yöntem
newP.setAttribute("id", "new-id"); //eskisinin üzerine yazar

newP.setAttribute("class", "new-class"); //eskisinin üzerine yazar

newP.classList.add("border"); //class ekleme

console.log(newP.classList.contains("border")); // iceriyorsa ? true döner

// classList.toggle() toggle tersleme mantıgı. varsa kaldırır; yoksa ekler

newP.classList.toggle("fly");

//classList.remove()  kaldırır

//*-----ID CLASS GİBİ ÖZELLİKLERİ OKUMA -----

//1- YÖNTEM

console.log(newP.id);
console.log(newP.className);

//2-YÖNTEM

console.log(newP.getAttribute("id"));
console.log(newP.getAttribute("class"));

//* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------
const ul = document.querySelector("ul"); //statik ul nın devamına bastık

ul.innerHTML += ` 
   <li>C++</li>
   <li>java</li>
   <li>C</li>
   <li>go</li>`;

//* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------

const newDiv = document.createElement("div");
newDiv.id = "my-div";
itemListSection.after(newDiv);

newDiv.innerHTML += `
<h2 class="par center">Languages</h2>
<ul>
  <li>C++</li>
  <li>java</li>
  <li>C</li>
  <li>go</li>
</ul>`;

//*--------------------------------------------
//********EVENTS************* */
//*********************** */

// document.querySelector("header h1").onmouseover = function () {
//   document.querySelector("header h1").style.color = "blue";
// };

const heading1 = document.querySelector("header h1");

heading1.onmouseover = function () {
  heading1.style.color = "blue";
};

heading1.onmouseout = function () {
  heading1.style.color = "black";
};

const printHello = () => {
  document.write("Hello");
};

//? onload event'ı html ve css kodlarinini render edilmesini akabinde calisir.
window.onload = printHello();

window.addEventListener("load", () => {
  document.getElementById("input").focus();
});

const addBtn = document.querySelector("#btn");
addBtn.addEventListener("click", () => {});
