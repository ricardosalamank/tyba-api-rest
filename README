## API de TYBA-TEST


### Requerimientos

 * Node.js 10+

### Instalación

Ejecutar estos comando dentro de la carpeta del proyecto:

`npm install`
`npm start`

### Configuración

Se debe configurar el archivo config.js en la raiz del proyecto

| Opción | Descripción |
| --- | --- |
| db | Configuracion de la conexion de la base no relacional mongodb cloud|
| port | Puerto donde va quedar expuesta nuesta app |
| SECRET_TOKEN | Scret pata armar el JWT|



### Uso

methods api
Crear Usuarios
1. http://localhost:3004/api/v1/users/signup POST
request
```json
{
	"email" : "rasawt1@gmail.com",
	"displayName": "ricwt",
	"password": "12345"
}
```

2. http://localhost:3004/api/v1/users/signin POST
LogIn Usuario creado retorna JWT para continuar con las siguentes transacciones
request
```json
{
	"email" : "rasawt@gmail.com",
	"password": "12345"
}
```

3. http://localhost:3004/api/v1/restaurants?latitude=12.91285&longitude=100.87808 GET
request
```json
Bearer Token JWT example: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MmU1YjIwYjE3MTk5MjE2ODZhOTZmZmUiLCJlbWFpbCI6InJhc2F3dEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyMjA5MDQsImV4cCI6MTY2MDQzMDUwNH0.au6TL7WmhKWyPtje9bjZPpxO1qbGVdLYdlmmvMdD364
```

4. http://localhost:3004/api/v1/users/logout POST
request
```json
{
	"email" : "rasawt@gmail.com"
}
```

### Licencia

© 2020 Ricardo Salamanca <rasalamancam@gmail.com>

Este proyecto está bajo licencia MIT. Para más información: [LICENSE](https://raw.githubusercontent.com/tecnogo/meli-sdk/master/LICENSE)
