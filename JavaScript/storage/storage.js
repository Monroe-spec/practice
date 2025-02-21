sessionStorage.setItem('key', 'value');
//is used to create session storage item

let data = localStorage
//get saved data from localStorage

localStorage.removeItem('key');
//remove saved data from localStorage

localStorage.clear();
//clear all saved data from localStorage

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));
    //fetch data from a server and log it to the console
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    //fetch data from a server and store it in a variable

    