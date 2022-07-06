    const li = document.getElementById('selic');
	const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json';
    const url2= 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json';
    function createNode(element) {
        return document.createElement(element);
}
function append(parent, el) {
        return parent.appendChild(el);
}
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let selic = data.pop()['valor'];
    selic = Number(selic);
    selic = selic.toFixed(3);
    document.getElementById('selic').innerHTML += selic
})
fetch(url2)
.then((resp) => resp.json())
.then(function(data) {
    let dolar = data.pop()['valor'];
    dolar = Number(dolar)
    dolar = dolar.toFixed(2) 
    document.getElementById('dolar').innerHTML += dolar
})
