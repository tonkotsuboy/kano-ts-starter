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
また、TypeScript 2.1でES5向けコンパイルが可能になった`await/async`を`checkAsync()`にて使用しています。

## 主な使用技術について
- typescirpt 2.2
- gulp 4
- webpack 2

## 注意点など
- エディターでTypeScriptの自動コンパイル機能がある場合は、OFFにしてください。
