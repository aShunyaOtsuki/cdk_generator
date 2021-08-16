import * as fs from "fs"

const generateType = (file: string[]): object[] => {
  const index = file.findIndex((r) => r.startsWith('|---|')) + 1
  const type = {}
  const key = {}
  for (let i = index; i < file.length; i++) {
    const row = file[i].split('|')
    type[row[1]] = row[2]
    if (row[3] === 'yes') {
      key[row[1]] = row[2]
    }
  }
  return [key, type]
}

const file = fs.readFileSync('./table.md', "utf-8").split('\n')
console.log(file)
const [key, type] = generateType(file)
const table = {
  title: file[0].replace('##', '').split(' ').join(''), key, type,
}
console.log(table)
const output = "console.log('test')"
fs.writeFileSync('./cdkSample/lib/DynamoDBStack.ts', output)
