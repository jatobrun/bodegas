

function initMap(){
    console.log(data)
    var options = {
        zoom: 7,
        center: {lat: -1.24908, lng: -78.61675}
    }
    const map = new google.maps.Map(document.getElementById('map'), options);
    data.map((bodega) => {
        console.log(bodega)
        addMarker(bodega, map)
    })
}

function addMarker(props, map){
    console.log(props.coords)
    var marker = new google.maps.Marker({
        position: props.coords,
        map,
        title: props.title,
        
    });
    if (props.contenido){
        var infoWindow = new google.maps.InfoWindow({
            content: `<h1>${props.contenido.titulo}</h1>Part. Merc. Chatarra: ${props.contenido.mercado} </br> Ton Agosto: ${props.contenido.compras} </br> %Part: <span style=background-color:#${props.contenido.color};>${props.contenido.porcentaje}%</span>`
        });
        marker.addListener('click', () =>{
            infoWindow.open(map, marker)
        })

    }
    if (props.contenido.image){
        marker.setIcon(props.contenido.image)
    }
   
}