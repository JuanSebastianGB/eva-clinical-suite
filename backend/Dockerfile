FROM node:alpine
#Environment variable settings
ENV NODE_ENV="development"
WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
# CMD ["npm", "start"]