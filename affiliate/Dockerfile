FROM node:latest

COPY affiliate/ /app
COPY proto/ /app

WORKDIR /app

RUN npm install --unsafe-perm
RUN npm rebuild

EXPOSE 50061

CMD [ "node", "grpc-server.js" ]