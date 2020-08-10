<template>
    <div class="list">
        <div>
            Asks:
            <ul>
                <ListElement v-for="(row, i) of a"
                             :row="row"
                             :key="i"
                             :i="i"
                />
            </ul>
        </div>
        <div>
            Bids:
            <ul>
                <ListElement v-for="(row, i) of b"
                             :row="row"
                             :key="i"
                             :i="i"
                />
            </ul>
        </div>
    </div>
</template>

<script>
    import ListElement from '@/components/ListElement'
    export default {
        components: {
            ListElement
        },
        props: ['a', 'b']
    }
</script>

<style>
    .list {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin: 1rem;
    }
    .list div {
        margin-bottom: 1rem;
    }
    ul {
        margin:0;
        padding:0;
    }
</style>