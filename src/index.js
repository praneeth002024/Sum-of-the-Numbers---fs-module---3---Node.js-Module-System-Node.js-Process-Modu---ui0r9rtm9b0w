const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");
try {
  // Read file content
  const data = fs.readFileSync(inputPath, "utf-8");
  // Split into tokens by whitespace
  const tokens = data.trim().split(/\s+/);
  // Extract numbers (which are at odd indices) and sum them
  let sum = 0;
  for (let i = 1; i < tokens.length; i += 2) {
    sum += Number(tokens[i]);
  }
  // Write the result to output.txt
  fs.writeFileSync(outputPath, String(sum), "utf-8");
  console.log(`Sum written to output.txt: ${sum}`);
} catch (err) {
  console.error("Error processing file:", err);
}