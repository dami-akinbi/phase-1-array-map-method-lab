const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  let newTutorials = [];

  for (let result of tutorials) {
    let member = result.split(" ");

    let result2 = [];
    for (let word of member)
      result2.push(word[0].toUpperCase() + word.slice(1));
    result2 = result2.join(" ");
    newTutorials.push(result2);
  }

  return newTutorials;
};

// PRACTICE
// let newTutorials = [];
// for (let result of tutorials) {
//   let member = result.split(" ");

//   let result2 = [];
//   for (let word of member) result2.push(word[0].toUpperCase() + word.slice(1));
//   result2 = result2.join(" ");
//   newTutorials.push(result2);
// }
// console.table(newTutorials);
