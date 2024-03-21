var stations = {
    key1: {
        name: "Station 1",
        hq: "http://station1.com"
    },
    key2: {
        name: "Station 2",
        hq: "http://station2.com"
    },
    // другие станции
};

var m3u = "#EXTM3U\n";
Object.keys(stations).sort(function(a, b) {
    return stations[a].name < stations[b].name? -1 : 1;
}).forEach(function(key, idx) {
    m3u += `#EXTINF:-1,${stations[key].name}\n`;
    m3u += `${stations[key].hq}\n`;
    
    if (idx === Object.keys(stations).length - 1) {
        var dl = document.createElement("a");
        dl.href = "data:text/plain;charset=utf-8," + encodeURIComponent(m3u);
        dl.download = "Radio Record [320].m3u";
        dl.style.display = "none";
        document.body.appendChild(dl);
        dl.click();
        document.body.removeChild(dl);
    }
});
