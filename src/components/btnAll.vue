<template>
    <div>
        <button class="btn">{{name}}</button>
    </div>
</template>

<script>
    export default {
        name: "btn",
        props:{
            name:String,
        }
    }
</script>

<style scoped>
    .btn{
        border: none;
        padding: 10px 20px;
        color: #FFFFFF;
        background-color: #FAB131;
        font-size: 16px;
        line-height: 19px;
    }
</style>