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

//stworzyć warunki dla wyświetlania właściwego komunikatu i pole kwoty
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
document.getElementById("budgetState").appendChild(budgetParagraphMinus);

const incomesArr = [];
const expensesArr = [];

const addIncomeItem = () => {
  const newItem = {
    title: incomeTitle.value,
    amount: Number(incomeValue.value),
  };
  incomesArr.push(newItem);
  showIncomes();
  sumIncomes();
};
incomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addIncomeItem();
});

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
};

const showIncomes = () => {
  incomesList.innerHTML = "";
  incomesArr.forEach((item) => {
    createItemIn(item);
  });
  console.log(incomesArr);
};

const sumIncomes = () => {
  const sum = incomesArr.reduce((acc, newValue) => {
    return acc + newValue.amount;
  }, 0);
  document.getElementById("incomesValue").innerText = sum;
};
const sumExpenses = () => {
  const sum = expensesArr.reduce((acc, newValue) => {
    return acc + newValue.amount;
  }, 0);
  document.getElementById("expensesValue").innerText = sum;
};

const addExpenseItem = () => {
  const newItemEx = {
    title: expenseTitle.value,
    amount: Number(expenseValue.value),
  };
  expensesArr.push(newItemEx);
  showExpenses();
  sumExpenses();
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

  removeButton.addEventListener("click", () => {
    removeItem();
  });
};
const showExpenses = () => {
  expensesList.innerHTML = "";
  expensesArr.forEach((item) => {
    createItemEx(item);
  });
};

/*stworzyć funkcje do edytuj/usuń button
editButton.addEventListener("click", () => {
  editItem(itemTitle, amount);
});
removeButton.addEventListener("click", () => {
  removeItem();
});*/
