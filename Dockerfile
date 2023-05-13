FROM mcr.microsoft.com/devcontainers/typescript-node:0-20

# Instala las dependencias necesarias para Electron
#RUN apt-get update && \
#    apt-get install -y libgtk-3-dev libx11-xcb-dev libxtst-dev libxss1 libgconf2-dev libnss3 libasound2-dev libpulse-dev libjpeg62-turbo-dev libpng-dev libx11-dev libxcb1-dev

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . /app

# Instala las dependencias del proyecto
#RUN npm install

#CMD ["npm", "start"]