# mshive-online

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 4. Deploy to GitHub.io

#### 4.1 Customize configuration of `vue.config.js`
add codes down below to `module.exports`
```javascript
//Production Mode
publicPath: process.env.NODE_ENV === 'production'
        ? '/mshive-online/'
        : '/'
```
<strong>Remember, when you in native development & test mode, please <font color="#ffaaaa">ANNOTATE</font> these codes<strong>
#### 4.2 Compile & build
>npm run build

#### 4.3 Turn to `dist` folder, execute shell below
>cd dist

>git init

>git add -A

>git commit -m 'deploy'

#### 4.4 Deploy https://`YOURUSERNAME`.github.io/`mshive-online`
>git push -f https://github.com/<USERNAME>/mshive-online.git master:gh-pages
