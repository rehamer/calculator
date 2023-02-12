window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      calculateMonthlyPayment(update());
      updateMonthly(calculateMonthlyPayment(update()));
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  return {
    P: +(getCurrentUIValues().amount == 0 ? 0 : getCurrentUIValues().amount),
    n: +(getCurrentUIValues().years == 0 ? 0 : getCurrentUIValues().years),
    i: +(getCurrentUIValues().rate == 0 ? 0 : getCurrentUIValues().rate),
  }
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let P = setupIntialValues().P;
  let i = setupIntialValues().i;
  let n = setupIntialValues().n;
  let monthlyPayment =  (P * i ) / (1 - (Math.pow(1 + i, -n))) / 12;
  return monthlyPayment;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

function calculateMonthlyPayment(values) {

  // I managed to seach this online
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return(formatter.format(values));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerHTML = monthly;
}




