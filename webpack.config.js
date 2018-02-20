module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/ts/main.ts",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: "bundle.js"
  },
  module: {
    rules: [
      // tslint
      {
        test: /\.ts$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "tslint-loader",
      },
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        exclude: /node_modules/,
        // TypeScript をコンパイルする
        use: "awesome-typescript-loader"
      },
      // ソースマップファイルの処理
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      ".ts"
    ]
  },
  // ローカル開発用環境を立ち上げる
  // ブラウザで http://localhost:8081/ でアクセスできるようになる
  devServer: {
    contentBase: 'build',
    port: 8080
  },
  // ソースマップを有効に
  devtool: "source-map"
};
