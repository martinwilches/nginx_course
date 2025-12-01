# contiene instrucciones para construir la imagen Docker

# Tomar como base una imagen oficial de Node v22, el contenedor arranca desde ahi
FROM node:22

# Se define `app` como directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos desde el directorio local al directorio /app del contenedor
COPY server.js .
COPY index.html .
COPY images ./images
COPY package.json .

# Ejecutar `npm install` dentro del contenedor
RUN npm install

# Indica que la aplicacion escucha en el puerto 8000 dentro del contenedor
EXPOSE 8000

# Comando que se ejecuta cuando se arranca el contenedor de la imagen
CMD ["node", "server.js"]
