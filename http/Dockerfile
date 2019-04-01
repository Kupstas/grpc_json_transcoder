FROM node:latest

COPY http /app

WORKDIR /app

RUN npm install

EXPOSE 8081

CMD [ "npm", "run", "start" ]