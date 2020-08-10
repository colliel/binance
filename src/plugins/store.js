export default {
    install (Vue, options) {
        Vue.prototype.$store =  {
            state: {
                symbol: "BTCUSDT"
            },
            getState(name) {
                return this.state[name]
            },
            setState(name, value) {
                this.state[name] = value;
            },
            setStateArray(arrayName, value) {
                if(!this.state[arrayName]){
                    this.state[arrayName]=[]
                }
                this.state[arrayName].push(value);
            },
            clearState(name) {
                this.state[name] = "";
            }
        }
    }
}