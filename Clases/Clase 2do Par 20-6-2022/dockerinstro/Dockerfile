FROM node 
RUN ["apt-get","update"]
RUN ["apt-get","install","-y","vim"]

# copia todo a esta ruta
COPY . /var/www 
# abre esta ruta el momento de iniciar
WORKDIR /var/www 
# para ejecutar el archivo
ENTRYPOINT [ "node"," index.js" ]

# USAR EL -d PARA QUE EL PROCESO CORRA EN EL BACKGROUND y no se buguee
# principalemnte al momento de runear la imagen y al momento de comenar
