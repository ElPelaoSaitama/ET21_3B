const productos =[
    {
      "id": 1,
      "title": "Macetas",
      "thumbnailUrl": "../img/cat_macetas.jpg",
      "desc": "Maceteros muy bonitos ;)",
      "link": "sub-pages/macetas.html"
    },
    {
      "id": 2,
      "title": "Flores",
      "thumbnailUrl": "../img/cat_flores.jpg",
      "desc": "Bonitas Flores ;)",
      "link": "sub-pages/flores.html"
    },
    {
      "id": 3,
      "title": "Plantas",
      "thumbnailUrl": "../img/cat_plantas.jpg",
      "desc": "Bonitas Plantas ;)",
      "link": "sub-pages/plantas.html"
    }
  ]
var texto_iterable=""

productos.forEach((element) => {
    var tarjetita_html = `
<div class="col-4">
    <div class="row">             
        <div class="container-card">
        <a href="${element.link}" stretched-link">
        <div class ="card">
                <img src="${element.thumbnailUrl} " class "card-img-top" alt="foto">
                <h3 class ="card-litle"> ${element.title} </h3>
                <p class ="card-text "> ${element.desc}</p></a>   
            </div>
        </div>
    </div>
    <br>
</div>`
    texto_iterable += tarjetita_html
    $("#lol").html( texto_iterable )
});