document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
//___________________________________________


// login form
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// _____________________________________________


//goal
let goals = [];

function createGoal() {
    const nameInput = document.getElementById("new-goal-name");
    const amountInput = document.getElementById("new-goal-amount");

    const name = nameInput.value;
    const amount = amountInput.value;

    if (name.trim() === "" || amount.trim() === "") {
        alert("Please enter both a name and an amount for the goal.");
        return;
    }

    goals.push({ name, amount });

    renderGoals();

    nameInput.value = "";
    amountInput.value = "";
}

function renderGoals() {
    const goalList = document.getElementById("goal-list");
    goalList.innerHTML = "";

    goals.forEach((goal, index) => {
        const goalElement = document.createElement("div");
        goalElement.classList.add("goal");
        goalElement.innerHTML = `
            <label for="goal-name-${index}">Goal Name:</label>
            <input type="text" id="goal-name-${index}" value="${goal.name}" required>
            <label for="goal-amount-${index}">Amount:</label>
            <input type="number" id="goal-amount-${index}" value="${goal.amount}" required>
            <div class="goal-buttons">
                <button onclick="editGoal(${index})">Edit</button>
                <button onclick="deleteGoal(${index})">Delete</button>
            </div>
        `;
        goalList.appendChild(goalElement);
    });
}

function editGoal(index) {
    const nameInput = document.getElementById(`goal-name-${index}`);
    const amountInput = document.getElementById(`goal-amount-${index}`);

    const newName = nameInput.value;
    const newAmount = amountInput.value;

    if (newName.trim() === "" || newAmount.trim() === "") {
        alert("Please enter both a name and an amount for the goal.");
        return;
    }

    goals[index].name = newName;
    goals[index].amount = newAmount;

    renderGoals();
}

function deleteGoal(index) {
    goals.splice(index, 1);
    renderGoals();
}


//_____________________________________________________________________________________________


// Transactions

function addTransaction() {
    // Get input values
    var amount = document.getElementById("amount").value;
    var category = document.getElementById("category").value;
    var notes = document.getElementById("notes").value;
    var date= document.getElementById("date").value;

    // Create transaction element
    var transactionElement = document.createElement("div");
    transactionElement.classList.add("transaction");
    transactionElement.classList.add(category);
    transactionElement.innerHTML = "<p>Amount: " + amount + "</p><p>Date: " + date + "</p><p>Category: " + category + "</p>";
    if (notes !== "") {
        transactionElement.innerHTML += "<p>Notes: " + notes + "</p>";
    }
     // Create cancel button for this transaction
     var cancelButton = document.createElement("button");
     cancelButton.textContent = "Cancel Transaction";
     cancelButton.onclick = function() {
         // Remove this transaction from the list
         transactionList.removeChild(transactionElement);
     };
     transactionElement.appendChild(cancelButton);

    // Append transaction element to transaction list
    var transactionList = document.getElementById("transaction-list");
    transactionList.appendChild(transactionElement);

    
    // Clear input fields
    document.getElementById("amount").value = "";
    document.getElementById("notes").value = "";
    document.getElementById("date").value="";
}
