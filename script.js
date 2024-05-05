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

// Goals
function addGoal() {
    // Get input values
    var goalName = document.getElementById("goal-name").value;
    var description = document.getElementById("goal-description").value;
    var deadline = document.getElementById("date").value;

    // Create goal element
    var goalElement = document.createElement("div");
    goalElement.classList.add("goal-item");
    goalElement.innerHTML = "<p>Goal Name: " + goalName + "</p><p>Description: " + description + "</p><p>Deadline: " + deadline + "</p>";

    // Create cancel button for this goal
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel Goal";
    cancelButton.onclick = function() {
        // Remove this goal from the list
        goalList.removeChild(goalElement);
    };
    goalElement.appendChild(cancelButton);

    // Append goal element to goal list
    var goalList = document.getElementById("goal-list");
    goalList.appendChild(goalElement);

    // Clear input fields
    document.getElementById("goal-name").value = "";
    document.getElementById("goal-description").value = "";
    document.getElementById("date").value = "";
}


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

