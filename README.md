# vuecli3
<<<<<<< HEAD
vue-cli3脚手架
=======
<<<<<<< HEAD
vue-cli3脚手架
=======

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### vscode配置
```
vscode 自动保存配置eslint     

{
  "editor.tabSize": 2,
  "files.associations": {
      "*.vue": "vue"
  },
  "eslint.autoFixOnSave": true,
  "eslint.options": {
      "extensions": [
          ".js",
          ".vue"
      ]
  },
"eslint.validate": [
    "javascript",{
        "language": "vue",
        "autoFix": true
    },"html",
    "vue"
],
  "search.exclude": {
      "**/node_modules": true,
      "**/bower_components": true,
      "**/dist": true
  },
  "emmet.syntaxProfiles": {
      "javascript": "jsx",
      "vue": "html",
      "vue-html": "html"
  },
  "git.confirmSync": false,
  "window.zoomLevel": 0,
  "editor.renderWhitespace": "boundary",
  "editor.cursorBlinking": "smooth",
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "editor.snippetSuggestions": "top",
}
```
### 关闭eslint
```
在vue.config.js中  lintOnSave: false

或者config/index.js 文件。 将useEslint: true =》设置为 useEslint: false 
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> 这是注释:初始化项目
>>>>>>> 这是注释:初始化项目
