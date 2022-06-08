FROM node:16

WORKDIR /app

COPY package* ./

RUN npm ci
RUN npm install -g
RUN apt-get -y update
RUN apt-get -y install imagemagick

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
