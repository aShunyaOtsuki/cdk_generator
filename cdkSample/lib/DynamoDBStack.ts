import * as cdk from '@aws-cdk/core'
import * as dynamodb from '@aws-cdk/aws-dynamodb'
export class DynamodbStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id)
    new dynamodb.Table(this, "GameTable", {
      tableName: "GameTable",
      partitionKey: { name: "title", type: dynamodb.AttributeType.STRING }
    })
  }
}
export type GameTableRecord = {
  title: string
  platform: string
}