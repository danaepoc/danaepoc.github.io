var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cats.jpg') {
        myImage.setAttribute('src', 'images/cats2.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/cats.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Look at my wonderful cats, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Look at my wonderful cats, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}