FROM node:6.7

WORKDIR /opt/deploy/app

ADD package.json /opt/deploy/app

RUN npm install

ADD server.js /opt/deploy/app

EXPOSE 3001

CMD [ "npm", "start" ]