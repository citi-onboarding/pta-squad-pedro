FROM node:20.9.0-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn generate

USER node

EXPOSE 3001

CMD ["yarn", "dev"]