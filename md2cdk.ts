import * as fs from "fs"

const generateType = (file: string[]): { [key: string]: string }[] => {
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

type TableData = {
  tableName: string
  key: { [key: string]: string }
  type: { [key: string]: string }
}
const generateOutput = (table: TableData): string => {
  const outputArray = []
  outputArray.push("import * as cdk from '@aws-cdk/core'")
  outputArray.push("import * as dynamodb from '@aws-cdk/aws-dynamodb'")
  outputArray.push("export class DynamodbStack extends cdk.Stack {")
  outputArray.push("constructor(scope: cdk.Construct, id: string) {")
  outputArray.push("super(scope, id)")
  outputArray.push(`new dynamodb.Table(this, "${table.tableName}", {`)
  outputArray.push(`tableName: "${table.tableName}",`)
  outputArray.push(`partitionKey: {name: "${Object.keys(table.key)[0]}", type: dynamodb.AttributeType.STRING}`)
  outputArray.push("})")
  outputArray.push("}}")
  outputArray.push(`export type ${table.tableName}Record = {`)
  for (const k of Object.keys(table.type)) {
    outputArray.push(`${k}: ${table.type[k]}`)
  }
  outputArray.push("}")
  return outputArray.join('\n')
}

const file = fs.readFileSync('./table.md', "utf-8").split('\n')
console.log(file)
const [key, type] = generateType(file)
const table = {
  tableName: file[0].replace('##', '').split(' ').join(''), key, type,
}
console.log(table)
const output = generateOutput(table)
fs.writeFileSync('./cdkSample/lib/DynamoDBStack.ts', output)
