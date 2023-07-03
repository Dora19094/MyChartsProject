FROM node:18-alpine

ENV HIGHCHARTS_SERVER_PORT = 4003
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4003

CMD ["node", "index.js"]