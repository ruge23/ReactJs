# Redux OMDB APP

En este ejercicio vamos a crear una APP que utilice la API de [OMDB](http://www.omdbapi.com/). Vamos a crear nuestra app utilizando __REACT__ y __REDUX__.

> Vamos a necesitar una APIKEY ya que la API de OMDB es paga. Usen `apikey=20dac387`

Con tu App podremos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.
* Poder agregar las películas a tu lista de favoritos.
* Poder sacar películas de tu lista de favoritos.
* Crear Usuarios.
* Logearse con un usuario.
* Buscar Usuarios.
* Ver el perfil de un usuario.
* Ver las películas preferidas de un usuario.

---

> Vamos a crear un REPO de GIT para cada parte del proyecto, y commitear cada vez que tengamos un componente funcionando.
> No se olviden de comenzar el repo con un __git ignore__ de node.

---

## Parte uno (un día):

En la primera parte nos concentraremos en el _front end_ solamente. Es decir, obviaremos el hecho de que implementaremos usuarios.

Podemos comenzar creando un esqueleto con la siguiente estructura:

```bash.
├── dist
├── src
│   ├── /assets
│   ├── /components
│   ├── /containers
│   ├── /redux
│   │   ├── /actions
│   │   ├── /reducers
│   │   └── store.js
│   ├── /utils
│   └── index.js
├── package.json
└── webpack.config.js
```

* __dist__: Carpeta destino del output de webpack.
* __src__: Carpeta donde estará el código fuente del front-end de nuestra app.
    * __assets__: Imágenes y otros archivos estáticos. 
    * __components__: Todos nuestros componentes de REACT junto con su CSS.
    * __containers__: Nuestros containers de REACT.
    * __redux__:  Todo lo relacionado con redux.
    * __utils__: Funciones comunes a todos, si es que hay.

Antes de empezar a codear, vamos a pensar un diseño para nuestra página y hacer una lista con los __componentes__ y __containers__ que vamos a tener.
Empezaremos por los más pequeños y simples (los puramente presentacionales sobre todo). 
Cuando nos toque crear un __container__ de _Redux_ pensaremos las props del _Estado_ que vamos a mapear al container y las acciones que van a disparar. Luego codearemos primero las acciones, luego los reducers y por último el Container.

#### Rutas

Nuestra aplicación tiene que tener un set de rutas ya definido para hacer la pagina navegable.

* `/`: la ruta de home que tiene un input para hacer la búsqueda.
* `/search`: tiene que mostrar los resultados de la búsqueda (un listado de resultados).
* `/movie/:movieId`: muestra los detalles de una película en particular.
* `/favs/`: muestra un listado de las películas favoritas, (cuando tengamos usuarios puede que esta ruta cambie).
* `/user/:userId`: va a mostrar el perfil del usuario (créenla aunque todavía no la usemos).

> Para poder emular lo de guardar a favoritos, vamos a guardar las películas favoritas en el __Estado__ de nuestra aplicación.

### Extras

Si terminaste rápido intentá implementar animaciones con estos [addOns](https://facebook.github.io/react/docs/animation.html) de React.

También pueden diferenciar la búsqueda entre series y películas, ¿esto implicaría crear otra ruta?

## Parte dos (día y medio):

Ahora vamos a tener que crear un back-end, en donde podamos persistir información de los usuarios que utilizan la app.

#### Base de Datos:

Vamos a comenzar eligiendo una BD, y creando un modelo tal que soporte los features propuestos.

Para el logeo vamos a utilizar [passport.js](http://passportjs.org/). Vamos a ver cómo se utiliza siguiendo [estos pasos](https://github.com/atralice/BackEnd/tree/master/05-Autenticacion#passport-js).

Podríamos utilizar este esqueleto para el proyecto:

```bash.
.
├── /models
├── /config
├── /routes
├── /utils
└── package.json
```

En __config__ podemos guardar la configuración de passport, y la conexión a la Base de datos, entre otros datos _sensibles_.

Vamos a probar que todo nuestro back funcione utilizando Postman antes de pasar al front-end.

Lo primero que deberíamos hacer son los formularios de logeo y registro, y pensar algún __Componente__ que envuelva todo y te _Deje pasar_ si estas logeado, si no no.

Si los componentes fueron codeados de forma ordenada, lo único que deberíamos hacer es que cuando una película es guardada como favorita en el _Estado_, también se guarde en la base de datos (controlar en qué orden se deberían realizar estas dos acciones).

### Extras

Agregá la funcionalidad de poder logearte con `facebook` usando passport.
