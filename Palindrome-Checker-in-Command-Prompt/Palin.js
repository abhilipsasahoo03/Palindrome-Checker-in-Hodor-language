function validatePalin(string) {  
  
    // to obtain total length of the word or sentence
    const len = string.length;  
  
  
    // to remove spaces from the accepted string, if there is any
    let string2 = string.replace(/ /g, "");
    
    // to obtain total length if the new string
    const len2 = string2.length;
  
    // for loop to divide the words into 2 half  
    for (let i = 0; i < len2 / 2; i++) {  

        // condition to check whether the first and last characters are same  
        if (string2[i] != string2[len2 - 1 - i]) {  
            console.log( 'It is not a palindrome');
            break;  
        
        }
       
        console.log( 'It is a palindrome');
        break;  
      }
}  
  
// accept the string or number from the prompt  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let string="";
rl.question('Enter a word or sentence(in lowercase without punctuation marks) or a number: ' , string => {
    validatePalin(string);
    rl.close();
});
