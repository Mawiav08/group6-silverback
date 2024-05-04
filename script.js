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

// About us
let slideIndex = 1;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { 
    slideIndex = 1; 
  } 
  if (n < 1) { 
    slideIndex = slides.length; 
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

showSlide(slideIndex);

setInterval(function() {
  changeSlide(1);
}, 5000);

let highlightIndex = 1;

function showHighlight(n) {
  const slides = document.querySelectorAll('.highlight-slide');
  if (n > slides.length) {
    highlightIndex = 1;
  } else if (n < 1) {
    highlightIndex = slides.length;
  }
  
  slides.forEach(slide => slide.style.display = 'none');
  slides[highlightIndex - 1].style.display = 'block';
}

function carousel(n) {
  showHighlight(highlightIndex += n);
}

showHighlight(highlightIndex);

function handleSearch() {
    const searchInput = document.getElementById('search').value.toLowerCase(); 
    const cards = document.querySelectorAll('.sponsors .card'); 
    
    let foundCard = null;
    
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(searchInput)) {
            foundCard = card; 
        }
    });
    
    if (foundCard) {
        foundCard.scrollIntoView({ behavior: 'smooth' }); 
    } else {
        alert('Sponsor not found'); 
    }
}