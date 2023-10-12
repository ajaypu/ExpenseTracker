const form = document.querySelector("#form");
const amt = document.querySelector("#amount");
const des = document.querySelector("#description");
const cat = document.querySelector("#category");
const itemList = document.querySelector("#item-list");

form.addEventListener("submit", addExpense);

function delExp(des, e) {
  const li = e.target.parentElement;
  itemList.removeChild(li);
  localStorage.removeItem(des);
}

function edtExp(des, e) {
  const data = JSON.parse(localStorage.getItem(des));

  amt.value = data.amt;
  des.value = data.des;
  cat.value = data.cat;
  const li = e.target.parentElement;
  itemList.removeChild(li);
  localStorage.removeItem(des);
}

function addExpenseTracker(obj) {
  const li = document.createElement("li");
  li.className = "li-item";
  const edtExpBtn = document.createElement("button");
  edtExpBtn.className = "edt-btn";
  const delExpBtn = document.createElement("button");
  delExpBtn.className = "del-btn";
  // appending values to li
  li.appendChild(document.createTextNode(`${obj.amt} ${obj.des} ${obj.cat}`));
  li.appendChild(edtExpBtn);
  li.appendChild(delExpBtn);
  edtExpBtn.appendChild(document.createTextNode("Edit Expense"));
  delExpBtn.appendChild(document.createTextNode("Delete Expense"));
  itemList.appendChild(li);
  localStorage.setItem(obj.des, JSON.stringify(obj));

  // delet button event handling
  delExpBtn.addEventListener("click", (e) => delExp(obj.des, e));
  // edit button event handling
  edtExpBtn.addEventListener("click", (e) => edtExp(obj.des, e));
}

function addExpense(e) {
  e.preventDefault();

  // Local Storage
  let localObj = {
    amt: amt.value,
    des: des.value,
    cat: cat.value,
  };
  addExpenseTracker(localObj);

  // create li element
}
window.addEventListener("DOMContentLoaded", AddUsers);

function AddUsers() {
  //   let locaStorageData = JSON.parse(localStorage.getItem(localObj.des)
  let keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    addExpenseTracker(JSON.parse(localStorage.getItem(keys[i])));
  }
}
