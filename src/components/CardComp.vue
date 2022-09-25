<template>
    <div class="longcard" >
        <div class="cont" >
            <div class="con">
                <p >New</p>
                <div class="lil">
                    <div class="see"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833374 8.00016C0.833374 8.00016 4.16671 1.3335 10 1.3335C15.8334 1.3335 19.1667 8.00016 19.1667 8.00016C19.1667 8.00016 15.8334 14.6668 10 14.6668C4.16671 14.6668 0.833374 8.00016 0.833374 8.00016Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div class="see"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3667 2.84172C16.9411 2.41589 16.4357 2.0781 15.8795 1.84763C15.3233 1.61716 14.7271 1.49854 14.1251 1.49854C13.523 1.49854 12.9268 1.61716 12.3706 1.84763C11.8144 2.0781 11.309 2.41589 10.8834 2.84172L10.0001 3.72506L9.11673 2.84172C8.25698 1.98198 7.09092 1.49898 5.87506 1.49898C4.6592 1.49898 3.49314 1.98198 2.63339 2.84172C1.77365 3.70147 1.29065 4.86753 1.29065 6.08339C1.29065 7.29925 1.77365 8.46531 2.63339 9.32506L3.51672 10.2084L10.0001 16.6917L16.4834 10.2084L17.3667 9.32506C17.7926 8.89943 18.1304 8.39407 18.3608 7.83785C18.5913 7.28164 18.7099 6.68546 18.7099 6.08339C18.7099 5.48132 18.5913 4.88514 18.3608 4.32893C18.1304 3.77271 17.7926 3.26735 17.3667 2.84172V2.84172Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div class="see"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.50829 7.6665H0.666626V9.33317H6.50829V11.8332L9.83329 8.49984L6.50829 5.1665V7.6665ZM11.4916 6.83317V4.33317H17.3333V2.6665H11.4916V0.166504L8.16663 3.49984L11.4916 6.83317Z" fill="#D9D9D9"/>
                    </svg>
                    </div>
                </div>
            </div>
            <btnAll class="btnn" name="Add to cart"/>

        </div>
        <h4>Juiliana Gown</h4>
        <h5>N5,800</h5>
    </div>

</template>

<script>
    import btnAll from "@/components/btnAll";
    export default {
        name: "CardCompo",
        components:{
          btnAll
        },
        props:{
            image:String,
        },
        methods:{
            backgroundStyles(image) {
                return {
                    // any other styles you might need to add on as an example
                    'background-image': `url(${image})`,
                }
            }
        }
    }
</script>

<style scoped>
    .longcard{

    }
    .cont{
        height: 645px;
        width: 270px;
        background-color: #F2F2F2;
        transition: all ease-in-out .3s;
        background-image: url("../assets/images/lady1.png");
        background-repeat: no-repeat;
    }
    .cont:hover .btnn {
        visibility: visible;
    }
    .cont:hover p {
        visibility: visible;
    }
    .cont:hover .lil {
        visibility: visible;
    }
    .cont{
        padding: 16px;
    }
    p{
        border: none;
        background-color: #0D99FF;
        color: #FFFFFF;
        padding: 10px 20px;
        margin-top: -55px;
        visibility: hidden;
    }
    .con{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .lil{
        visibility: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
    }
    .see{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: none;
        margin-bottom: 10px;
    }
    .btnn{
        visibility: hidden;
        display: flex;
        justify-content: center;
        margin-top: 460px;
    }
    h4{
        font-size: 20px;
        line-height: 23px;
        color: #1C1C1C;
        margin: 0;
        padding-top: 16px;
    }
    h5{
        font-size: 16px;
        line-height: 19px;
        color: #1C1C1C;
        margin: 0;
        padding-top: 6px;
    }
</style>