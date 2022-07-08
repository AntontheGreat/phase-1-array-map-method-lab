const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const arrayOfWords = tutorials.map(tutorial => tutorial.split(" ").map(e => e[0].toUpperCase()+e.slice(1)).join(" "))
  //console.log(arrayOfWords)
  //const result = arrayOfWords.map(e => e[0].toUpperCase()+e.slice(1));
  // console.log(arrayOfWords)
  // const newSentence = arrayOfWords.join(" ")
  // console.log(newSentence)
  //return result
  return arrayOfWords
}

// const stringSplit = tutorials.split(" ");
// tutorials.charAt(0)

// function capitalize() {
//   // const words = sentence.split(" ");
//   const arrayOfWords = tutorials.map(tutorial => tutorial.split(" "))
//   console.log(arrayOfWords)
//   const result = words.map(e => e[0].toUpperCase()+e.slice(1));
//   const newSentence = result.join(" ")
//   return newSentence
// }


//.map(first => first[0].toUpperCase() + first.substring(1)).join(" ");

//const defaultString = 'what does the this keyword mean?'

// const stringSplit = defaultString.split(" ");

// console.log(stringSplit);

// stringSplit.charAt(0)