const data = {
  firstName: 'John',
  lastName: 'Smith',
  isAlive: true,
  age: 27,
  address: {
    streetAddress: '833 Collins Street',
    city: 'Docklands',
    state: 'Victoria',
    postalCode: '3008',
  },
  phoneNumbers: [
    {
      type: 'home',
      number: '0912312312',
    },
    {
      type: 'office',
      number: '0900100200',
    },
    {
      type: 'mobile',
      number: '+6141231231',
    },
  ],
  children: [],
  spouse: null,
};

function searchData(data, searchKey) {
  const [key, ...restKey] = searchKey.split('.');
  if (!key) {
    return data;
  }

  if (!data) {
    return undefined;
  }

  const newData = data[key];
  const newSearchKey = restKey.join('.');
  return searchData(newData, newSearchKey)
};

console.log(searchData(data, "address.streetAddress")); // "833 Collins Street"
console.log(searchData(data, "phoneNumbers.1.type")); // "office"
console.log(searchData(data, "foo.bar")); // undefined


module.exports = {
  data,
  searchData,
}
