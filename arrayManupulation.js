function processArray(arr) {
  return arr.map(num => {
      if (num % 2 === 0) {
          return num * num;
      } else {
          return num * 3;
      }
  });
}

function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, index) => {
      const num = numArr[index];
      if (num % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}

const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);  

const strings = ["Hello", "World", "JavaScript", "is", "Fun"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);  

