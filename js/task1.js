const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};
function personInfo(person) {
  const { name, age, email, city } = person;
  const fullName = name + " " + age;
  const contact = email + "," + city;

  const person1 = {
    contact: contact,
    fullName: fullName,
  };
  return person1;
}
console.log(personInfo(person));
