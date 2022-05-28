const productos =[
    {
      precio: 500,
      id: 1,
      title: "Café",
      thumbnailUrl: "../img/cat_flores.jpg",
      "desc": "blablabla desc"
    },
    {
      "precio": 300,
      "id": 2,
      "title": "Pizza",
      "thumbnailUrl": "https://picsum.photos/id/10/600",
      "desc": "blablabla desc"
    },
    {
      "precio": 100,
      "id": 3,
      "title": "Agua",
      "thumbnailUrl": "https://picsum.photos/id/20/600",
      "desc": "blablabla desc"
    },
    {
      "precio": 50,
      "id": 4,
      "title": "Sandía",
      "thumbnailUrl": "https://picsum.photos/id/30/600",
      "desc": "blablabla desc"
    },
    {
      "precio": 10,
      "id": 5,
      "title": "Mango",
      "thumbnailUrl": "https://picsum.photos/id/40/600",
      "desc": "blablabla desc"
    },
    {
      "precio": 150,
      "id": 6,
      "title": "Chela",
      "thumbnailUrl": "https://picsum.photos/id/50/600",
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
                <a href="" class="btn btn-primary stretched-link">precio ${element.precio} </a>
            </div>
        </div>
    </div>
</div>`
    texto_iterable += tarjetita_html
    $("#lol").html( texto_iterable )
});