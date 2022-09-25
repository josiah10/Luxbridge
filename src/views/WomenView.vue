<template>
    <div class="wommen">
        <div class="hline">
            <div class="all">
                <div class="left">
                    <div class="left-title">
                        <h3>Categories</h3>
                        <p>17</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 1" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="links">
<!--                        <ul>-->
<!--                            <li><a href="#">Dresses</a></li>-->
<!--                            <li><a href="#">Polo Shirt</a></li>-->
<!--                            <router-link to="/women/bags">Bags</router-link>-->
<!--                            <li><a href="#">Blazers & Vests</a></li>-->
<!--                            <li><a href="#">Pants</a></li>-->
<!--                            <li><a href="#">Jumpsuits & Shorts</a></li>-->
<!--                            <li><a href="#">Swim Wear</a></li>-->
<!--                        </ul>-->
                            <router-link to="/kids">Dresses</router-link>
                        <router-link to="/walets">Polo Shirt</router-link>
                            <router-link to="/women/bags">Bags</router-link>
                            <router-link to="/watches">Blazers & Vests</router-link>
                            <router-link to="/lingeries">Lingeries</router-link>
                            <router-link to="/belts">Jumpsuits & Shorts</router-link>
                            <router-link to="/shoes">Swim Wear</router-link>
                    </div>
                    <div class="horiline"></div>
                    <div class="rest">
                        <h3>Filter By Price</h3>
                        <ul>
                            <li>N1,000-N2,000</li>
                            <li>N4,000-N6,000</li>
                            <li>N7,000-N8,000</li>
                        </ul>
                        <div class="cus">
                            <input type="number" placeholder="N Min">
                            <p>-</p>
                            <input type="number" placeholder="N Max">
                            <button>Go</button>

                        </div>
                        <div class="horiline"></div>
                        <h3>Filter By Brand</h3>
                        <div class="lie">
                            <input type="checkbox">
                            <p>Gucci</p>
                        </div>
                        <div class="lie">
                            <input type="checkbox">
                            <p>YSL</p>
                        </div>

                    </div>

                </div>
                <div class="right">
                    <router-view ></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WomenView"
    }
</script>

<style scoped>
    .all{
        display: flex;
        align-items: flex-start;
        justify-content: left;
    }
    .wommen{
        margin-bottom: 1169px;
    }
    .hline{
        margin-top: 34px;
        margin-left: -106px;
        width: 1640px;
        height: 0px;
        border: 0.5px solid #9E9E9E;
    }
    .left{
        width: 331px;
        height: 1169px;
        margin-left: 100px;
        border-right: 2px solid #9E9E9E;
    }
    .left-title{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .left-title h3{
        margin-right: 17px;
    }
    .left-title p{
        margin-right: 158px;
        border: none;
        font-size: 16px;
        padding: 0.5px 2px;
        background-color: #EB7B8D;
    }
    .horiline{
        width: 331px;
        height: 0px;
         border: 1px solid #9E9E9E;
    }
    .links{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        list-style: none;
        margin-left: -40px;
    }
    li{
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 19px;
        color: #9E9E9E;
    }
    a{
        text-decoration: none;
        color: #9E9E9E;
    }
    a:hover{
        color: #FAB131;
    }
    a:active{
        color:#FAB131;
    }
    .cus{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #9E9E9E;
        margin-bottom: 25px;
    }
    .cus p{
        font-size: 16px;
        line-height: 19px;
        margin-left: 5px;
        margin-right: 5px;
    }
    input[type='number']{
        text-align: center;
        width: 60px;
        height: 30px;
        padding: 7px;
        color: #9E9E9E;
        font-size: 16px;
        border: 1px solid #9E9E9E;
    }
    button{
       padding: 1px 2px;
        border: none;
        font-size: 16px;
        background-color: #EB7B8D;
        margin-left: 65px;
    }
    .lie{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: -10px;
    }
    .lie input{
        width: 17px;
        height: 15px;
        border: 1px solid #9E9E9E;

    }
    .lie p{
        color: #9E9E9E;
    }
    a.active {
        color: #FAB131;
    }
    a{
        margin-bottom: 17px;
    }

</style>