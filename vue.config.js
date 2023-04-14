const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    pages: {
        index: {
            entry: "examples/main.js", //入口文件
            template: "public/index.html", //使用的模板
            filename: "index.html", //文件名称
        },
    },
});
