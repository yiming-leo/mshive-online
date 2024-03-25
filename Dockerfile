# Stage 1: 构建Vue项目
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage2: 生成一对一的nginx（只为此项目服务）并配置项目，将配置全部打包到docker image中
FROM nginx:latest AS production-stage
# CP到镜像内的/mydata/project_file/mshive-frontend下, 名字就叫dist
COPY --from=build-stage /app/dist /etc/nginx/html/mshive/
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ssh/rmrf.space.pem /etc/nginx/certs/rmrf.space.key
COPY ssh/rmrf.space.key /etc/nginx/certs/rmrf.space.pem

CMD ["nginx", "-g", "daemon off;"]
