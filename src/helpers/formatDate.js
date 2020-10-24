export function formatDate(date) {
    date = new Date(date * 1000);

    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;
    let hh = date.getHours();
    if (hh < 10) hh = "0" + hh;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return dd + "." + mm + "." + yy + " " + hh + ":" + minutes;
}