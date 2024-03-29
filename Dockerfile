FROM jrottenberg/ffmpeg:4.1-alpine
ARG CHANNEL_NAME
VOLUME ["/record"]

RUN apk add --update \
    nodejs \
    yarn
RUN mkdir /app

WORKDIR /root

COPY . /root/

RUN ["yarn"]

ENTRYPOINT ["./entry.sh"]
