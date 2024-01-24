console.log('Hello from WW')

fetch('/api/hello').then(res => res.json()).then(data => console.log('LOG', JSON.stringify(data)))
