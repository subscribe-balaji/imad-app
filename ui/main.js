var button = document.getElementById('counter');
button.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    request.open('GET', 'http://subscribebalaji.imad.hasura-app.io/counter', true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submnit = document.getElementById('submitbtn');
submit.onclick = function () {
    var names = ['name1', 'name2'];
    var list = [];
    for(i=0; i<names.length; i++) {
        list += '<li>' + namees[i] + '</li>';
    }
    var ul = document.getElementById('namelist')
    ul.innerHTML = list;
}
