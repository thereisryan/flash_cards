var terms =[
  "JavaScript(JS)","Operators","Variables", "Variable naming conventions","Functions", "Methods", "Arguments", "Parameters", "Return", "Chaining Methods", "Strings"
  ]

var definitions = [
  "A turing complete object oriented programming language used to make webpages interactive", "Used in programming languages to perform various functions on single or multiple data value(s)", "Used in programming languages to assign a specific value in the program's memory", "Standardized conventions for naming variables to make code more readable and avoid reserved keywords", "Much like math, used to perform specific instructions that can easily be re-used", "Built-in functions pertaining to a library or specific programming language", "Values passed in when executing a function", "Values declared when creating a function", "Returns a value", "Adding multiple methods or functions to perform multiple actions in one statement with a specific piece of data", "Data literal to be interpreted just as it appears in the quotation marks"
  ]

  let frontOfCard = ""
  let backOfCard = ""

for (let i = 0; i >= definitions.length; i++) {
  var randoNumPicker = (Math.floor(Math.random() * terms.length));
  frontOfCard = terms[randoNumPicker - 1]
  backOfCard = definitions[randoNumPicker - 1]
}
