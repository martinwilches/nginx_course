# NGINX

- Servidor web
- Proxy
- Balanceador de carga

## Configuracion NGINX

Archivo principal de configuracion, localizado generalmente en el directorio `/etc/nginx`

### NGINX como servidor web

```nginx
http {
    listen 80;
    server_name example.com www.example.com;

    location / {
        root /var/www/example.com;
        index index.html index.htm
    }
}
```

> La directiva `location` define la ubicacion en el sistema de archivos desde donde se deben servidor archivos estaticos

### NGINX como Proxy reverse

```nginx
upstream backend_server_address {
    ...
    ...
}

server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://backend_server_address;
        proxy_set_header Host $host;
        proxy_set_header X-REAL-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Directivas

Funcion que realiza una accion

```nginx
auth_basic: "string"
```

## Contextos

Puede contener multiples directivas mediante una estructura de arbol

```nginx
http {
    directive: string
}
```

## Instalacion (Ubuntu)

Actualizar dependencias

```bash
sudo apt update
```

Instalar nginx

```bash
sudo apt install nginx
```

## Redirigir peticiones HTTP a HTTPS

```nginx
http {
    listen 80;
    server_name example.com www.example.com;

    # Redireccion
    return 301 https://$host$request_url;
}

server {
    listen 443;
    server_name example.com www.example.com;

    # Configuracion SSL
    ssl_certification /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certification_key /etc/letsencrypt/live/example.com/privatekey.pem;

    # Encabezados de seguridad
    add_header Strict-Transport-Security "max-age=31536000";

    location / {
        root /var/www/example.com;
        index index.html index.htm;
    }
}
```

## NGINX como balanceador de carga

```nginx
http {
    upstream myappl {
        server sr1.example.com;
        server sr2.example.com;
        server sr3.example.com;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://myappl;
        }
    }
}
```

> Por defecto el algoritmo de balanceo aplicado es Round Robin
