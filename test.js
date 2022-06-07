const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One yen should be 127.9 yen", function(){
    expect(fromDollarToYen(3.5)).toBe(447.65);
});

test('One yen are 0.8 pound', function(){
    expect(fromYenToPound(3.5)).toBe(2.8);
})
