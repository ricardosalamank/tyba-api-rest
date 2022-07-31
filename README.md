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
| SECRET_TOKEN | Secret pata armar el JWT|
| API_RESTAURANTS | EndPoint Api Restaurant|
| API_RESTAURANTS_KEY | Api key Restaurant|
| API_RESTAURANTS_HOST | Host Api Restaurant|




### Uso

EndPoints methods api

1. http://localhost:3004/api/v1/users/signup POST ->Crecion de nuevo usuario se validan campos requeridos con JOI
request
```json
{
	"email" : "rasawt1@gmail.com",
	"displayName": "ricwt",
	"password": "12345"
}
```

2. http://localhost:3004/api/v1/users/signin POST ->LogIn Usuario creado retorna JWT para continuar con las siguentes transacciones
request
```json
{
	"email" : "rasawt@gmail.com",
	"password": "12345"
}
```

3. http://localhost:3004/api/v1/restaurants?latitude=12.91285&longitude=100.87808 GET ->se tienen que utilizar tokens JWT en Bearer Token para validar si la autenticacion sigue vigente. ejemplo header Auth:
request
```json
Bearer Token : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MmU1YjIwYjE3MTk5MjE2ODZhOTZmZmUiLCJlbWFpbCI6InJhc2F3dEBnbWFpbC5jb20iLCJpYXQiOjE2NTkyNzYyNjIsImV4cCI6MTY2MDQ4NTg2Mn0.DSm6aWCXawtGr0rAsFAtIX7p37XB1INRL26AHKmmg-0
```

4. http://localhost:3004/api/v1/transact/ GET ->Consulta Historico transacciones es necesario Bearer Token


5. http://localhost:3004/api/v1/transact/:email GET ->Consulta Historico transacciones por usuario es necesario Bearer Token, puede probar con rasa@gmail.com



6. http://localhost:3004/api/v1/users/logout POST -> esto inhabilita el token hasta que se vuelva hacer LogIn.
request
```json
{
	"email" : "rasawt@gmail.com"
}
```

### Licencia

© 2020 Ricardo Salamanca <rasalamancam@gmail.com>

Este proyecto está bajo licencia MIT. Para más información: [LICENSE](https://raw.githubusercontent.com/tecnogo/meli-sdk/master/LICENSE)
