const productos =[
    {
      "precio": 3.000,
      "id": 1,
      "title": "macetero n°1",
      "thumbnailUrl": "../img/macetero_1.webp",
      "desc": "blablabla desc"
    },
    {
      "precio": 4.000,
      "id": 2,
      "title": "maceteron°2",
      "thumbnailUrl": "../img/macetero_2.webp",
      "desc": "blablabla desc"
    },
    {
      "precio": 10.000,
      "id": 3,
      "title": "macetero n°3",
      "thumbnailUrl": "../img/macetero_3.webp",
      "desc": "blablabla desc"
    }
]
var texto_iterable=""

productos.forEach((element) => {

    var tarjetita_html = `

<div class="col-4">
    <div class="row">             
        <div class="container-card">
            <div class ="card">
                <img src="${element.thumbnailUrl} " class "card-img-top" alt="foto">
                <h3 class ="card-litle"> ${element.title} </h3>
                <p class ="card-text "> ${element.desc} </p>
                <a href="carrito.html" class="btn btn-primary stretched-link">precio ${element.precio} </a>
            </div>
        </div>
    </div>
</div>`
    texto_iterable += tarjetita_html
    $("#lol").html( texto_iterable )
});




