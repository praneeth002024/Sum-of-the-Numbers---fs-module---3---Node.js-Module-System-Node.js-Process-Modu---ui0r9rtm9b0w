// const fs = require("fs");
// const path = require("path");
// const inputPath = path.join(__dirname, "input.txt");
// const outputPath = path.join(__dirname, "output.txt");
// try {
//   // Read file content
//   const data = fs.readFileSync(inputPath, "utf-8");
//   // Split into tokens by whitespace
//   const tokens = data.trim().split(/\s+/);
//   // Extract numbers (which are at odd indices) and sum them
//   let sum = 0;
//   for (let i = 1; i < tokens.length; i += 2) {
//     sum += Number(tokens[i]);
//   }
//   // Write the result to output.txt
//   fs.writeFileSync(outputPath, String(sum), "utf-8");
//   console.log(`Sum written to output.txt: ${sum}`);
// } catch (err) {
//   console.error("Error processing file:", err);
// }
const fs = require("fs");
const arr = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");
let sum = 0;
arr.forEach((item) => {
  const amount = item.split(" ")[1];  // take the number part
  sum += Number(amount);              // convert to number and add
});
fs.writeFileSync("output.txt", `${sum}`)




