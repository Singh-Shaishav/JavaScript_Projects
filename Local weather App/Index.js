$(document).ready(function () {
    //$('.short').hide();
    if (navigator.geolocation) {
        var currentPosition = "";
        navigator.geolocation.getCurrentPosition(function (position) {
            currentPosition = position;
            var latitude = currentPosition.coords.latitude;
            var longitude = currentPosition.coords.longitude;
            url = 'http://api.weatherapi.com/v1/current.json?key=e7c0fa3e423d48e7a01165329233003&q=';
            $.getJSON(url + latitude + ',' + longitude, function (data) {
                var data = JSON.stringify(data);
                var json = JSON.parse(data);
                var country = json.location.country;
                var city = json.location.name;
                var state = json.location.region;
                var temp = json.current.temp_c;
                var temp_f = json.current.temp_f;
                var last_updated = json.current.last_updated.replace('-', ' ');

                var wind = json.current.wind_kph;
                var humidity = json.current.humidity;
                var time = json.location.localtime.split(' ')[1];
                var cloud = json.current.cloud;
                
                $('#weather').html(city + ', ' + state + ', ' + country);

                if (temp < 18) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/01/02/03/trees-2562807_960_720.jpg)'
                    });
                    $('#temp').html("<h1>It's a pretty cold day today...<hr></h1>");
                } else if (temp > 10 && temp < 28) {
                    $('.grey-jumbo').css({
                        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/22/17/40/hill-2165759_960_720.jpg)'
                    });
                    $('#temp').html("<h1>It's a sunny day today...<hr></h1>");
                } else {
                    $('.grey-jumbo').css({
                        backgroundImage:
                            'url(https://cdn.pixabay.com/photo/2015/03/26/10/29/sand-dunes-691431_960_720.jpg)'
                    });
                    $('#temp').html("<h1>It's a hot day today...<hr></h1>");
                }

                $('.info1').html(time);
                $('.info2').html( 'Wind ' + wind + 'km/hr');
                $('.info3').html(temp + '&#8451');
                var yes = true;
                $('#switch').on('click', function(){
                    if(yes) {
                        $('.info3').html(temp_f + '&#8457');
                        $('#switch').html('Show in Celcius');
                        yes = false
                    } else {
                        $('.info3').html(temp + '&#8451');
                        yes = true;
                    }
                })
                if (cloud <= 30){
                    $('.info5').html('Clear Sky');
                } else {
                    $('.info5').html('Cloudy');
                }
                
                $('.info6').html('Humidity ' + humidity + '%');
                

            }
            );
        })
    }
});