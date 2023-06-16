FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY dist /app
COPY package.json /app/package.json
COPY node_modules /app/node_modules


CMD [ "node", "index.js" ]