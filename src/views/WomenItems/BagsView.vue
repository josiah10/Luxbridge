<template>
    <div>
    <div class="sm">
        <SmallComp class="wi"/>
        <SmallComp class="wi"/>
        <SmallComp class="wi"/>
        <SmallComp class="wi"/>
    </div>
        <div class="sm">
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
        </div>
        <div class="sm">
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
            <SmallComp class="wi"/>
        </div>

    </div>
</template>

<script>
    import SmallComp from "@/components/SmallComp";
    export default {
        name: "BagsView",
        components:{
            SmallComp,
        }
    }
</script>

<style scoped>
.sm{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 29px 100px 5px 30px;
}
    .wi{
        width: 100%;
    }
</style>