const {createHash} = require('crypto');
//create string hash 

function hash (input) { 
    return createHash('sha256').update(input).digest('hex');
}

// compare two hashed password 

let password = '0asdasd';
const hash1 = hash(password);
console.log(hash1);


// some time later 

// let password = 'hi-mom!';
const hash2 = hash(password);
const match = hash1 == hash2
console.log(match?'good password':'incorrect password');