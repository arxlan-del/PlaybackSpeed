
var button = document.getElementById("startSpeed")

$("#startSpeed").click(function (e) { 
    var text = $("#rate").val();
    console.log(text);


    var myVideos = document.getElementsByTagName("video")
    console.log(myVideos);

    for (let i = 0; i < myVideos.length; i++) {
        myVideos[i].playbackRate = text
    }
});





