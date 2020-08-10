const binance = {
    install (Vue) {
        Vue.prototype.$getOrderBook = function (symbol) {
            fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
                .then(response => response.json())
                .then(json => {
                    this.data = json
                    this.loading = false
                })
        }

        Vue.prototype.$subscribeOrderBook = function (symbol) {
            let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`)
            ws.onopen = function(e) {
                const param = symbol.toLowerCase() + '@depth'
                ws.send(JSON.stringify({
                    method: "SUBSCRIBE",
                    params: [
                        param
                    ],
                    id: 1
                }))
            }
            ws.onmessage = function(msg) {
                //console.log(JSON.parse(msg.data).a)
                this.message = JSON.parse(msg.data).a
            }
        }
    }
}

export default binance