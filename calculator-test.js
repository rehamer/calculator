
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 1000, years: 1, rate: 0.02};
  expect(calculateMonthlyPayment(values)).toEqual('$85.00');
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 1000, years: 2, rate: 0.05};
  expect(calculateMonthlyPayment(values)).toEqual('$44.82');
});


