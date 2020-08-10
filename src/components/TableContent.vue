<template>
    <div class="table-content-row">
        <div class="table-content_item item1">
            {{row[1]}}
        </div>
        <div class="table-content_item item2">
            {{row[0]}}
        </div>
        <div class="table-content_item item3">
            {{row[0]*row[1]}}
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
    }
    .table-content_item{
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
</style>