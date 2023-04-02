import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const incomeForm = document.getElementById("incomeForm");
const incomeTitle = document.getElementById("incomeTitle");
const incomeValue = document.getElementById("incomeValue");
const incomesList = document.getElementById("incomesList");
const incomesValue = document.getElementById("incomesValue");

const expenseForm = document.getElementById("expenseForm");
const expenseTitle = document.getElementById("expenseTitle");
const expenseValue = document.getElementById("expenseValue");
const expensesList = document.getElementById("expensesList");
const expensesValue = document.getElementById("expensesValue");

const budgetState = document.getElementById("budgetState");

let incomesArr = [];
let expensesArr = [];

const addIncomeItem = () => {
  const newItemIn = {
    id: uuidv4(),
    title: incomeTitle.value,
    amount: Number(incomeValue.value),
  };
  incomesArr.push(newItemIn);
  showIncomes();
  sumIncomes();
  balance();

  incomeTitle.value = "";
  incomeValue.value = "";
};
incomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addIncomeItem();
});

const removeItemIn = (id) => {
  incomesArr = incomesArr.filter((item) => item.id !== id);
  showIncomes();
  sumIncomes();
  balance();
};

const editItemIn = (item) => {
  const li = document.getElementById(item.id);
  const title = li.querySelector(".title");
  const amount = li.querySelector(".amount");
  const editBtn = li.querySelector(".edit");
  const editTitle = document.createElement("input");
  editTitle.setAttribute("type", "text");
  editTitle.className = "edit-title";
  editTitle.value = item.title;
  const editAmount = document.createElement("input");
  editAmount.setAttribute("type", "number");
  editAmount.className = "edit-amount";
  editAmount.value = item.amount;
  const saveButton = document.createElement("button");
  saveButton.innerText = "Zapisz";
  saveButton.className = "save";

  title.replaceWith(editTitle);
  amount.replaceWith(editAmount);
  editBtn.replaceWith(saveButton);

  saveButton.addEventListener("click", () => saveItemIn(item));
};

const saveItemIn = (item) => {
  const li = document.getElementById(item.id);
  const title = li.querySelector(".title");
  const amount = li.querySelector(".amount");
  const editBtn = li.querySelector(".edit");
  const editedTitle = li.querySelector(".edit-title");
  const editedAmount = li.querySelector(".edit-amount");
  const saveButtonClicked = li.querySelector(".save");

  incomesArr = incomesArr.map((income) => {
    if (income.id === item.id) {
      return {
        id: item.id,
        title: editedTitle.value,
        amount: Number(editedAmount.value),
      };
    } else {
      return income;
    }
  });
  editedTitle.replaceWith(title);
  editedAmount.replaceWith(amount);
  saveButtonClicked.replaceWith(editBtn);

  showIncomes();
  sumIncomes();
  balance();
};

const createItemIn = (item) => {
  const listItem = document.createElement("li");
  listItem.id = item.id;
  listItem.className = "flex flex--space-between budget__list__item";
  const itemTitle = document.createElement("p");
  itemTitle.className = "title";
  itemTitle.innerText = item.title;
  const amount = document.createElement("p");
  amount.innerText = item.amount;
  amount.className = "amount";
  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.className = "edit";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Usuń";

  incomesList.appendChild(listItem);
  listItem.appendChild(itemTitle);
  listItem.appendChild(amount);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);

  removeButton.addEventListener("click", () => removeItemIn(item.id));
  editButton.addEventListener("click", () => editItemIn(item));
};

const showIncomes = () => {
  incomesList.innerHTML = "";
  incomesArr.forEach((item) => {
    createItemIn(item);
  });
  console.log(incomesArr);
};

