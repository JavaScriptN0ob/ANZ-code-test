const { searchData, data} = require('./searchData.js');

describe('searchData test', () => {
  test('search with address.streetAddress should return 833 Collins Street', () => {
    const result = searchData(data, "address.streetAddress");

    expect(result).toBe("833 Collins Street");
  });

  test('search with phoneNumbers.1.type should return office', () => {
    const result = searchData(data, "phoneNumbers.1.type");

    expect(result).toBe("office");
  });

  test('search with foo.bar should return undefined', () => {
    const result = searchData(data, "foo.bar");

    expect(result).toBeUndefined();
  })
})