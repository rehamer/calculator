
it('should calculate the monthly rate correctly', function () {

  function update() {
    let P = 1000
    let i = 0.5
    let n = 1
    let monthlyPayment =  (P * i ) / (1 - (Math.pow(1 + i, -n))) / 12;
    return monthlyPayment;
  }

  expect(Math.round(update())).toEqual(125);
});

it("should return a result with 2 decimal places", function() {
  
  expect(calculateMonthlyPayment(900)).toEqual('$900.00');
});


