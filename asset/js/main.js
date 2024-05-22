const Name = prompt('Ciao, Come ti chiami?');

console.log(Name);

const YourNameElement = document.getElementById('YourName');

console.log(YourNameElement);

YourNameElement.innerHTML = 'Ciao ' + Name;