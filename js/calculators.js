// Calculator functions for service.html

// SIP Planner Calculator
function calculateSIP() {
    const amount = parseFloat(document.getElementById('investmentAmount').value);
    const years = parseFloat(document.getElementById('investmentPeriod').value);
    const rate = parseFloat(document.getElementById('expectedReturn').value) / 100;
    
    if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    const result = `Future Value: ₹${futureValue.toFixed(2)}`;
    document.getElementById('sipResult').innerHTML = result;
}

// SIP Delay Cost Calculator
function calculateSIPDelay() {
    const amount = parseFloat(document.getElementById('investmentAmount').value);
    const years = parseFloat(document.getElementById('investmentPeriod').value);
    const rate = parseFloat(document.getElementById('expectedReturn').value) / 100;
    const delay = parseFloat(document.getElementById('delayMonths').value);
    
    if (isNaN(amount) || isNaN(years) || isNaN(rate) || isNaN(delay)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;
    
    // Calculate normal SIP
    const normalFV = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    // Calculate delayed SIP
    const delayedMonths = months - delay;
    const delayedFV = amount * ((Math.pow(1 + monthlyRate, delayedMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    
    const cost = normalFV - delayedFV;
    const result = `Opportunity Cost: ₹${cost.toFixed(2)}`;
    document.getElementById('sipDelayResult').innerHTML = result;
}

// SIP Need Calculator
function calculateSIPNeed() {
    const years = parseFloat(document.getElementById('investment-horizon').value);
    const target = parseFloat(document.getElementById('target-amount').value);
    const rate = parseFloat(document.getElementById('expected-returns').value) / 100;
    
    if (isNaN(years) || isNaN(target) || isNaN(rate)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;
    const sipAmount = target / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const result = `Required Monthly SIP: ₹${sipAmount.toFixed(2)}`;
    document.getElementById('sipNeedResult').innerHTML = result;
}

// Child Education Planner
function calculateChildEducation() {
    const years = parseFloat(document.getElementById('years-to-maturity').value);
    const costToday = parseFloat(document.getElementById('education-cost-today').value);
    const savingsIncrease = parseFloat(document.getElementById('estimated-increase-savings').value) / 100;
    const rate = parseFloat(document.getElementById('expected-rate-returns').value) / 100;
    const inflation = parseFloat(document.getElementById('expected-rate-inflation').value) / 100;
    
    if (isNaN(years) || isNaN(costToday) || isNaN(savingsIncrease) || isNaN(rate) || isNaN(inflation)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    // Future cost accounting for inflation
    const futureCost = costToday * Math.pow(1 + inflation, years);
    
    // Calculate required monthly investment
    const months = years * 12;
    const monthlyRate = rate / 12;
    const sipAmount = futureCost / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const result = `Future Education Cost: ₹${futureCost.toFixed(2)}<br>Required Monthly Investment: ₹${sipAmount.toFixed(2)}`;
    document.getElementById('childEduResult').innerHTML = result;
}

// Child Education Plan (alternative function name)
function calculateChildEducationPlan() {
    calculateChildEducation();
}

// Single Goal Planner
function calculateSingleGoal() {
    const cost = parseFloat(document.getElementById('goal-cost').value);
    const years = parseFloat(document.getElementById('goal-years').value);
    const savingsIncrease = parseFloat(document.getElementById('goal-savings').value) / 100;
    const rate = parseFloat(document.getElementById('goal-returns').value) / 100;
    const considerInflation = document.getElementById('goal-inflation-toggle').checked;
    const inflation = considerInflation ? parseFloat(document.getElementById('goal-inflation').value) / 100 : 0;
    
    if (isNaN(cost) || isNaN(years) || isNaN(savingsIncrease) || isNaN(rate)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    // Future value accounting for inflation
    const futureValue = cost * Math.pow(1 + inflation, years);
    
    // Calculate required monthly investment
    const months = years * 12;
    const monthlyRate = rate / 12;
    const sipAmount = futureValue / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const result = `Future Value Needed: ₹${futureValue.toFixed(2)}<br>Required Monthly Investment: ₹${sipAmount.toFixed(2)}`;
    document.getElementById('singleGoalResult').innerHTML = result;
}

// Buy a Car/Home Calculator
function calculateBuyAsset() {
    const cost = parseFloat(document.getElementById('asset-cost').value);
    const years = parseFloat(document.getElementById('asset-years').value);
    const rate = parseFloat(document.getElementById('asset-returns').value) / 100;
    const inflation = parseFloat(document.getElementById('asset-inflation').value) / 100;
    const downPaymentPercent = parseFloat(document.getElementById('asset-down-payment').value) / 100;
    const loanRate = parseFloat(document.getElementById('asset-loan-interest').value) / 100;
    const loanYears = parseFloat(document.getElementById('asset-loan-duration').value);
    
    if (isNaN(cost) || isNaN(years) || isNaN(rate) || isNaN(inflation) || isNaN(downPaymentPercent) || isNaN(loanRate) || isNaN(loanYears)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    // Future cost accounting for inflation
    const futureCost = cost * Math.pow(1 + inflation, years);
    const downPayment = futureCost * downPaymentPercent;
    
    // Calculate required monthly investment to save for down payment
    const saveMonths = years * 12;
    const monthlyRate = rate / 12;
    const sipAmount = downPayment / (((Math.pow(1 + monthlyRate, saveMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    // Calculate loan EMI
    const loanAmount = futureCost - downPayment;
    const loanMonths = loanYears * 12;
    const monthlyLoanRate = loanRate / 12;
    const emi = loanAmount * monthlyLoanRate * Math.pow(1 + monthlyLoanRate, loanMonths) / (Math.pow(1 + monthlyLoanRate, loanMonths) - 1);
    
    const result = `Future Asset Cost: ₹${futureCost.toFixed(2)}<br>
                   Down Payment Needed: ₹${downPayment.toFixed(2)}<br>
                   Required Monthly Savings: ₹${sipAmount.toFixed(2)}<br>
                   Loan EMI: ₹${emi.toFixed(2)} for ${loanYears} years`;
    document.getElementById('buyAssetResult').innerHTML = result;
}

// EMI Calculator
function calculateEMI() {
    const amount = parseFloat(document.getElementById('emi-loan-amount').value);
    const rate = parseFloat(document.getElementById('emi-interest-rate').value) / 100;
    const years = parseFloat(document.getElementById('emi-loan-duration').value);
    
    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers in all fields');
        return;
    }

    const months = years * 12;
    const monthlyRate = rate / 12;
    const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = emi * months;
    const totalInterest = totalPayment - amount;
    
    const result = `Monthly EMI: ₹${emi.toFixed(2)}<br>
                   Total Payment: ₹${totalPayment.toFixed(2)}<br>
                   Total Interest: ₹${totalInterest.toFixed(2)}`;
    document.getElementById('emiResult').innerHTML = result;
}

// EMI Calculator (alternative function name)
function calculateEmi() {
    calculateEMI();
}

// Save Tax with ELSS Calculator
function calculateTaxSavings() {
    const investment = parseFloat(document.getElementById('tax-investment').value);
    const selectedTaxSlab = document.querySelector('input[name="tax-slab"]:checked');
    
    if (isNaN(investment) || !selectedTaxSlab) {
        alert('Please enter valid numbers and select tax slab');
        return;
    }
    
    const taxRate = parseFloat(selectedTaxSlab.value.replace('%', '')) / 100;
    const maxDeduction = Math.min(investment, 150000); // 80C limit
    const taxSaved = maxDeduction * taxRate;
    
    const result = `Tax Savings: ₹${taxSaved.toFixed(2)}`;
    document.getElementById('taxResult').innerHTML = result;
}

// Toggle inflation input
function toggleInflation() {
    const inflationInput = document.getElementById('goal-inflation');
    const toggleCheckbox = document.getElementById('goal-inflation-toggle');
    if (inflationInput && toggleCheckbox) {
        inflationInput.disabled = !toggleCheckbox.checked;
    }
}

// Update down payment amount
function updateDownPaymentAmount() {
    const cost = parseFloat(document.getElementById('asset-cost').value) || 0;
    const downPaymentPercent = parseFloat(document.getElementById('asset-down-payment').value) || 0;
    const equivalentAmount = (cost * downPaymentPercent) / 100;
    document.getElementById('asset-equivalent-amount').value = equivalentAmount.toFixed(2);
}

// Initialize calculator buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all calculator forms
    document.querySelectorAll('form').forEach(form => {
        const button = form.querySelector('button[type="button"]');
        if (button) {
            button.addEventListener('click', function() {
                const formId = form.id;
                switch(formId) {
                    case 'form1': calculateSIP(); break;
                    case 'form2': calculateSIPDelay(); break;
                    case 'form3': calculateSIPNeed(); break;
                    case 'form4': calculateChildEducation(); break;
                    case 'form7': calculateSingleGoal(); break;
                    case 'form8': calculateBuyAsset(); break;
                    case 'form9': calculateEMI(); break;
                    case 'form10': calculateTaxSavings(); break;
                }
            });
        }
    });
});
