let str = 'camelCase'

let str2 = " ";

for(let i = 0 ; i < str.length){
    if(str[i] === str[i].toUpperCase()){
        str2 += " " + str[i]
        str2 += str[i];
    }
}

console.log(str2);