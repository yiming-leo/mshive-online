# Stage 1: 通过构建参数读取github仓库的env变量，到dockerfile中，生成 SSH 密钥文件
FROM alpine:latest AS ssh-keygen-stage
WORKDIR /ssh

# 这个ARG极为重要，是接收外界参数的唯一途径
ARG PEM_CONTENT
ARG PEM_FILENAME=rmrf.space.pem
ARG KEY_CONTENT
ARG KEY_FILENAME=rmrf.space.key

RUN echo "$PEM_CONTENT" > $PEM_FILENAME && \
    echo "$KEY_CONTENT" > $KEY_FILENAME \

# 检查密钥文件内容
RUN head -n 1 $PEM_FILENAME | grep -q '^-----BEGIN CERTIFICATE-----' && \
    head -n 1 $KEY_FILENAME | grep -q '^-----BEGIN PRIVATE KEY-----'

# Stage 2: 构建Vue项目
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage3: 生成一对一的nginx（只为此项目服务）并配置项目，将配置全部打包到docker image中
FROM nginx:latest AS production-stage
# CP到镜像内的/mydata/project_file/mshive-frontend下, 名字就叫mshive-online，和nginx.conf里的location的名字相匹配
COPY --from=build-stage /app/dist /etc/nginx/html/mshive-online/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 从第一个阶段复制生成的 SSH 密钥文件到 Nginx 容器中
COPY --from=ssh-keygen-stage /ssh/$PEM_FILENAME /etc/nginx/certs/$PEM_FILENAME
COPY --from=ssh-keygen-stage /ssh/$KEY_FILENAME /etc/nginx/certs/$KEY_FILENAME

CMD ["nginx", "-g", "daemon off;"]
