 const procustos =[
    {
      precio: 500,
      id: 1,
      title: "Café",
      thumbnailUrl: "https://www.maceteros.es/media/catalog/product/cache/4/image/650x/040ec09b1e35df139433887a97daa66f/c/u/cubo-negro_1.jpg"
    },
    {
      "precio": 300,
      "id": 2,
      "title": "Pizza",
      "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
      "precio": 100,
      "id": 3,
      "title": "Agua",
      "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
      "precio": 50,
      "id": 4,
      "title": "Sandía",
      "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
      "precio": 10,
      "id": 5,
      "title": "Mango",
      "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
      "precio": 150,
      "id": 6,
      "title": "Chela",
      "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
  ]



var texto_iterable=""

procustos.forEach((element) => {

    var tarjetita_html = `
    <div class="row">
              
    <div class="col-2">
</div>
    <div class="col-8">

       <div class="container-card">
        <div class ="card">
            <img src="${element.thumbnailUrl} " class "card-img-top" alt="foto">
            <h4 class ="card-litle"> card litle </h4>
            <p class ="card-text "> ${element.title}</p>
            <a href="#" class="btn btn-primary stretched-link">obtener </a>
        </div>
        </div>

    </div>
    <div class="col-2">
    </div>  
    </div>

    `

    texto_iterable += tarjetita_html
    $("#lol").html( texto_iterable )
});