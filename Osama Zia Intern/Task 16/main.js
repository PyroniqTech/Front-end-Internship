fetch('base.html')
.then(response => response.text())
.then(data => {
const temp = document.createElement('div');
temp.innerHTML = data;


document.getElementById('header').innerHTML =
temp.querySelector('header').innerHTML;


document.getElementById('footer').innerHTML =
temp.querySelector('footer').innerHTML;
});