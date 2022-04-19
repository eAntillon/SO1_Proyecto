FROM golang:latest

WORKDIR /
COPY . . 

FROM golang:1.18.0-alpine3.15
WORKDIR /go/src/myapp
COPY . .
RUN go get ./

ENV KAFKA_DIRECTION=host.docker.internal:9092

EXPOSE 50051

CMD ["go", "run", "server.go"]