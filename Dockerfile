FROM node:20-alpine AS build-env
COPY . /app/
WORKDIR /app
RUN npm ci
RUN npm run build

FROM node:20-alpine
RUN npm i -g serve
COPY --from=build-env /app/dist /app/dist
WORKDIR /app
EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
