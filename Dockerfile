FROM node:16.14.2-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ["package.json", "package-lock.json", "./"]
USER node
RUN npm ci
COPY --chown=node:node . .
EXPOSE 8056
CMD [ "node", "nodemon" ]