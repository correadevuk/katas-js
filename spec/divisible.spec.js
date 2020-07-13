let path = require("path");
let expect = require("chai").expect;
let { divisible_by } = require("../divisible");

describe("divisible_by()", () => {
  it("calculates if input is divisible for another", () => {
    let input = 10;
    let divisor = 5;
    let actual = divisible_by(input, divisor);
    expect(actual).to.eql(true);
  });
  //   it('calculates the coins you would use to give a customer their change for $0.05p', () => {
  //     let input = 5;
  //     let actual = changeCalculator(input);
  //     expect(actual).to.eql({'5': 1});
  //   });
  //   it('calculates the coins you would use to give a customer their change for $0.20p', () => {
  //     let input = 20;
  //     let actual = changeCalculator(input);
  //     expect(actual).to.eql({'20': 1});
  //   });
  //   it('calculates the coins you would use to give a customer their change for $0.07p', () => {
  //     let input = 7;
  //     let actual = changeCalculator(input);
  //     expect(actual).to.eql({'5':1,'2':1});
  //   });
  //   it('calculates the coins you would use to give a customer their change for $0.13p', () => {
  //     let input = 13;
  //     let actual = changeCalculator(input);
  //     expect(actual).to.eql({'10':1,'2':1,'1':1});
  //   });
  //   it('calculates the coins you would use to give a customer their change for $0.98p', () => {
  //     let input = 98;
  //     let actual = changeCalculator(input);
  //     expect(actual).to.eql({'50':1,'20':2,'5':1,'2':1,'1':1});
  //   });
});
