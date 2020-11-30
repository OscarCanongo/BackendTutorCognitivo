
## Estructura Backend Tutor Cognitivo.
#
## -Backend
```
-- config
    -- db.js   
    
-- controllers
    -- authController.js
    -- dominioController.js
    -- preguntaController.js
    -- problemaController.js
    -- taxonomiaController.js
    -- temaController.js
    -- tutorController.js
    -- usuarioController.js

-- Models
    -- Dominio.js
    -- Pregunta.js
    -- Problema.js
    -- Taxonomia.js
    -- Tema.js
    -- Usuario.js 

-- middleware
    -- auth.js 

-- routes
    -- auth.js
    -- domino.js
    -- pregunta.js
    -- problema.js
    -- taxonomia.js
    -- tema.js
    -- tutor.js
    -- usuarios.js

index.js
package.json
```
#
## Config.

### db.js:
En este apartado realizamos la conexión con la Base de Datos, estableciendo los parametros necesarios para realizar los procedimientos


Si la conexión se realiza con éxito ocurrirá lo siguiente:

```js 
console.log('DB Conectada');
```
De lo contrario arrojará los errores que impidieron la conexión y la app se detendrá.
```js
console.log('hubo un error')
        console.log(error);
        process.exit(1); // Detener la app
```

#
## Controladores.
En esta sección encontraremos los controladores de la base de datos de nuestro backend. Como sabemos que este proyecto irá evolucionando todos los controladores realizan las funciones de un CRUD, de esta forma futuras implementaciones se encontrarán cubiertas. 
Entre los controladores encontramos los siguientes.
```js
-- controllers
    -- authController.js <- Externo al modelo
    -- dominioController.js
    -- preguntaController.js
    -- problemaController.js
    -- taxonomiaController.js
    -- temaController.js
    -- tutorController.js
    -- usuarioController.js
```
A continuación mostraremos la estructura de un controlador, pero es necesario entender que todos se encuentran compuestos de la misma forma

### GET
Obteniendo información.
En caso de exito devuelve un JSON.
En caso de fallo retorna un ``500``, el motivo del error y una alerta al admnistrador del mismo.
```js
//Get
exports.getDominio = async(req, res) => {
    try {
        const dominio = await Dominio.find();
        res.json({ dominio });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

```

### POST // Create.
Almacenando información en nuestra base de datos.
Esta función en caso de ocurrir con éxito, regresa un mensaje confirmando que se ha creado un nuevo registro.
De lo contrario retorna un ``500``, el error y un mensaje de alerta.
```js
// Post
exports.create = async(req, res) => {

    const dominio = new Dominio(req.body);

    //guarda el dominio en la db   
    try {
        await dominio.save();

        //Todo bien
        res.json({ msg: 'Dominio creado correctamente' });


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};
```

### Delete 
Esta función se encarga de eliminar registros en nuestra base de datos.
Funciona buscando el ID y después procede a eliminar el registro indicado. Es por eso que escribimos ciertas validaciones para garantizar su funcionamiento. De no encontrar el ID la función regresa un ``404`` y nos informa que el identificador no ha sido encontrado.

De encontrar lo que necesitamos eliminar nos regresará un mensaje donde se ha cumplido la instrucción de lo contrario nos retornará un ``500`` y el código de error.

```js
//delete
exports.delete = async(req, res) => {
    const dominio = Dominio(req.body);
    try {

        //id
        let dominio = await Dominio.findById(req.params.id);

        //Revisamos si existe el id 
        if (!dominio) {
            return res.status(404).send("Id no encontrada");
        }

        //Eliminar el proyecto
        await Dominio.findOneAndRemove({ _id: req.params.id });

        //Todo bien
        res.json({ msg: 'Dominio eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};
```

### Update.
Usamos este controlador cuando es necesario actualizar un registro en nuestra base de datos. Al igual que en el Delete trabajamos buscando una ID y de la misma forma en caso de no encontrar la ID seleccionada nos devolverá un `404`, en caso de que la transacción sea exitosa seremos notificados, si esta falla obtendremos un ``500`` y nos mostrará el error y de igual manera una notificación

```js 
//   update


exports.update = async(req, res) => {
    const { materia, ejercicio, nivelEjercicio, material } = Dominio(req.body);

    const nuevoDominio = {}

    try {
        let dominio = await Dominio.findById(req.params.id);
        if (!dominio) {
            return res.status(404).send("Id no encontrada");
        }

        //Update
        dominio = await Dominio.findByIdAndUpdate({ _id: req.params.id }, { $set: nuevoDominio }, { new: true });
        res.json({ msg: 'Dominio actualizado correctamente' });
        res.json({ dominio });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};
```

#
## Modelos.

Se componen de la siguiente forma y es lo que dictará el modelo de cada una de nuestras colecciones en nuestra base de datos.

### Estructura
```
-- Models
    -- Dominio.js
    -- Pregunta.js
    -- Problema.js
    -- Taxonomia.js
    -- Tema.js
    -- Usuario.js 
```

Para fines prácticos cada estructura del modelo la encontrarán en el directorio /Modelos/ en este apartado describiremos brevemente como declaramos los datos y sus tipos de datos

Cada declaración lleva nombre y lo que necesitemos agregarle va a depender de lo que nosotros estemos buscanod desarrollar. Podemos hacer uso de todas las características a nuestra disposicón para agregarle valores a los mismos
```js
const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});
```

#
## Autenticación.

### Estructura.
```
-- middleware
    -- auth.js 
```
Usada para garantizar que sólo accedan las personas autorizadas a nuestro sistema, al tratar con una gran cantidad de datos personales sensibles, implementamos esto porque siempre es necesario proteger la privacidad del usuario, por lo que mediante el uso de Tokens garantizamos que sólo las personas con las credeciales correctas accedan.

A continuación mostramos las restricciones del mismo

```js
if(token) {
            // comprobar el JWT
            try {
                const usuario = jwt.verify(token, process.env.SECRETA );
                req.usuario = usuario;
            } catch (error) {
                console.log(error);
                console.log('JWT no valido');
            }
        } else {
            return res.status(401).json({msg: "No hay token, permiso no valido"});
        }
```
#
## Rutas

Para este proyecto usamos el enrutamiento estático por practicidad. Por lo que las definimos antes de realizar el renderizado de nuestra app. A continuación mostramos la estructuras de las mismas 

### Estructura.

```
-- routes
    -- auth.js
    -- domino.js
    -- pregunta.js
    -- problema.js
    -- taxonomia.js
    -- tema.js
    -- tutor.js
    -- usuarios.js
```

#
## Index del Proyecto.

En este apartado, creamos el servidor, nos conectamos a la base de datos, habilitamos CORS y express, definimos el puerto, importamos las rutas requeridas y finalmente arrancamos el servicio. Les adjunto un breve estracto de cómo está compuesto el mismo.

```js
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express(); //Crear el servidor

conectarDB(); //Conectar a la base de datos

app.use(cors()); //habilitar cors


app.use(express.json({ extended: true})); //Habilitar express.json


const port = process.env.PORT || 4000 //Puerto del server

//Importar rutas
app.use('/pregunta', require('./routes/pregunta'));



//Arrancar server
app.listen(port, '0.0.0.0', () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
});


```