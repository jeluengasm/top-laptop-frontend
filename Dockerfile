FROM node:18.14.2-slim

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN mkdir -p node_modules
RUN mkdir -p node_modules/.cache

RUN chmod -R 775 node_modules/.cache

RUN npm i

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 8080

# USER node

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
