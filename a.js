// Test file
var a = document.getElementById("e").contentWindow.Classroom.send, b = 0;
console.log(a);
console.log(b);
setInterval(function() { 
    a({action:'join-room', 'room-id':'1155'});
    a({action:'public-message', 'room-id':'1155', 'message':b++});
}, 5);
