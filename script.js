
/* ================================
   Part 1: Variables & Conditionals
================================ */
let username = "Alice";
let isLoggedIn = false;

// Conditional example
if (isLoggedIn) {
  console.log("Welcome back, " + username);
} else {
  console.log("Please log in.");
}

/* ================================
   Part 2: Custom Functions
================================ */
// Function 1: Login simulation
function loginUser(name) {
  isLoggedIn = true;
  username = name;
  document.getElementById("greeting").textContent = "Welcome, " + username + "!";
}

// Function 2: Generate random background color
function changeBackgroundColor() {
  const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

/* ================================
   Part 3: Loops
================================ */
// Loop 1: Display numbers 1–5
function generateNumberList() {
  const list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear old items

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

// Loop 2: Print array items to console
const fruits = ["Apple", "Banana", "Cherry", "Date"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

/* ================================
   Part 4: DOM Interactions
================================ */
// Interaction 1: Button click login
document.getElementById("loginBtn").addEventListener("click", function () {
  loginUser("Alice");
});

// Interaction 2: Button click to generate numbers
document.getElementById("generateBtn").addEventListener("click", generateNumberList);

// Interaction 3: Button click to change background color
document.getElementById("colorBtn").addEventListener("click", changeBackgroundColor);
