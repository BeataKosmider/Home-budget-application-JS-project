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

const incomesArr = [];
const expensesArr = [];

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

//nie działa
const removeItemIn = (event, id) => {
  incomesArr = incomesArr.filter((item) => item.id !== id);
  showIncomes();
};

const createItemIn = (item) => {
  const listItem = document.createElement("li");
  listItem.id = item.id;
  listItem.classList = "flex flex--space-between budget__list__item";
  const itemTitle = document.createElement("p");
  itemTitle.innerText = item.title;
  const amount = document.createElement("p");
  amount.innerText = item.amount;
  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Usuń";

  incomesList.appendChild(listItem);
  listItem.appendChild(itemTitle);
  listItem.appendChild(amount);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);

  removeButton.addEventListener("click", (e) => removeItemIn(e, id));
};

const showIncomes = () => {
  incomesList.innerHTML = "";
  incomesArr.forEach((item) => {
    createItemIn(item);
  });
  console.log(incomesArr);
};

const sumIncomes = () => {
  const totalIncomes = incomesArr.reduce((acc, newValue) => {
    return acc + newValue.amount;
  }, 0);
  document.getElementById("incomesValue").innerText = totalIncomes;
};
const sumExpenses = () => {
  const totalExpenses = expensesArr.reduce((acc, newValue) => {
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

const createItemEx = (item) => {
  const listItem = document.createElement("li");
  listItem.id = item.id;
  listItem.classList = "flex flex--space-between budget__list__item";
  const itemTitle = document.createElement("p");
  itemTitle.innerText = item.title;
  const amount = document.createElement("p");
  amount.innerText = item.amount;
  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Usuń";

  expensesList.appendChild(listItem);
  listItem.appendChild(itemTitle);
  listItem.appendChild(amount);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);

  /* removeButton.addEventListener("click", () => {
    removeItemEx();
  });*/
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

//nie działa
const balance = () => {
  const sumBalance = totalIncomes - totalExpenses;
  console.log(sumBalance);
  if (sumBalance > 0) {
    budgetState.innerHTML = "Możesz jeszcze wydać ${sumBalance} złotych.";
  } else if (sumBalance < 0) {
    budgetState.innerHTML =
      "Bilans jest ujemny. Jesteś na minusie ${sumBalance} złotych.";
  } else {
    budgetState.innerHTML = "Bilans wynosi zero.";
  }
};

/*to do list:
edit function
editButton.addEventListener("click", () => {
  editItem(itemTitle, amount);
});

/*out of code:
const budgetParagraphPlus = document.createElement("p");
budgetParagraphPlus.innerHTML = "Możesz jeszcze wydać złotych";
budgetParagraphPlus.classList = "text--center";
document.getElementById("budgetState").appendChild(budgetParagraphPlus);

const budgetParagraphZero = document.createElement("p");
budgetParagraphZero.innerHTML = "Bilans wynosi zero";
budgetParagraphZero.classList = "text--center";
document.getElementById("budgetState").appendChild(budgetParagraphZero);

const budgetParagraphMinus = document.createElement("p");
budgetParagraphMinus.innerHTML =
  "Bilans jest ujemny. Jesteś na minusie złotych";
budgetParagraphMinus.classList = "text--center";
document.getElementById("budgetState").appendChild(budgetParagraphMinus);*/
