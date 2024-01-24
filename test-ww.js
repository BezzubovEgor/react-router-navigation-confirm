console.log('Hello from WW')

fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash').then(res => res.json()).then(data => console.log('LOG', JSON.stringify(data)))
