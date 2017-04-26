/**
 * ローカルサーバーの起動、ファイルウォッチ用のタスク
 *
 * @author ICS-Kano
 */
// 設定ファイル
const config = require("../../build_config");
const taskName = require("../taskName");

require("./tsCompile");
require("./tsLint");

const gulp = require("gulp");

/**
 * ローカルサーバーのタスク設定
 */
gulp.task(taskName.start,
  gulp.series(
    gulp.parallel(
      taskName.tsLint,
      taskName.tsCompile
    ),
    () => {
      startWatchTasks();
    }
  )
);

/**
 * ウォッチタスクを開始します。
 */
function startWatchTasks() {

  // TypeScriptファイルのウォッチ
  gulp.watch(`${config.tsFolder}/**/*.ts`,
    gulp.series(
      gulp.parallel(
        taskName.tsLint,  // Lint
        taskName.tsCompile  // コンパイル
      )
    )
  );
}