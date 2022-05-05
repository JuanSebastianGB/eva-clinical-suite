FROM node:alpine
LABEL version="1.0"
LABEL description="Clinicial Suit For medical Devices"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
