const Greeting = require("./Greeting");

test("it should have correct greeting when name is supplied", () => {
  const greeting = new Greeting(); //Arrange
  const name = "Max"; //Arrange
  const result = greeting.whattup(name); //Act
  expect(result).toBe("Whattup Max"); //Assert
});
