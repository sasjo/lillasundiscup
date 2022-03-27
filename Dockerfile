FROM node:16-alpine as build
WORKDIR /workspace

COPY api api
COPY webapp webapp

RUN npm ci --prefix webapp
RUN npm run build --prefix webapp
RUN npm ci --only production --prefix api

FROM node:16-alpine

WORKDIR /app

ENV PORT 8080
ENV PUBLIC_HTML /app/www

EXPOSE 8080

COPY --from=build /workspace/api /app
COPY --from=build /workspace/webapp/build /app/www

CMD ["npm", "start"]
