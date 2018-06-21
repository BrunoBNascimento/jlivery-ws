FROM node:8 as builder

# create a work directory inside the container
RUN mkdir /jliveryws
WORKDIR /jliveryws

COPY . .

RUN yarn install

ENV SHELL=/bin/bash

# install utilities
RUN npm install -g ts-node