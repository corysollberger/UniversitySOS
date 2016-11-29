function removeDummy() {
    var elem = document.getElementById('btn');
    elem.parentNode.removeChild(elem);
    return false;
}