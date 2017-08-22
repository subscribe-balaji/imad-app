console.log('Loaded!');
var newvar = document.getElementById('main-text');
newvar.innerHTML = "Changed text";

var newvar = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    newvar.style.marginleft = marginLeft + 'px';
}
newvar.onclick = function() {
    var interval = setInterval(moveRight, 100)
};

