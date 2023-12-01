FROM node

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3000

WORKDIR /app/src

ENTRYPOINT [ "node","index.js" ]