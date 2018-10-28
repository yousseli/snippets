// api.openweathermap.org/data/2.5/weather?q=London

// const Url= 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=0432321272e3a128ddda5f1e2aa2fb3f'

fetch('http://192.168.178.24:8887/samplejson.json')
.then(data=>{return data.json()})
.then(res=>{console.log(res)})