const { numberSelling,mathNumRashHour } = require("../math");

describe("Testing...", () => {

  describe("weekley sales 1..", () => {
    test("expect 2 + 3 = 5", () => {
      const yesday = [23,56,23,56,24,678,89,35,789,96,23,154,67]
      const today = [23,56,23,56,24,678,89,35,789,56,23,154,67,23,12]
      expect(numberSelling(yesday,today)).toEqual([163, 141]);
    });

  });

  describe("weekely sales 2..", () => {
    test("expect 2 + 3 = 5", () => {
      const yesday = [23,56,23,56,24,678,89,35,789,96,23,154,67]
      const today = [23,56,23,56,24,678,89,35,789,56,23,154,67,23,12]
      expect(numberSelling(yesday,today)).not.toEqual([520,45]);
    });

  });

  describe("rush hours 1...", () => {
    test("expect 2 + 3 = 5", () => {
      const hoursrash = [{hour:'2', num: 100, state: '' },{ hour:'5', num: 4, state: '' }]
      expect(mathNumRashHour(hoursrash)).toEqual([{hour:'2', num: 100, state: 'Busy' },{ hour:'5', num: 4, state: 'Not Busy' }]);
    });

  });

  describe("rush hours 2...", () => {
    test("expect 2 + 3 = 5", () => {
      const hoursrash = [{hour:'2', num: 100, state: '' }]
      const xx = mathNumRashHour(hoursrash)
      contt = xx[0].num >= 100
      expect(contt).toEqual(true)
    });

  });
});