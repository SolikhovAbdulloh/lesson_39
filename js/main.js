let str = 'camelCase'

let str2 = " ";

for(let i = 0 ; i < str.length ; i++){
    if(str[i] === str[i].toUpperCase()){
        str2 += " " + str[i]
       
    }else  str2 += str[i];
}

console.log(str2);


// let str = 'camelCase';
// let str2 = " ";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         str2 += " " + str[i];
//     } else {
//         str2 += str[i];
//     }
// }

// console.log(str2); // camel Case
