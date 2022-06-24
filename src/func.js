export const unixToDate = (unix) => {
    var d = new Date(unix).toLocaleDateString("tr-TR");
    return d;
};

export const unixToTime = (unix) => {

    var t = new Date(unix).toLocaleTimeString("tr-TR");
    return t;

};

export const urlConvert = (paramter) => {

    return paramter.replace("-", " ").replace("sharp", "#");

}
export const textToUrl = (paramter) => {

    return paramter.replace(" ", "-").replace("#", "sharp");

}