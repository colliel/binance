<template>
    <Loader v-if="loading"/>
    <div v-else class="container">
        <div class="bid">
            <div class="table-header">
                <div class="table-header_item item1">
                    Amount
                </div>
                <div class="table-header_item item2">
                    Price
                </div>
                <div class="table-header_item item3">
                    Total
                </div>
            </div>
            <div class="table-content">
                <TableContent v-for="(row, i) of data.bids"
                              :row="row"
                              :key="i"
                />
            </div>
        </div>
        <div class="ask">
            <div class="table-header">
                <div class="table-header_item item1">
                    Amount
                </div>
                <div class="table-header_item item2">
                    Price
                </div>
                <div class="table-header_item item3">
                    Total
                </div>
            </div>
            <div class="table-content">
                <TableContent v-for="(row, i) of data.asks"
                              :row="row"
                              :key="i"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import TableContent from '@/components/TableContent'
    import Loader from '@/components/Loader'
    import {bus} from '../main'

    export default {
        components: {
            TableContent, Loader
        },
        data(){
            return {
                data: {},
                //message: '',
                loading: true,
                ws: null
            }
        },
        mounted() {
            bus.$on('changeSymbol', data => {
                this.$store.setState('symbol', data)
            })

            this.$getOrderBook(this.$store.getState('symbol'))

            const symbol = this.$store.getState('symbol')
            const self = this
            this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth`)
            this.ws.onopen = function(e) {
                const param = symbol.toLowerCase() + '@depth'
                self.ws.send(JSON.stringify({
                    method: "SUBSCRIBE",
                    params: [
                        param
                    ],
                    id: 1
                }))
            }
            this.ws.onmessage = function(msg) {
                const asks = JSON.parse(msg.data).a
                const bids = JSON.parse(msg.data).b
                function updateData(newArray, oldArray) {
                    newArray.forEach(i => {
                            const found = oldArray.findIndex(item => item[0] === i[0])
                            if(found !== -1){
                                if (parseFloat(i[1]) === 0) {
                                    oldArray.splice(found,1)

                                } else {
                                    Vue.set(oldArray, found, i)
                                }
                            } else {

                                    const length = oldArray.length
                                    Vue.set(oldArray, length, i)
                                    function compareInc(a, b) {
                                        if (Number(a[0]) > Number(b[0])) return 1 ;
                                        if (Number(a[0]) === Number(b[0])) return 0;
                                        if (Number(a[0])  < Number(b[0])) return -1;
                                        /*return (a[0]-b[0])*/
                                    }
                                    function compareDec(a, b) {
                                        if (Number(a[0]) > Number(b[0])) return -1 ;
                                        if (Number(a[0]) === Number(b[0])) return 0;
                                        if (Number(a[0])  < Number(b[0])) return 1;
                                        /*return (b[0]-a[0])*/
                                    }
                                    (newArray === asks) ? oldArray.sort(compareInc) : oldArray.sort(compareDec)

                            }

                            oldArray = oldArray.filter(i => parseFloat(i[1]) !== 0)
                    })
                }
                if (asks) {
                    updateData(asks, self.data.asks)
                }
                if (bids) {
                    updateData(bids, self.data.bids)
                }
            }
        },
        destroyed() {
            this.ws.close()
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        height: calc(100vh - 55px);
    }
    .bid, .ask{
        flex-direction: column;
        height: 100%;
        margin-right: 15px;
        position: relative;

    }

    .table-header {
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index: 10;

    }
    .bid .table-header {
        background-color: #c17878;
    }
    .ask .table-header {
        background-color: #94c494;
    }

    .table-header_item {
        display: flex;
        padding: .5rem 1rem;
        width: auto;
    }
/*    .item1 {
        width: 90px;
    }
    .item2 {
        width: 110px;
    }
    .item3 {
        width: 60px;
    }*/
    .table-content {
        height: 100%;
        flex-direction: column;
        position: relative;
        top: 34px;
        z-index: 0;
        overflow-y: hidden;
        width: calc(100% - 15px);
    }
    .table-content:hover {
        overflow-y: auto;
        width: 100%;
    }
</style>