//  Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    //  A single source of truth for all transactions
    let transactions = JSON.parse(localStorage.getItem("ledger")) || [];

    // --- CODE FOR THE ADD TRANSACTION PAGE (add.html) ---

    const transactionForm = document.getElementById("transaction-form");

    if (transactionForm) {
        transactionForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Grab form values
            const descInput = document.getElementById("desc");
            const amountInput = document.getElementById("amount");
            const typeSelect = document.getElementById("type");

            const desc = descInput.value.trim();
            const amount = parseFloat(amountInput.value.trim());
            const type = typeSelect.value;

            // Validate inputs
            if (!desc || isNaN(amount) || amount <= 0) {
                alert("Mischief not managed! Please provide a valid description and amount.");
                return;
            }

            // Create new transaction object
            const transaction = {
                id: Date.now(), // Unique ID spell
                desc,
                amount,
                type,
            };

            // Add to our array and save
            transactions.push(transaction);
            saveTransactions();

            // Redirect back to the main ledger to see the result
            window.location.href = "index.html";
        });
    }

    // --- CODE FOR THE MAIN LEDGER PAGE (index.html) ---

    const transactionList = document.getElementById("transaction-list");
    const balanceValue = document.getElementById("balance-value");

    // This function will run only if we are on the main page
    function displayLedger() {
        if (!transactionList || !balanceValue) {
            // If these elements don't exist, do nothing.
            return;
        }

        transactionList.innerHTML = "";
        let balance = 0;

        transactions.forEach((tx) => {
            const li = document.createElement("li");
            li.className = `transaction-item ${tx.type}`;

            li.innerHTML = `
                <span>${tx.desc}</span>
                <span>${tx.type === "income" ? "+" : "-"}${tx.amount} G</span>
                <button onclick="removeTransaction(${tx.id})">Expelliarmus</button>
            `;
            transactionList.appendChild(li);

            balance += tx.type === "income" ? tx.amount : -tx.amount;
        });

        balanceValue.textContent = `${balance.toFixed(2)} Galleons`;
        updateBalanceMessage(balance);
    }
    
    // Spell to add thematic messages to the balance
    function updateBalanceMessage(balance) {
        let message = "";
        if (balance < 0) {
            message = " — Dementors are circling your vault!";
        } else if (balance > 1000) {
            message = " — Richer than a Malfoy!";
        } else if (balance > 500) {
            message = " — Gringotts goblins are pleased.";
        }
        balanceValue.textContent += message;
    }


    // --- UNIVERSAL FUNCTIONS (Available on all pages) ---

    // Spell to remove a transaction (needs to be global)
    window.removeTransaction = (id) => {
        transactions = transactions.filter((t) => t.id !== id);
        saveTransactions();
        // Reload the current page to reflect the change
        location.reload();
    };

    // Spell to save to Gringotts' secure vault (localStorage)
    function saveTransactions() {
        localStorage.setItem("ledger", JSON.stringify(transactions));
    }
    
    // --- INITIALIZE ---
    // On page load, try to display the ledger.
    // This will only work on index.html, and that's okay!
    displayLedger();
});