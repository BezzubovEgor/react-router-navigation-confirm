console.log('Hello from WW')

fetch('http://localhost:3000/api/hello').then(res => res.json()).then(data => console.log('LOG', JSON.stringify(data)))
