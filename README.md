# Vue 3 + Typescript + Vite + Gitlab CI/CD

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## setup

### install

```
npm install
```
### develop

```
npm run dev
```

### eslint

```
npm run lint
```

### build

```
npm run build
```

## 目录

```
vue3-ts-cicd
├─.commitlintrc.js   commitlint规则
├─.eslintignore
├─.eslintrc.js       eslint规则
├─.gitignore
├─.gitlab-ci.yml     ci脚本
├─.prettierrc        prettier规则
├─.versionrc
├─Dockerfile         docker构建文件
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─tsconfig.json
├─vite.config.ts
├─src
├─ci                 cicd shell脚本
| └changelog.sh
├─.husky             husky配置
|   ├─commit-msg
|   ├─pre-commit
|   ├─_
|   | ├─.gitignore
|   | └husky.sh
```