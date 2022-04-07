function cargar() {
    $.ajax({
        url:'http://localhost:3001/api/streamers',   // url
        type: 'get',
        success: function( data, textStatus, jQxhr ){
            let html = "";
            let i=1;
            data.streamer.forEach(element => {
                console.log(element);
                
                html += `
                <tr>
                                  <td>${element.streamerId}</td>
                                  <td>${element.name}</td>
                                  <td>${element.username}</td>
                                  <td>${element.email}</td>
                                  <td>${element.password}</td>
                                  <td class="button-nav" onclick="borrar();">x</td>
                                  <td class="button-nav" onclick="modificar();">mod</td>
                </tr>
                `;
            $("#users_list").html(html);
            });
            data.viewer.forEach(element => {
                console.log(element);
                
                html += `
                <tr>
                                  <td>${element.viewerId}</td>
                                  <td>${element.name}</td>
                                  <td>${element.username}</td>
                                  <td>${element.email}</td>
                                  <td>${element.password}</td>
                                  <td class="button-nav" onclick="borrar();">x</td>
                                  <td class="button-nav" onclick="modificar();">mod</td>
                </tr>
                `;
            $("#users_list").html(html);
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}
function borrar(id){
    $.ajax({
        url:'http://localhost:3001/api/sorteos',   // url
        dataType: 'text/json',
        type: 'delete',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            id: nombreSorteo,
        }, // data to be submit
        success: function( data, textStatus, jQxhr ){
            alert("Guardado!!!");
            cargar();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}
$(document).ready(function(){
    cargar();
});