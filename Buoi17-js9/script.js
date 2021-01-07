var form = document.forms.todo;
var username = form.elements.username;
var btn = form.elements.send;
alert(username.value);
alert(btn.textContent);
//
function demo(e) {
    alert("hello");
    e.preventDefault();
}