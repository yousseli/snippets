fetch('http://192.168.178.24:8887/samplejson.json')
.then(data=>{return data.json()})
.then(res=>{console.log(res)})
