let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

const bar = document.getElementById("Bar");


ws.onmessage = (event) => {
    const bar = document.getElementById("data");

    let stockObject = JSON.parse(event.data)
    // document.write(stockObject.p);
    // var p =  document.getElementById("data");
    bar.innerHTML = stockObject.p + "$";
   
}