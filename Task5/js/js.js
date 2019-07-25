function createCalendar(id, year, month) {
    var elem = document.getElementById(id);
    var mon = month - 1;
    var d = new Date(year, mon);
    var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() === mon) {
        table += '<td>' + d.getDate() + '</td>';
        if (getDay(d) % 7 === 6) {
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
}

function getDay(date) {
    var day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
}

function getInsertDate(id, month, year) {
    var elem1 = document.getElementById(id);
    var monthText = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сетнябрь", "Октябрь", "Ноябрь", "Декабрь",];
    elem1.innerText = "Календань на"+" "+monthText[month - 1] + " месяц " + year+" года.";
}

var year = +prompt("Insert Year", "");
var month = +prompt("Insert month", "")
createCalendar("calendar", year, month);
getInsertDate("text", month, year);