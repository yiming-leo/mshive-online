<h1>🐝Mshive-Online</h1>

[![GitHub Stars](https://img.shields.io/github/stars/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online/stargazers)
[![GitHub Watchers](https://img.shields.io/github/watchers/yiming-leo/mshive-online.svg?style=social)](https://github.com/yiming-leo/mshive-online/watchers)
[![GitHub Code Size](https://img.shields.io/github/languages/code-size/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/release/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online/releases)
[![GitHub Issues](https://img.shields.io/github/issues/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online/pulls)
[![Contributors](https://img.shields.io/github/contributors/yiming-leo/mshive-online.svg)](https://github.com/yiming-leo/mshive-online/graphs/contributors)

# 🧭1. Introduction

💦 This project is worked for someone who always forget his items. Now you can write down your things here to easy-find!

💪 You can try it now, welcome to click for downloading!

💕 If you feel this product is pretty good, please click `⭐stars` and `👁️watch`, thanks!

## 🧈 1.1 Quick Start

### 🥇1.1.1 Native Run

the following versions are required:<br>
`node.js >= 16`

then run these command in your native env:

1. install requirements: `npm install`
2. run project: `npm run serve`

### 🥈1.1.2 Server Run

please jump to
[⚽4.2.1 Use Github Action to build CI/CD Pipelines](#421-use-github-action-to-build-cicd-pipelines)

### 🥉1.1.3 gh-pages Run

execute one command to run on the github.io

`npm run deploy`

## 🚀 1.2 Version Review

| Function            | Description                                                                   | Status | Version |
|---------------------|-------------------------------------------------------------------------------|--------|---------|
| Items Writing Down  | Basic Item Writing & Managing System                                          | ✔️     | 0.1.0   |
| Bookmark Append     | Quickly generate writing drafts by specific command                           | ✔️     | 0.2.0   |
| Migration History   | Afford migration history for searching history                                | ✔️     | 0.3.0   |
| Quick Search        | Provides Quick Search function in Manage Tabs                                 | ✔️     | 0.4.0   |
| Image Recognition   | Use Aliyun's Image Recog API for recognizing items automatically              | ✔️     | 0.5.0   |
| Items Auto Classify | Provides auto classify by recognizing images                                  | ❌      | 1.0.0   |
| Grocery Analysis    | Supports analysis of grocery, make conclusion for easy-forgetting things etc. | ❌      | 1.1.0   |

<hr>

# ⚡2. Project Setup

## 🧩2.1 Basic Requirements

`node.js >= 16` (if you want run project in native env)

## 🎃2.2 Use Your Own Backend Domain

for more information of using fronted and backend project, please jump to
[🥐4.2 Deploy to Customized Server by Github Action](#42-deploy-to-customized-server-by-github-action)

## 🛠️2.3 Run Command

1. install requirements: `npm install`
2. run project: `npm run serve`
3. build project: `npm run build`

<hr>

# 🏉3. Features

## 3.1 Architectures

the backend modules are followed:
![img3.png](readme/img3.png)

the components of whole system are followed:
![img4.png](readme/img4.png)

## ✈️3.2 APIs

## 🧆3.3 Functions

# 💎4. Deployment

## 📤4.1 Deploy to gh-pages Branch of GitHub.io

### ⭐4.1.1 <font color='#ff6666'>Recommend</font> Auto Deploy

use gh-pages package to build CICD workflow on GitHub Actions<br>
the gh-pages package is already existed in npm install requirements, you can exec command below

#### Execute Command Below Step by Step

1. `npm install`
2. `npm run build`
3. `npm run deploy`
4. when things done, you can see the Github runner is running in Github Action Pages,
5. Github Repo Settings -> Page -> Turn on website, use `gh-pages /root`(because when use `npm run deploy` command,
   gh-pages package has help us to push built dist onto gh-pages branch, so you can see source code in gh-pages are the
   root of dist)
6. now you can visit your website by clicking `Visit site` button on Settings -> Github Pages

### 🫢4.1.2 <font color='#999999'>Unrecommend</font> Customize Config Manually

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

## 🥐4.2 Deploy to Customized Server by Github Action

### ⚽4.2.1 Use Github Action to build CI/CD Pipelines

the total data req route is:
![data req diagram](readme/img1.png)

💡💡💡<b>The Following Environments are Necessary to Deploy</b>💡💡💡

| Environment      | How Many | Attribute                                                                 | Remark                                                                                                                                                        |
|------------------|----------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Server(like ECS) | 1        | Docker inside<br> Ports Opened<br> Root & User with Docker & rw Authority | With a <font color='#ff6666'><b>none-Nginx-Container Docker</b></font> <br> Opened 443,80, 22... Ports(because we will package nginx into docker image after) |
| Your.Domain      | 1        | Full Access<br> DNS belong to Cloudflare                                  | If your DNS is Origin(like Aliyun/HiChina), you should change to DNS belong to Cloudflare's                                                                   |
| Cloudflare SSL   | 1        | Full Access<br> SSL is bound with Your.Domain                             | You have bound Domain with SSL                                                                                                                                |
| Clear Path       | /        | Make sure your Server has a clean path to store the project               | like `/mydata/project_file`, we will store a docker tar file in this path                                                                                     |
| Github Repo Env  | 7        | the 7 attributes will have descriptions followed⬇️                        | Github Repo -> Settings -> Secrets & Variables -> Actions -> New repo secret                                                                                  |

Github Repo Env followed⬇️

| Secrets Name            | E.G.            | Description                                                                                          |
|-------------------------|-----------------|------------------------------------------------------------------------------------------------------|
| NGINX_STORE_PATH        | /app/data       | a clean path for docker image's storage, like `/mydata/project_file`                                 |
| NGINX_BACKEND_LOCATION  | mshive-frontend | web frontend path in nginx.conf                                                                      |
| NGINX_FRONTEND_LOCATION | mshive-backend  | web frontend path in nginx.conf                                                                      |
| ROOT_DOMAIN_NAME        | baidu.com       | your.domain                                                                                          |
| SERVER_HOST             | 127.0.0.1       | public ipv4 of your server                                                                           |
| SSH_CONNECT_DOMAIN      | ssh.baidu.com   | ssh domain of your server                                                                            |
| SSH_CONNECT_USERNAME    | root            | ssh username of your server(<b>have authority of rw & docker</b>)                                    |
| SSH_DOMAIN_KEY          | xxx             | the SSL Key, one line, start with `-----BEGIN PRIVATE KEY-----`, can be found on your cloudflare.com |
| SSH_DOMAIN_PEM          | xxx             | the SSL PEM, one line, start with `-----BEGIN CERTIFICATE-----`, can be found on your cloudflare.com |
| SSH_PRIVATE_KEY         | ssh key-gen     | use key-gen to connect to your server with no password                                               |

When you have prepared things which just mentioned before, and committed to your repo once, the CI/CD & Github Action
will run automatically.

the details of CI/CD pipeline is:
![CI/CD pipelines](readme/img.png)

<hr>

# 🎭5. Others

## 🪵5.1 Customize Vue.js

See [Configuration Reference](https://cli.vuejs.org/config/).

## 🧾5.2 License

Please see details of [License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
