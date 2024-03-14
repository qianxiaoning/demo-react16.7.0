module.exports = {
    // 不再向上找
    // "root": true,
    // 脚本的运行环境
    "env": {
        "es6": true,
        "browser": true
    },
    // 指定eslint规范
    "extends": [
        "airbnb"
    ],
    // 脚本在执行期间访问的额外的全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // 指定编辑器
    // "parser": 'babel-eslint',
    // 解析器选项
    "parserOptions": {
        // 启用 ES6 语法支持
        "ecmaVersion": 2018,
        // "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        "sourceType": "module",
        // 想使用的额外的语言特性
        "ecmaFeatures": {
            // 启用 JSX
            "jsx": true
        }        
    },
    // 设置 不生效
    "settings": {
        // 装eslint-import-resolver-webpack，指定有别名的webpack文件路径，解决webpack别名在eslint的import/no-unresolved错误
        "import/resolver": {
            "webpack": {
                "config": "build/webpack.common.js"
            }
        }        
    },
    // 使用第三方插件。使用之前，npm 安装它
    // 'plugins': ["eslint-plugin-plugin2"],
    "plugins": ["react"],
    // 额外的规则或覆盖默认的规则
    "rules": {
        //允许windows开发环境
        "linebreak-style": [0 ,"error", "windows"],
        // 临时解除import置顶
        "import/first": 0,
        // 临时解除defined未用
        "no-unused-vars": 0,
        // 缩进改为4空格，默认2空格
        "indent": [0, 2],
        // 对象尾随逗号取消
        "comma-dangle": [2, "never"],
        // {}前不需空一格
        "space-before-blocks": 0,
        // react缩进
        "react/jsx-indent": [2, 4],
        // 允许js后缀
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
        // 关闭jsx中变量强制解构
        "react/destructuring-assignment": [2, "never"],
        // 取消对html标签的单标签闭合要求
        "react/self-closing-comp": [2, {
            "component": true,
            "html": false
        }],
        // 关闭方法中期望this的使用
        "class-methods-use-this": 0,
        // 关闭残疾人支持
        "jsx-a11y/click-events-have-key-events": 0,
        // 关闭html标签强制添加role
        "jsx-a11y/no-static-element-interactions": 0,
        // 关闭关键词后强制的空格
        "keyword-spacing": 0,
        // 写属性时还是单引号方便
        "jsx-quotes": [2, "prefer-single"],
        // 关闭对象文字或解构赋值的大括号内强制执行一致的换行符
        "object-curly-newline": 0,
        // 驼峰写法关闭
        "camelcase": 0,
        // 箭头函数返回要求关闭
        "arrow-body-style": 0
    }    
};