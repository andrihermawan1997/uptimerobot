const axios = require("axios")
const urls = ["https://andrihermawan1997-music-zeroxeon01-3.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
