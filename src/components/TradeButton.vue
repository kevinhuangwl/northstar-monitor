<template>
    <div class="btn-trade-wrapper" >
        <div class="btn-trade" :class="type" >
            <span>{{ price }}</span>
            <el-divider></el-divider>
            <span><slot></slot></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "trade-button",
        props: ['price', 'type'],
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

    .btn-trade-wrapper{
        padding: 0.5em;
        box-sizing:border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        position: relative;
        width:33.33%;
        float:left;
        height: 100%;
    }
    .btn-trade{
        vertical-align: center;
        padding: 1em;
        border-radius: 0.5em;
    }
    .el-divider{
        background-color: black;
    }

</style>
