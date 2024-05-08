

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9)); 




const isAdult = function(age) {
    if (age >=18) {
        return 'Adult'
    }else {
        return 'Minor'
    }   
}
console.log('Exercise 2 Result:', isAdult(21));

const isCharAVowel= (character) => {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'));

const generateEmail = (username, domain) => {
  return `${username}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


const greetUser = (Username, time) => {
  return `Good ${time}, ${Username}!`
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


const reverseString = () => {

}
console.log('Exercise 6 Result:', reverseString("rockstar"));


// No.7 keep getting errors. Don't know how to fix it

// const checkPalindrome = (string) => {
//  for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       return false {
//     else {
//       return true
//     }
// }

// // console.log('Exercise 7 Result:', checkPalindrome("radar"));





const maxOfThree = (numb_1,numb_2,numb_3) => {
  if (numb_1>numb_2 && numb_1>numb_3) {
    return `${numb_1}`
  } else if (numb_2>numb_1 && numb_2>numb_3) {
    return `${numb_2}`
  } else{
    return `${numb_3}`
  }

}
console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


const calculateTip()