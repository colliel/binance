<template>
    <div class="table-content-row">
        <div class="table-content_item item1">
            {{parseFloat(row[1])}}
        </div>
        <div class="table-content_item item2">
            {{parseFloat(row[0])}}
        </div>
        <div class="table-content_item item3">
            {{(row[0]*row[1]).toFixed(6)}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            row: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .table-content-row{
        display: flex;
        width: 435px;
    }
    .table-content_item{
        display: flex;
        /*padding: .5rem 1rem;*/
        padding: 10px 20px;
    }
    .item1 {
        width: 100px;
    }
    .item2 {
        width: 150px;
    }
    .item3 {
        width: 185px;
    }

    @media (max-width: 900px) {
        .table-content-row{
            width: 355px;
        }
        .table-content_item{
            padding: 5px 10px;
        }
        .item1 {
            width: 70px;
        }
        .item2 {
            width: 100px;
        }
        .item3 {
            width: 135px;
        }
    }

    @media (max-width: 771px) {
        .table-content-row{
            width: 205px;
        }

        .item1 {
            width: 105px;
        }
        .item2 {
            width: 85px;
        }
        .item3 {
            display: none;
        }
    }

    @media (max-width: 490px) {
        .table-content-row{
            width: 150px;
        }
        .item1 {
            width: 80px;
        }
        .item2 {
            width: 70px;
        }
    }
</style>