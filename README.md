# cdk_generator

## markdown2cdk: DynamoDB

markdown で作成した DynamoDB の仕様書から、cdk でのリソース定義を作成する。


## task

8/7 - ~~8/10~~ 8/20: とりあえず動くところまで実装。

- [x] 開発環境を整備する
  - [x] TypeScript
  - [x] cdk
- [x] markdown を作成する
  - [x] 必要なデータを調査する
- [x] markdown を index.ts 上で開く
- [ ] index.ts で DynamoDBStack.ts のファイルを作成する
- [ ] markdown -> DynamoDB を整形する
  - [ ] 必要なデータを調査する
  - [ ] markdown を修正する