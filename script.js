function greetJavaScript(name) {
    console.log("Hello from JavaScript, " + name + "!");
  }
  
  const userName = "GitHub Actions";
  greetJavaScript(userName);
  
  // Intentionally introduce a potential issue or style violation
  let valueOne = 5;
  let valueTwo = "5";
  
  if (valueOne == valueTwo) { // Using == instead of === for potential type coercion issue
    console.log("Values are equal (loose comparison)");
  }