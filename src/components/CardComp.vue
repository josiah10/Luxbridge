<template>
    <div class="card" :style="{backgroundColor:bgcolor}">
        <div class="icon"></div>
        <h3>{{name}}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolorem et itaque iusto odio officia quia quibusdam quo repellendus!</p>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            name:String,
            bgcolor:{
                type:String,
                default:'#F2F2F2'
            }
        }
    }
</script>

<style scoped>
.card{
    width: 298px;
    height: 300px;
    border-radius: 10px;
}
</style>