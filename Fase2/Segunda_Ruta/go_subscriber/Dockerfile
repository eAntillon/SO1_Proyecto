FROM golang:1.18
WORKDIR /go/src/myapp
COPY . .
RUN go mod download
ENV MONGO_DIRECTION=mongodb://mongodb_exporter:password@34.125.12.187:27017/admin?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
ENV REDIS_DIRECTION=34.136.213.196:5000
ENV TIDB_CONNECTION=grupo6:grupo6123@tcp(34.72.97.55:4000)/fase2
ENV KAFKA_DIRECTION=34.125.192.36:9092

CMD ["go","run","subscriber.go"]