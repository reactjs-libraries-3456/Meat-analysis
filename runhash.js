const crypto = require('crypto');
const fs = require('fs');

function generateHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath); // Read the file
    const hashSum = crypto.createHash('sha256'); // Create a SHA-256 hash
    hashSum.update(fileBuffer); // Update hash with file content
    return hashSum.digest('hex'); // Get the hash in hexadecimal format
}

// Example usage
const hash = generateHash('meatgrill-wjtjYba3oSQS1M3eWY4mrZB1686zYfELmewI2.js'); // Replace with your actual file path
console.log("SHA-256 Hash:", hash);




// function generateRandomString(length = 37) {
//     let result = '';
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < length; i++) {
//         result += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return result;
// }

// console.log(generateRandomString()); // Example output: "aZ7LmX3NpQ5dV9Y8r2Kf"
