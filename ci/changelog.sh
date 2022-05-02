#!/bin/bash

# 设置Git账号信息
git config --global user.email <邮箱地址>
git config --global user.name <用户名>

# 删除本地所有tag
git tag -l | xargs git tag -d

# 更新tag和changelog
npm run release

# 推送
git push --follow-tags origin "$CI_COMMIT_REF_NAME"