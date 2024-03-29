FROM node:16.14.2-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . .
#EXPOSE 3000
CMD [ "npm", "start" ]
