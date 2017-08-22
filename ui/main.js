console.log('Loaded!');
var newvar = document.getElementById('main-text');
newvar.innerHTML = "Changed text";

var newvar = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    newvar.style.marginLeft = marginLeft + 'px';
}
newvar.onclick = function() {
    //newvar.style.marginLeft = '90px';
    var interval = setInterval(moveRight, 100);
};