FROM node:18-alpine

ENV ACCESS_TOKEN_SECRET = '61012ba9f763ecdede2423d907840f2ff1e8ac33674c431591247bb8f7bc1e7031226927b1f1d915309b6e538961b0d3752bf918ebbdce34f2ec5620fccf2608'
ENV REFRESH_TOKEN_SECRET = 'edbe6c40f3fa0471455720f26b2463366f42970aa39bbc5e4689dbc7c3e6fc254e4891c2d9ca8a403ce9bbb47b3a966b5b931324e8c9d7f2c049524f3cd08da6'

ENV CLIENT_ID = '1068088482416-5ta3i9a1s4ki9d1fiilvdv8uiu16pot1.apps.googleusercontent.com'
ENV CLIENT_SECRET = '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'

ENV AUTH_SERVER_PORT = 4000




WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]