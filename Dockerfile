FROM golang:1.24-alpine AS build-go
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o server ./cmd/server/main.go

FROM node:20-alpine AS build-node
WORKDIR /app
COPY ui/package.json ui/package-lock.json* ./
RUN npm install
COPY ui/ ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build-go /app/server /usr/local/bin/server
COPY --from=build-node /app/.next /app/.next
COPY --from=build-node /app/node_modules /app/node_modules
COPY --from=build-node /app/package.json /app/package.json
COPY --from=build-node /app/public /app/public
COPY --from=build-node /app/next.config.ts /app/next.config.ts

RUN echo '#!/bin/sh' > start.sh
RUN echo 'export PORT=8081' >> start.sh
RUN echo 'server &' >> start.sh
RUN echo 'export PORT=8080' >> start.sh
RUN echo 'npm start' >> start.sh
RUN chmod +x start.sh

EXPOSE 8080
CMD ["./start.sh"]
