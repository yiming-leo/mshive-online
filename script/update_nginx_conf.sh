#!/bin/sh

# 替换 nginx.conf 中的环境变量占位符
envsubst '${NGINX_BACKEND_LOCATION},${NGINX_FRONTEND_LOCATION}' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf
