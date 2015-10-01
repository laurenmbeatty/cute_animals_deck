/**
 * Created by Lauren on 10/1/15.
 */
$(function() {
//    //function
    var id = 0;
    var created = "";

    for (var i = 0; i < 6; i++) {
        id = i;
        created = "/cute/" + id;
        getAnimal(created);

    }


    var pictureArray = [];


    function getAnimal(created) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: created,
            complete: function () {
                console.log("something");
            },
            success: function (data) {
                console.log(data);
                var picture = data;
                pictureArray.push(picture.path);
                //shuffle(pictureArray);
                //console.log(pictureArray);

                $(".new-deck").on('click', function () {
                    shuffle(pictureArray);

                    for(var k = 0; k<pictureArray.length; k++) {
                        var $img = $("<img src=" + pictureArray[k] + ">");
                        $(".toappend").append($img);

                    }

                });
            },
            error: function (request, errorType, errorMessage) {
                alert(errorType + errorMessage);
            }

        });
    }

        function shuffle(pictureArray) {
            for (var j, x, i = pictureArray.length; i; j = Math.floor(Math.random() * i), x = pictureArray[--i], pictureArray[i] = pictureArray[j], pictureArray[j] = x);
            return pictureArray;
        };





});






//function shuffle(array) {
//    var currentIndex = array.length, temporaryValue, randomIndex ;
//
//    // While there remain elements to shuffle...
//    while (0 !== currentIndex) {
//
//        // Pick a remaining element...
//        randomIndex = Math.floor(Math.random() * currentIndex);
//        currentIndex -= 1;
//
//        // And swap it with the current element.
//        temporaryValue = array[currentIndex];
//        array[currentIndex] = array[randomIndex];
//        array[randomIndex] = temporaryValue;
//    }
//
//    return array;
//}