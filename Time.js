(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function clock() {
        var present = new Date(),
            hours = checkTime(present.getHours()),
            mins = checkTime(present.getMinutes()),
            secn = checkTime(present.getSeconds());
        document.getElementById("Tick").innerHTML = hours + ":" + mins + ":" + secn;
    }
    setInterval(clock, 1000);
})();

//The background will be set to Rich Electric Blue.
$(document).ready(function() {
    $("body").css("background-color", "#009ADA");
});

//The h2 heading will be, indigo in colour, centered and italic. The font will be from the Sans-Serif family.
$(document).ready(function() {
    $("h1").css({
        "color": "#2D4046",
        "fontFamily": "Impact, Charcoal, sans-serif",
        "text-align": "center",
        "fontStyle": "italic",
    });
});

//This is styling the text. The colour will be black, centered, italic and part of the Courier font-family. The text size will be 200 pixels.
$(document).ready(function() {
    $("p").css({
        "color": "#B8CAD1",
        "fontFamily": "'Courier New', Courier, monospace",
        "text-align": "center",
        "fontStyle": "italic",
        "font-size": "200px",
    });
});