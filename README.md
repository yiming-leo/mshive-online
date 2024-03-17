<h1>🐝Mshive-Online</h1>
This project is worked for someone who always forget his 
<hr>

# ⚡Project Setup
## 🧩Basic Requirements
`node.js >= 16`<br>
`vue.js == 2.6.14`
## 🎃Use Your Own Backend Domain


## 🛠️Run Command
1. install requirements: `npm install`
2. run project: `npm run serve`
3. build project: `npm run build`
<hr>

# 💎 Deployment
## 📤 Deploy to gh-pages Branch of GitHub.io
### ⭐ <font color='#ff6666'>!Recommend</font> Auto Deploy
use gh-pages package to build CICD workflow on GitHub Actions<br>
the gh-pages package is already existed in npm install requirements, you can exec command below
#### Execute Command Below Step by Step
1. `npm install`
2. `npm run build`
3. `npm run deploy`
4. when things done, you can see the Github runner is running in Github Action Pages,
5. Github Repo Settings -> Page -> Turn on website, use `gh-pages /root`(because when use `npm run deploy` command,
   gh-pages package has help us to push built dist onto gh-pages branch, so you can see source code in gh-pages are the root of dist)
6. now you can visit your website by clicking `Visit site` button on Settings -> Github Pages
<hr>

### 🫢 <font color='#999999'>!Unrecommend</font> Customize Config Manually
#### Alter `vue.config.js`
add codes down below to `module.exports`
```javascript
//Production Mode
publicPath: process.env.NODE_ENV === 'production'
        ? '/mshive-online/'
        : '/'
```
<strong>Remember, when you in native 
development & test mode, please <font color="#ffaaaa">ANNOTATE</font> these codes</strong>

#### Compile & Build
`npm run build`
#### Git Push
turn to `dist` folder, execute shell below (modify your own github USERNAME)
```bash
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/<USERNAME>/mshive-online.git master:gh-pages
```
if you meet such this following incident:
```
Failed to connect to github.com port 443 after 21057 ms: Couldn't connect to server
```
please set git proxy
```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```
<hr>

## 📤 Deploy to Customized Server by Github Action

# 🎭Others
## 🪵Customize Vue.js
See [Configuration Reference](https://cli.vuejs.org/config/).
