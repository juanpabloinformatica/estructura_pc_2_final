# Docker Web API
## Lenguaje, y Base de datos
* Javascript , nodeJS
* MongoDB
## Instalación y ejecución

Dirigirse a: https://labs.play-with-docker.com/
Luego en la consola presentada escribir las siguientes
instrucciones
```
git clone https://github.com/juanpabloinformatica/finalProjectEstPc.git
```
```
cd finalProjectEstPc
```
docker-compose build
```
Si quiere utilizar uno de los contenedores,
recomendable en caso de revisar base de datos.
```
docker-compose up -d
```
Si quiere ver la consola
```
docker-compose up 
```
Con esto construimos e iniciamos la aplicación.

## Funcionalidades
Nos dirijimos a insomnia REST para probar la aplicación.
La ruta para todos los procedimientos es sacada de acá:
![]('foto1.png')
![]('foto2.png')
* Conexión con la base de datos
Esto ocurre de forma automática al ejecutar la API, nos arroja un "OK" una vez lograda la conexión.

* Creación de usuario
Colocamos el request en ```POST``` y la dirección 
obtenida: 
```http://ip172-18-0-22-caanf5k33d5g009rltcg-5000.direct.labs.play-with-docker.com/crearUsuario```. En el body del request, en formato JSON, ponemos los parametros de:
```
"nombreDeUsuario": "ingrese nombre",
"clave": "ingrese clave",
"idEvento": "ingrese idEvento"
```
Esto nos devolverá un "OK" si la creación de usuario fue exitosa. En caso contrario, nos devolverá un "NOK"

* Autenticación de usuario
Colocamos el request en ```GET``` y la dirección
```http://ip172-18-0-22-caanf5k33d5g009rltcg-5000.direct.labs.play-with-docker.com/autenticar/:nombreDeUsuario/:clave/:idEvento```, donde ":nombreDeUsuario" será reemplazado por el usuario que será autenticado, ":clave" igualmente será reemplazada por la clave del usuario a autenticar, y ocurre lo mismo con ":idEvento".
Esto nos devolverá la id del usuario que ha sido autenticado. En caso contrario, se devolverá un "NOK".

* Borrar todos los usuarios
Colocamos el request en ```GET``` y la dirección
 ```http://ip172-18-0-22-caanf5k33d5g009rltcg-5000.direct.labs.play-with-docker.com/borrarUsuarios```, esto borrará todos los usuarios en la base de datos. Para la comprobación de esto, se devuelve la colección de usuarios antes de ser borrada y después del borrado por medio de la consola.

* Cargar usuarios por medio de archivo CSV
Colocamos el request en ```POST``` y la dirección ```http://ip172-18-0-22-caanf5k33d5g009rltcg-5000.direct.labs.play-with-docker.com/cargarCsv```. Adicionalmente, en el request cargamos el archivo CSV que se quiere mandar.
  ```
  nombreDeUsuario,clave,idEvento
  ```
  Ese debe ser el formato del CSV que se envie.\
  Cuando mandemos el request, se crearan los usuarios correspondientes al archivo y por cada usuario que se cree se devolverá un "OK"