const { salePrice, Sales} = require("../js/sale");

// works:



describe("salePrice", () => {
      test("testing salePrice function", () => {
      expect(salePrice(10,30)).toEqual(27);
      });
 });