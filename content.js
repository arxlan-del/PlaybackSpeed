
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.data !== undefined) {
        console.log(JSON.parse(msg.data));
        var all = JSON.parse(msg.data)
        console.log(all[0].test);
        var rate = all[0].test

        var myVideos = document.getElementsByTagName("video")
        console.log(myVideos);
    
        for (let i = 0; i < myVideos.length; i++) {
            myVideos[i].playbackRate = rate
        }
    
    }
 
});


setTimeout(() => {
    console.log("sadasdsadsddsashi")
}, 2000);

