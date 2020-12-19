
var button = document.getElementById("startSpeed")

$("#startSpeed").click(function (e) { 
    var text = $("#rate").val();
    console.log(text);


    var searchList = [{test:text}]
    var jsonSearchList = JSON.stringify(searchList);

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            data: jsonSearchList
        });
    });

});




