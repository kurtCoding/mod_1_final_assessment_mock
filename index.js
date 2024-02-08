// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

    function capitalizedStr(str) {
        return str.split(" ").map((word) => word[0].toUpperCase) + str.slice(1).join(" ");
    }

    // console.log(capitalizedStr('mickey mouse'));
    // console.log(capitalizedStr('kiera gonzalez'));

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

    function getECount(arr, target) {
        const strWithEArr = [];
     
        for (let word of arr) {
            for (let char of word) {
                if (char === target && target !== arr[0]) {
                    strWithEArr.push(word);
                }
            }
        }
        return strWithEArr;
    }

    // console.log(getECount(["ellen", "jane", "zigland", "pedestrian"], "e"));
// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

    function countOccurances(str) {
        const letterCount = {};

        for (let ele of str) {
            if (!letterCount[ele]) {
                letterCount[ele] = 1;
            } else {
                letterCount[ele]++
            }
        }
        return letterCount;
    }

    // console.log(countOccurances('asciiaske'));