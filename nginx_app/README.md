# Dockerizacion

Leer el archivo `Dockerfile` y los archivos en el directorio actual, y crear una imagen de Docker usando esas instrucciones.

```bash
docker build -t <app_name> .
```

> Ejemplo `myapp:1.0` asigna un nombre y una etiqueta a la imagen.

Lanza un contenedor a partir de la imagen creada

```bash
docker run -p <port>:<port> <appname>
```

> `port:port` hace mapeo de puertos, ejemplo `3000:3000`, el puerto 3000 del host se conecta al puerto 3000 dentro del contenedor.

## docker-compose

Crear las imagenes replica definidas en el archivo `docker-composer.yaml`

```bash
docker-compose up --build -d
```

## Configuracion HTTPS

1. Obtener un certificado SSL/TLS
2. Añadir las directivas `ssl_certificate` y `ssl_certificate_key` dentro del contexto `server` en la configuracion de `nginx`.
3. Reiniciar `nginx`.

```bash
nginx -s reload
```
