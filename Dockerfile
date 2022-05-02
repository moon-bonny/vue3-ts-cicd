FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install --registry=http://registry.npm.taobao.org --production
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
