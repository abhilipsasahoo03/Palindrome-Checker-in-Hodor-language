function validatePalin(str) {  
  
    // to obtain total length of the word or sentence
    const len = string.length;  
  
  
    // to remove spaces from the accepted string, if there is any
    let string2 = string.replace(/ /g, "");

    
    // to obtain total length of the new string
    let len2 = string2.length;
  
    // for loop to divide the words into 2 half  
    for (let i = 0; i < len2 / 2; i++) {  
  
        // condition to check whether the first and last characters are same  
        if (string2[i] !== string2[len2 - 1 - i]) {  
            alert( 'It is not a palindrome');
              
        }  
    }  
    alert( 'It is a palindrome');  
}  
  
// accept the string or number from the prompt  
const string = prompt('Enter a word or sentence(in lowercases without punctuations) or a number: ');  
  
const value = validatePalin(string);  
  
console.log(value);