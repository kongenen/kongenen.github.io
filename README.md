# 使用vdoing搭建自己的博客
## vuepress
文档地址：
vuepress.vuejs.org/zh/
vuepress是基于Vue 驱动的静态网站生成器，你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。
最早是vue的团队为了vue和vue生态的项目文档需求，因为其简约和方便越来越被更多的开发者用来当作文档、博客来使用。

## vuepress-theme-vdoing
vuepress-theme-vdoing是一款简洁高效的VuePress 知识管理&博客 主题。

官方文档地址：
[doc.xugaoyi.com/pages/52d5c…](https://doc.xugaoyi.com/)

GitHub地址：
[github.com/xugaoyi/vue…](https://github.com/xugaoyi/vuepress-theme-vdoing)


## 安装和使用
```
#clone the project
git clone https://github.com/xugaoyi/vuepress-theme-vdoing.git

#enter the project directory
cd vuepress-theme-vdoing

#install dependency   这个命令会根据项目中的 package.json 文件下载和安装所有依赖的库和工具（包括 VuePress 主题、插件等）。这些依赖会被安装在一个 node_modules 文件夹中。
npm install # or yarn install

#develop  npm run dev 或 yarn dev 会启动一个本地开发服务器，通常是在 localhost:8080 或类似的端口。这个开发服务器会监控你的代码，当你对代码进行修改时，它会自动刷新页面，展示最新的更改（即所谓的 "热更新"）。

# 在 VuePress 项目中，这个命令会运行 VuePress 的开发模式，允许你在本地预览文档和网站的外观，方便调试和开发。
npm run dev # or yarn dev
```
## 部署脚本
运行deploy.sh文件
，文件内容如下

```
#!/usr/bin/env sh

#确保脚本抛出遇到的错误
set -e

#生成静态文件
npm run build

#进入生成的文件夹
cd docs/.vuepress/dist

msg='deploy'
githubUrl=git@github.com:kongenen/kongenen.github.io  # 按你的代码仓库信息进行修改

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github
#git push -f $githubUrl master # 推送到github
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
```


