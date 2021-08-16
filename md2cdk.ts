import * as fs from "fs"

const file = fs.readFileSync('./table.md', "utf-8")
console.log(file); // read table.md as string
const output = "console.log('test')"
fs.writeFileSync('./cdkSample/lib/DynamoDBStack.ts', output)
