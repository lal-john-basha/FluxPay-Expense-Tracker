const API = "http://localhost:5000/api/expenses";

async function addExpense() {

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  const res = await fetch(API + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      amount: amount,
      category: category
    })
  });

  const data = await res.json();
  console.log(data);

  loadExpenses();
}

async function loadExpenses() {

  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  data.forEach(exp => {
    const li = document.createElement("li");

    li.innerHTML =
      exp.title + " - ₹" + exp.amount + " (" + exp.category + ")" +
      ` <button onclick="deleteExpense('${exp._id}')">Delete</button>`;

    list.appendChild(li);
  });
}

async function deleteExpense(id) {

  await fetch(API + "/" + id, {
    method: "DELETE"
  });

  loadExpenses();
}

loadExpenses();