const sumIncomes = () => {
  totalIncomes = incomesArr.reduce((acc, newValue) => {
    return acc + newValue.amount;
  }, 0);
  document.getElementById("incomesValue").innerText = totalIncomes;
};
const sumExpenses = () => {
  totalExpenses = expensesArr.reduce((acc, newValue) => {
    return acc + newValue.amount;
  }, 0);
  document.getElementById("expensesValue").innerText = totalExpenses;
};

const addExpenseItem = () => {
  const newItemEx = {
    id: uuidv4(),
    title: expenseTitle.value,
    amount: Number(expenseValue.value),
  };
  expensesArr.push(newItemEx);
  showExpenses();
  sumExpenses();
  balance();

  expenseTitle.value = "";
  expenseValue.value = "";
};
expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addExpenseItem();
});

const removeItemEx = (id) => {
  expensesArr = expensesArr.filter((item) => item.id !== id);
  showExpenses();
  sumExpenses();
  balance();
};

const editItemEx = (item) => {
  const li = document.getElementById(item.id);
  const title = li.querySelector(".title");
  const amount = li.querySelector(".amount");
  const editBtn = li.querySelector(".edit");
  const editTitle = document.createElement("input");
  editTitle.setAttribute("type", "text");
  editTitle.className = "edit-title";
  editTitle.value = item.title;
  const editAmount = document.createElement("input");
  editAmount.setAttribute("type", "number");
  editAmount.className = "edit-amount";
  editAmount.value = item.amount;
  const saveButton = document.createElement("button");
  saveButton.innerText = "Zapisz";
  saveButton.className = "save";

  title.replaceWith(editTitle);
  amount.replaceWith(editAmount);
  editBtn.replaceWith(saveButton);

  saveButton.addEventListener("click", () => saveItemEx(item));
};

const saveItemEx = (item) => {
  const li = document.getElementById(item.id);
  const title = li.querySelector(".title");
  const amount = li.querySelector(".amount");
  const editBtn = li.querySelector(".edit");
  const editedTitle = li.querySelector(".edit-title");
  const editedAmount = li.querySelector(".edit-amount");
  const saveButtonClicked = li.querySelector(".save");

  expensesArr = expensesArr.map((expense) => {
    if (expense.id === item.id) {
      return {
        id: item.id,
        title: editedTitle.value,
        amount: Number(editedAmount.value),
      };
    } else {
      return expense;
    }
  });
  editedTitle.replaceWith(title);
  editedAmount.replaceWith(amount);
  saveButtonClicked.replaceWith(editBtn);

  showExpenses();
  sumExpenses();
  balance();
};

const createItemEx = (item) => {
  const listItem = document.createElement("li");
  listItem.id = item.id;
  listItem.className = "flex flex--space-between budget__list__item";
  const itemTitle = document.createElement("p");
  itemTitle.className = "title";
  itemTitle.innerText = item.title;
  const amount = document.createElement("p");
  amount.innerText = item.amount;
  amount.className = "amount";
  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.className = "edit";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Usuń";

  expensesList.appendChild(listItem);
  listItem.appendChild(itemTitle);
  listItem.appendChild(amount);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);

  removeButton.addEventListener("click", () => removeItemEx(item.id));
  editButton.addEventListener("click", () => editItemEx(item));
};

const showExpenses = () => {
  expensesList.innerHTML = "";
  expensesArr.forEach((item) => {
    createItemEx(item);
  });
  console.log(expensesArr);
};

let totalIncomes = 0;
let totalExpenses = 0;
let sumBalance = 0;

const balance = () => {
  sumBalance = totalIncomes - totalExpenses;
  console.log(sumBalance);
  console.log(totalIncomes);
  console.log(totalExpenses);
  if (sumBalance > 0) {
    budgetState.innerHTML = `Możesz jeszcze wydać ${sumBalance} złotych.`;
  } else if (sumBalance < 0) {
    budgetState.innerHTML = `Bilans jest ujemny. Jesteś na minusie ${sumBalance} złotych.`;
  } else {
    budgetState.innerHTML = "Bilans wynosi zero.";
  }
};
