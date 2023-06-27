FROM node:18.14.2-slim

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm i

COPY . .

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
