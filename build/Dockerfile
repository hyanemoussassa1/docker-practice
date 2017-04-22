FROM node:6.10

RUN apt-get update

ADD ../site1/package.json /tmp/site1/package.json

RUN cd /tmp/site1 && npm install
