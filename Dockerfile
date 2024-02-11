FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine as production

LABEL maintainer="Lapotor <17144397+Lapotor@users.noreply.github.com>"

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./

RUN npm ci --omit=dev

COPY --from=build /app/dist ./

EXPOSE 9991

CMD [ "node" , "main.js"]

HEALTHCHECK --timeout=10s CMD wget --no-verbose --tries=1 --spider http://localhost:9991/metrics
