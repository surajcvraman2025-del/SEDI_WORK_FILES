const input_e = document.querySelector("#input_el");
const Bu_1 = document.querySelector(".b1");
const Bu_2 = document.querySelector(".b2");
const Info = document.querySelector(".info");
const Input_date = document.querySelector("#input2");

let My_array = [];
let selectedDate = "";   // store date separately

// Add text
Bu_1.addEventListener("click", function () {
  My_array.push(input_e.value);
  input_e.value = "";

  renderList();
});

// Clear all
Bu_2.addEventListener("click", function () {
  My_array = [];
  selectedDate = "";
  input_e.value = "";
  Input_date.value = "";
  Info.textContent = "";
});

// Get date
Input_date.addEventListener("change", () => {
  selectedDate = Input_date.value;
  console.log("Date:", selectedDate);

  renderList();
});

// Function to show data
function renderList() {
  let list = "";

  for (let i = 0; i < My_array.length; i++) {
    list += `<ul>${My_array[i]}</ul>`;
  }

  // show both list + date
  Info.innerHTML = `
    ${list}
    <p>Date: ${selectedDate}</p>
  `;
}
let bs = {};
let a = true;
let bg = true;

if (a === true) {
  let b = "suraj55555555";
  bs.a = b;
}

if (bg === true) {
  let b = "suraj66666";
  bs.b = b;
}

console.log(bs);
console.log('');
