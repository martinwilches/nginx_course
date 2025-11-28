# NGINX

- Servidor web
- Proxy
- Balanceador de carga

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

### Core contexts

- Main
- Events
- Http
- Server
- Location
- Upstream
- Mail
- If
