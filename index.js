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

const titleCased = () => 
{
  return tutorials.map((sentence) => 
  {
    const newArr = sentence.split(" ")

    const upSent = newArr.map((word)=> 
    {
      let uLet = word.charAt(0).toUpperCase(); 
      let uWord = uLet + word.slice(1);
      return uWord;
    });

    return upSent.join(" ")
  })

}