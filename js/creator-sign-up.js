function registrar() {
    let txt_nombre = $("#full-name").val();
    let txt_username = $("#nickname").val();
    let txt_email = $("#email").val();
    let txt_age = $("#age").val();
    let txt_country = $("#country").val();
    let txt_password = $("#password").val();
    console.log(txt_nombre);
    console.log(txt_username);
    console.log(txt_email);
    console.log(txt_age);
    console.log(txt_country);

    $.ajax({
        url:'http://localhost:3001/streamers',   // url
        dataType: 'text/json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            name: txt_nombre,
            username: txt_username,
            email: txt_email,
            password: txt_password,
            age:txt_age,
            country:txt_country,

        }, // data to be submit
        success: function( data, textStatus, jQxhr ){
            alert("Guardado!!!");
            cargar();
            window.location.replace("./index.html");
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
            alert('Error al crear la cuenta');
            window.location.replace("./login.html");
        }
    });
}
