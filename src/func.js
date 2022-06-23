export function unixToDate(unix) {
    var d = new Date(unix).toLocaleDateString("tr-TR");
    return d;
}

export function unixToTime(unix) {

    var t = new Date(unix).toLocaleTimeString("tr-TR");
    return t;

}


export default {};