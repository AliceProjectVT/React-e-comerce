export const misProductos = [
    {
        "nombre": "Arroz",
        "alt": "Foto Arroz",
        "imagen": "./img/arroz.png",
        "id": "arroz",
        "precio": 1850,
        "cantidad": 1,
        "categoria": "abarrotes"
      },
      {
        "nombre": "Azucar",
        "alt": "Foto Azucar",
        "imagen": "./img/azucar.png",
        "id": "azucar",
        "precio": 650,
        "cantidad": 1,
        "categoria": "abarrotes"
      },
      {
        "nombre": "Fideos",
        "alt": "Foto Fideos",
        "imagen": "./img/fideos.png",
        "id": "fideos",
        "precio": 1200,
        "cantidad": 1,
        "categoria": "abarrotes"
      },
      {
        "nombre": "Queso",
        "alt": "foto Queso",
        "imagen": "./img/queso.png",
        "id": "queso",
        "precio": 2600,
        "cantidad": 1,
        "categoria": "abarrotes"
      },
      {
        "nombre": "Sal",
        "alt": "Foto Sal",
        "imagen": "./img/sal.png",
        "id": "sal",
        "precio": 450,
        "cantidad": 1,
        "categoria": "abarrotes"
      },
      {
        "nombre": "Manzana",
        "alt": "Imagen de manzana",
        "imagen": "./img/manzana.png",
        "id": "manzana",
        "precio": 150,
        "cantidad": 1,
        "categoria": "frutas"
      },
      {
        "nombre": "Plátano",
        "alt": "Imagen de plátano",
        "imagen": "./img/platano.png",
        "id": "platano",
        "precio": 100,
        "cantidad": 1,
        "categoria": "frutas"
      },
      {
        "nombre": "Naranja",
        "alt": "Imagen de naranja",
        "imagen": "./img/naranja.png",
        "id": "naranja",
        "precio": 80,
        "cantidad": 1,
        "categoria": "frutas"
      },
      {
        "nombre": "Fresa",
        "alt": "Imagen de fresa",
        "imagen": "./img/fresa.png",
        "id": "fresa",
        "precio": 200,
        "cantidad": 1,
        "categoria": "frutas"
      },
      {
        "nombre": "Piña",
        "alt": "Imagen de piña",
        "imagen": "./img/pina.png",
        "id": "pina",
        "precio": 250,
        "cantidad": 1,
        "categoria": "frutas"
      },
      {
        "nombre": "Zanahoria",
        "alt": "Imagen de zanahoria",
        "imagen": "./img/zanahoria.png",
        "id": "zanahoria",
        "precio": 80,
        "cantidad": 1,
        "categoria": "vegetales"
      },
      {
        "nombre": "Lechuga",
        "alt": "Imagen de lechuga",
        "imagen": "./img/lechuga.png",
        "id": "lechuga",
        "precio": 120,
        "cantidad": 1,
        "categoria": "vegetales"
      },
      {
        "nombre": "Brócoli",
        "alt": "Imagen de brócoli",
        "imagen": "./img/brocoli.png",
        "id": "brocoli",
        "precio": 150,
        "cantidad": 1,
        "categoria": "vegetales"
      },
      {
        "nombre": "Tomate",
        "alt": "Imagen de tomate",
        "imagen": "./img/tomate.png",
        "id": "tomate",
        "precio": 100,
        "cantidad": 1,
        "categoria": "vegetales"
      },
      {
        "nombre": "Pepino",
        "alt": "Imagen de pepino",
        "imagen": "./img/pepino.png",
        "id": "pepino",
        "precio": 90,
        "cantidad": 1,
        "categoria": "vegetales"
      }

    ]
    
    export const getProduct= () => {
      return new Promise ((res )=> {
        setTimeout(() =>{
          res(misProductos)

        }, 1000)

      })

    }

    export const getUnProduct = (id) => {
      return new Promise (resolve =>{
        setTimeout(()=> {
          const producto = misProductos.find(prod.id === id );
            resolve(producto);
            

        }, 200)

      })
    }



    export const getCategorias = (idCat) => {
      return new Promise( resolve =>{
          setTimeout(()=> {
            const productosCategoria = misProductos.filter(prod => prod.categoria ===  idCat);
            resolve(productosCategoria);


          }, 200)

      } )


    }