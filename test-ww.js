console.log('Hello from WW')

fetch('https://pokeapi.co/api/v2/pokemon-species/aegislash', {cache: "no-cache"}).then(console.log)

fetch('/api/hello').then(console.log)
