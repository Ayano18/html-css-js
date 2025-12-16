function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var ms = d.getMilliseconds();
    switch (day) {

        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
    }


    month = month + 1; 
    document.getElementById("test").innerHTML = hours + ":" + mins + ":" + secs;
    document.getElementById("ttt").innerHTML = day + ", " + date + "/" + month + "/" + year;
}
setInterval(printTime, 1000);