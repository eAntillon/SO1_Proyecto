FROM node:17
WORKDIR /app

COPY . ./
RUN npm install
ENV SERVER_GRPC_GO=34.125.192.36:50051


EXPOSE 5000

CMD ["node", "client.js"]