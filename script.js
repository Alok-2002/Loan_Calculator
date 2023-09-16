document.getElementById("calculateBtn").addEventListener('click', calculateLoan);

function calculateLoan() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    // Check if any of the inputs are not valid numbers
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please Enter Valid Numbers For All Fields");
        return; // Exit the function to prevent further execution
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
    <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest  : ${totalInterest.toFixed(2)}</strong></p>
    `;
}
