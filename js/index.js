//capturamos las dos secciones del HTML para luego completarlas con las cards en cada sección
const productsContainer = document.querySelector(".section-products");
const commentsContainer = document.querySelector(".section-comments");


//llamamos a la API y procesamos los datos

fetch("https://dummyjson.com/products")

.then((response)=> response.json())

.then((data)=> {
    //tomamos 4 productos con el método slice
    const products = data.products.slice(10, 14)


    // renderizamos los productos
    let productsHTML = "";

    for (let i = 0; i < products.length; i++) {
        const prod = products[i];

        productsHTML += 
                        `
            <article class="product">
                <h2>${prod.title}</h2>
                <img src="${prod.thumnails}" alt="${prod.title}">
                <p>${prod.description.slice(0, 30)}</p>
                <h3>${prod.price}</h3>
                <div class="card-footer">
                    <a href="./detalle.html" class="Info">Más info</a>
                    <a href="./carrito.html" class="Compra">Comprar</a>
                </div>
            </article> 
                        `
    }
    
    productsContainer.innerHTML = productsHTML;
})

.catch((error)=> console.log(error))












































//<div class="comment">
//                <h3>Usuario 1</h3>
//                <p>Excelente producto super recomiendo</p>
//                <h4> Fecha: 22/07/25 </h4>
//            </div>
