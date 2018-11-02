$(document).ready(function(){

    window.onload = function () {
      typeWriter()
    };
    var i = 0;
    var txt = 'Hello, my name is Owen Muriithi.';
    var speed = 200;
 
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("sam").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
