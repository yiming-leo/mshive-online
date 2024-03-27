# Stage 1: 通过构建参数读取github仓库的env变量，到dockerfile中，生成 SSH 密钥文件
FROM alpine:latest AS ssh-keygen-stage
WORKDIR /ssh
RUN echo "$PEM_CONTENT" > rmrf.space.pem && \
    echo "$KEY_CONTENT" > rmrf.space.key

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
COPY --from=ssh-keygen-stage /ssh/rmrf.space.pem /etc/nginx/certs/rmrf.space.pem
COPY --from=ssh-keygen-stage /ssh/rmrf.space.key /etc/nginx/certs/rmrf.space.key

CMD ["nginx", "-g", "daemon off;"]
