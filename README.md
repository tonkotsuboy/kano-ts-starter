# TypeScript Starter with BrowserSync
## 目的
シンプルなコマンドで、TypeScriptのコンパイルを始めることを目的としています。TypeScript 2.1以上に対応しており、外部モジュール、ES5向けの`Promise`、`await/async`が使用可能です。

## 使い方

### setup

```
npm i
```

Yarnがインストールされていれば、下記の方が高速です。

```
yarn install
```

### typescript watch & browsersync
TypeScriptファイルの変更があり次第、TypeScriptのコンパイルと構文チェックを行います。TypeScriptの更新中は、基本的にこのタスクのみでOKです。停止時には `control` `C`を押してください。 また、ローカルサーバーが自動で起動します。

```
npm run start
```

### typescript compile
TypeScriptのコンパイルを行います。`ts/Main.ts`がコンパイルされます。

```
npm run tsc
```


### typescript lint
TypeScriptの構文チェックを行います。

```
npm run tslint
```

## サンプルファイルについて
`Main.ts`では、`SubModule.ts`と`EventName.ts`という2つのモジュールを読み込んでいます。webpackによって、このモジュールを解決しています。

### Promise await/asyncのテスト
TypeScript 2.1でES5向けコンパイルが可能になった`await/async`を`AsyncTest`クラスにて試せます。

`Main`の次の2箇所のコメントアウトを解除します。

```
//import AsyncTest from "./test/AsyncTest";
```

```
// new AsyncTest();`、
```

画面に一定時間毎に文字列が出力されれば成功です。

## 主な使用技術について
- typescirpt 2
- gulp 4
- webpack 2

## 注意点など
- エディターでTypeScriptの自動コンパイル機能がある場合は、OFFにしてください。

## 作成の背景について
記事「[1行のコマンドでTypeScriptのコンパイル環境が全部整うスターターキットを作りました - Qiita](http://qiita.com/tonkotsuboy_com/items/12df280b1485d396c2ab)」にて紹介しています。
