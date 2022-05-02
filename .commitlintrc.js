/*
 * rules type enum description
 * wip: 功能开发中，需要临时提交代码
 * feat: 新功能，已完成该功能的情况用这个，没完成用 wip
 * fix: 修复bug
 * docs: 撰写文档
 * style：代码格式（不影响代码运行的变动）
 * refactor：重构（既不是新增功能，也不是修改 bug 的代码变动）
 * test：增加测试
 * example：示例（仅用于修改 example/*）
 * merge: 解决冲突提交
 * revert: 回滚代码
 * chore: 其他更新
 * perf: 提高性能的代码更改
 * ci: 对CI配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs
 * build: 影响构建系统或外部依赖项的更改（示例范围：rollup、dockerfile、npm）
 */
module.exports = {
  //   extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'example',
        'merge',
        'revert',
        'chore',
        'perf',
        'ci',
        'build'
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
