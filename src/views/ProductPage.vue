<template>
    <div>
    <div class="product">
        <div class="first">
            <div class="inboxes">
                <div class="box1 box"></div>
                <div class="box2 box"></div>
                <div class="box2 box"></div>
            </div>

        </div>
        <div class="second">

        </div>
        <div class="third">
            <p>Availability: 100 in stock</p>
            <h5>Gucci Bag</h5>
            <h4>N 8,000</h4>
            <div>
                <svg width="78" height="18" viewBox="0 0 78 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 1.5L31.3175 6.195L36.5 6.9525L32.75 10.605L33.635 15.765L29 13.3275L24.365 15.765L25.25 10.605L21.5 6.9525L26.6825 6.195L29 1.5Z" fill="#FAB131" stroke="#FAB131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49 1.5L51.3175 6.195L56.5 6.9525L52.75 10.605L53.635 15.765L49 13.3275L44.365 15.765L45.25 10.605L41.5 6.9525L46.6825 6.195L49 1.5Z" fill="#FAB131" stroke="#FAB131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69 1.5L71.3175 6.195L76.5 6.9525L72.75 10.605L73.635 15.765L69 13.3275L64.365 15.765L65.25 10.605L61.5 6.9525L66.6825 6.195L69 1.5Z" fill="#FAB131" stroke="#FAB131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="#FAB131" stroke="#FAB131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>(10 Customers Review)</p>
                <p class="ali">Lorem ipsum dolor sit amet, consect ter tur adipisci n g elit. Tortor sit place ra tco n s eteiaculis rutrum turpis blandit. I Volutpat nec maecenas.
                </p>
                <div class="flex">
                    <div class="update">
                        <p class="red">-</p>
                        <input type="number" placeholder="1">
                        <p class="inr">+</p>
                    </div>
                    <BtnAll name="Add to cart"/>
                </div>
                <div class="flex">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3667 2.84166C16.9411 2.41583 16.4357 2.07803 15.8795 1.84757C15.3233 1.6171 14.7271 1.49847 14.1251 1.49847C13.523 1.49847 12.9268 1.6171 12.3706 1.84757C11.8144 2.07803 11.309 2.41583 10.8834 2.84166L10.0001 3.725L9.11673 2.84166C8.25698 1.98192 7.09092 1.49892 5.87506 1.49892C4.6592 1.49892 3.49314 1.98192 2.63339 2.84166C1.77365 3.70141 1.29065 4.86747 1.29065 6.08333C1.29065 7.29919 1.77365 8.46525 2.63339 9.325L3.51672 10.2083L10.0001 16.6917L16.4834 10.2083L17.3667 9.325C17.7926 8.89937 18.1304 8.39401 18.3608 7.83779C18.5913 7.28158 18.7099 6.6854 18.7099 6.08333C18.7099 5.48126 18.5913 4.88508 18.3608 4.32887C18.1304 3.77265 17.7926 3.26729 17.3667 2.84166V2.84166Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Add To Wishlist</p>
                </div>
                <p>Brand: <br>Product Type: <br> Product: <br> Description</p>
                <div class="sl"></div>
                <p>Specification</p>
                <div class="sl"></div>
                Reviews (10)
                <div class="sl"></div>
            </div>
        </div>
    </div>
        <h1 class="sec-title">Why LuxBridge</h1>
        <div class="stl"></div>
        <div class="all">
                <div class="one sm"></div>
                <div class="two sm"></div>
                <div class="thr sm"></div>
                <div class="four sm"></div>
                <div class="fiv sm"></div>
                <div class="six sm"></div>
                <div class="sev sm"></div>
                <div class="eig sm"></div>

        </div>
    </div>
</template>

<script>
    import BtnAll from "@/components/btnAll";
    export default {
        name: "ProductPage",
        components: {BtnAll}
    }
</script>

<style scoped>
    .sec-title{
        font-size: 25px;
        line-height: 29px;
        font-weight: bold;
    }
    h1{
        margin: 0;
        padding: 0;
    }
    .stl{
        width: 30px;
        height: 5px;
        background: #FAB131;
        margin-bottom: 30px;
    }
</style>