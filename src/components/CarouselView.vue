<template>
    <Carousel  :wrap-around="true"  :autoplay="5000">
        <Slide v-for="slide in slides" :key="slide">
            <div style="position: absolute;top: 10%;left: 5%">
            <div style=" ;text-align: justify;font-size: 37px;color: #1C1C1C;margin-bottom: 100px">
                <h3 class="aa">{{slide.text1}} </h3>
                <h3 class="aa">{{slide.text2}}</h3>
                <h3 class="aa">{{slide.text3}}</h3>
            </div>
                <div class="link">
                    <h5 class="dd">{{slide.btn1}}</h5>
                    <p class="cc">{{slide.btn2}}</p>

                </div>
            </div>
            <div class="carousel__item">

                <img :src="require(`../../public/images/${slide.fileName}`)" alt=""></div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination  />
        </template>
    </Carousel>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

    import 'vue3-carousel/dist/carousel.css';

    export default defineComponent({
        name: 'CarouselView',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        data(){
            return{
                slides:[
                    { id: '1',btn2:'Sell Your Product',btn1:'Shop Now', text1:'Get Luxury', text2:'Designer Thrift', text3:'with a Penny!', title: 'Vue 3 Introduction', content: 'VueJS is a library,',fileName:'caro1.png' },
                    { id: '2' ,btn2:'Sell Your Product',btn1:'Shop Now',  title: 'Vue 3 Introduction', content: 'Know the components' ,fileName:'caro2.png'},
                    { id: '3',btn2:'Sell Your Product',btn1:'Shop Now',  title: 'Vue 3 Introduction',   content: 'Rendering Conditionally' ,fileName:'caro3.png'},
                ],

            }
        }
    });
</script>

<style >
    .carousel__item {
        height: 600px;
        width: 1243px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 1350px;
        margin-left: -100px;
        margin-right: -100px;
        z-index: -1;
    }
aa{
    margin-bottom: -25px;
}

    .carousel__pagination-button--active{
        background-color: #FAB131;
        color: #FFFFFF;
    }
    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        background-color: #FAB131;

    }
    .cc{
        color: #FAB131;
        padding: 10px 15px;
        font-size: 16px;
        background-color:#f5f5f5 ;
        border: 1px solid #FAB131;
        margin-left: 20px;
    }
    .link{
        display: flex;
        align-items: center;
    }
    .dd{
        border: none;
        padding: 10px 20px;
        color: #FFFFFF;
        background-color: #FAB131;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
        font-weight: 500;

    }
</style>