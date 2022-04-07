function cargar() {
    $.ajax({
        url:'http://localhost:3001/api/sorteos',   // url
        type: 'get',
        success: function( data, textStatus, jQxhr ){
            let html = "";
            let i=1;
            data.torneo.forEach(element => {
                console.log(element);
                
                html += `
                <tr>
                                  <th scope="row">${i}</th>
                                  <td>${element.StreamerId}</td>
                                  <td>${element.nombreSorteo}</td>
                                  <td>${element.date}</td>
                                  <td>${element.premio}</td>
                                  <td class="button-nav" onclick="borrar();">x</td>
                                  <td class="button-nav" onclick="modificar();">mod</td>
                                </tr>
                `;
            $("#torneos_list").html(html);
            i+=1
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
