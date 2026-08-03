FROM node:22-alpine

WORKDIR /app

COPY dist ./dist
COPY package.json ./

RUN npm install --omit=dev

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]