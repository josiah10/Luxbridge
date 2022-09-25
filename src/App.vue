<template>
    <div class="container">
  <div class="Header">
  <div class="header">
    <p class="header-text">LUXBRIDGE</p>
    <div class="search-box">
<!--      <select name="cetegories" id="" >-->
<!--        <option value="">All Categories</option>-->
<!--        <option value="">Top Deals</option>-->
<!--      </select>-->
      <div class="serbox">
        <input type="text" placeholder="search products,brands and categories">
      </div>
    </div>
      <div class="end-header">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0499 5C15.0267 5.19057 15.9243 5.66826 16.628 6.37194C17.3317 7.07561 17.8094 7.97326 17.9999 8.95M14.0499 1C16.0792 1.22544 17.9715 2.13417 19.4162 3.57701C20.8608 5.01984 21.7719 6.91101 21.9999 8.94M20.9999 16.92V19.92C21.0011 20.1985 20.944 20.4742 20.8324 20.7293C20.7209 20.9845 20.5572 21.2136 20.352 21.4019C20.1468 21.5901 19.9045 21.7335 19.6407 21.8227C19.3769 21.9119 19.0973 21.9451 18.8199 21.92C15.7428 21.5856 12.7869 20.5341 10.1899 18.85C7.77376 17.3147 5.72527 15.2662 4.18993 12.85C2.49991 10.2412 1.44818 7.27099 1.11993 4.18C1.09494 3.90347 1.12781 3.62476 1.21643 3.36162C1.30506 3.09849 1.4475 2.85669 1.6347 2.65162C1.82189 2.44655 2.04974 2.28271 2.30372 2.17052C2.55771 2.05833 2.83227 2.00026 3.10993 2H6.10993C6.59524 1.99522 7.06572 2.16708 7.43369 2.48353C7.80166 2.79999 8.04201 3.23945 8.10993 3.72C8.23656 4.68007 8.47138 5.62273 8.80993 6.53C8.94448 6.88792 8.9736 7.27691 8.89384 7.65088C8.81408 8.02485 8.6288 8.36811 8.35993 8.64L7.08993 9.91C8.51349 12.4135 10.5864 14.4864 13.0899 15.91L14.3599 14.64C14.6318 14.3711 14.9751 14.1858 15.3491 14.1061C15.723 14.0263 16.112 14.0555 16.4699 14.19C17.3772 14.5286 18.3199 14.7634 19.2799 14.89C19.7657 14.9585 20.2093 15.2032 20.5265 15.5775C20.8436 15.9518 21.0121 16.4296 20.9999 16.92Z" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_65_1729)">
            <path d="M8.88672 21.3334C9.71515 21.3334 10.3867 20.6618 10.3867 19.8334C10.3867 19.0049 9.71515 18.3334 8.88672 18.3334C8.05829 18.3334 7.38672 19.0049 7.38672 19.8334C7.38672 20.6618 8.05829 21.3334 8.88672 21.3334Z" fill="#1C1C1C"/>
            <path d="M18 21.3334C18.8284 21.3334 19.5 20.6618 19.5 19.8334C19.5 19.0049 18.8284 18.3334 18 18.3334C17.1716 18.3334 16.5 19.0049 16.5 19.8334C16.5 20.6618 17.1716 21.3334 18 21.3334Z" fill="#1C1C1C"/>
            <path d="M22.0532 3.58003C21.9911 3.50356 21.9129 3.44177 21.8242 3.39912C21.7354 3.35647 21.6383 3.33402 21.5398 3.33337H7.65983L8.09316 4.6667H20.6665L18.8865 12.6667H8.8865L5.83983 3.02003C5.80688 2.91767 5.74965 2.8248 5.67303 2.74935C5.59641 2.67389 5.50268 2.61809 5.39983 2.5867L2.6665 1.7467C2.58245 1.72087 2.49414 1.71185 2.40661 1.72015C2.31908 1.72846 2.23404 1.75392 2.15635 1.79509C1.99944 1.87823 1.88199 2.02029 1.82983 2.19003C1.77767 2.35977 1.79508 2.54328 1.87822 2.70018C1.96136 2.85709 2.10342 2.97454 2.27316 3.0267L4.6665 3.76003L7.7265 13.4267L6.63316 14.32L6.5465 14.4067C6.27605 14.7184 6.12276 15.1146 6.11303 15.5271C6.10329 15.9396 6.23772 16.3426 6.49316 16.6667C6.67487 16.8877 6.90577 17.0631 7.16739 17.1788C7.42901 17.2946 7.71409 17.3475 7.99983 17.3334H19.1265C19.3033 17.3334 19.4729 17.2631 19.5979 17.1381C19.7229 17.0131 19.7932 16.8435 19.7932 16.6667C19.7932 16.4899 19.7229 16.3203 19.5979 16.1953C19.4729 16.0703 19.3033 16 19.1265 16H7.89316C7.81639 15.9974 7.7416 15.975 7.676 15.9351C7.61041 15.8951 7.55622 15.8389 7.51869 15.7719C7.48116 15.7048 7.46155 15.6293 7.46175 15.5525C7.46195 15.4757 7.48195 15.4002 7.51983 15.3334L9.1265 14H19.4198C19.5739 14.0038 19.7246 13.954 19.8461 13.8592C19.9677 13.7644 20.0526 13.6304 20.0865 13.48L22.1998 4.1467C22.2201 4.04731 22.2174 3.94461 22.192 3.84641C22.1666 3.74821 22.1191 3.6571 22.0532 3.58003Z" fill="#1C1C1C"/>
          </g>
          <defs>
            <clipPath id="clip0_65_1729">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>

  </div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/top-deals">Top Deals</router-link>
    <router-link to="/all-categories">All Categories</router-link>
    <router-link to="/women/bags">Women's Wear</router-link>
    <router-link to="/men">Men's Wear</router-link>
    <router-link to="/brands">Brands</router-link>
<!--    <router-link to="/kids">Kids</router-link>-->
<!--    <router-link to="/bags">Bags</router-link>-->
<!--    <router-link to="/walets">Walets</router-link>-->
<!--    <router-link to="/watches">Watches</router-link>-->
<!--    <router-link to="/lingeries">Lingeries</router-link>-->
<!--    <router-link to="/belts">Belts</router-link>-->
<!--    <router-link to="/shoes">Shoes</router-link>-->
<!--    <router-link to="/others">Others</router-link>-->
  </nav>
  <router-view/>
  </div>
  <div class="footer">
      <div class="foot-content">
          <div class="title">
            <h1 class="header-text">LUXBRIDGE</h1>
            <p style="text-align: justify;width: 295px">Lorem ipsum dolor sit amet, consect ter tur adipiscing elit. Tortor sit place ra tco n s etetur iaculis rutrum turpis blandit. I Volutpat nec maecenas di am, sedorna.</p>
          </div>
        <div class="about">
          <h1>About us</h1>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
        <div class="bas">
          <h1>Become a Seller</h1>
          <p>How to Sell</p>
          <p>Become a Vendor</p>
        </div>
        <div class="yo" style="margin-top: 30px">
          <h1>Your Order</h1>
          <p>Account</p>
          <p>Delivery & Shipping Options</p>
          <p>Return Policy</p>
        </div>
        <div class="ql">
          <h1>Quick Links</h1>
          <p>Contact Us</p>
          <p>Help & FAQ</p>
        </div>
      </div>
    <div class="footer-links">
      <div class="face">
        <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.31632 3.48565V5.96393H0.5V8.99414H2.31632V18H6.04457V8.99504H8.5472C8.5472 8.99504 8.78168 7.54216 8.89531 5.9531H6.0599V3.88066C6.0599 3.57132 6.46573 3.15467 6.86795 3.15467H8.90072V0H6.13746C2.22343 0 2.31632 3.03292 2.31632 3.48565Z" fill="#1C1C1C"/>
        </svg>
      </div>
      <div class="face">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.80631 17.9997C7.22361 18.0104 8.62857 17.6833 9.9397 17.0374C11.2508 16.3915 12.4421 15.4396 13.4442 14.237C14.4464 13.0343 15.2397 11.6049 15.778 10.0315C16.3162 8.45817 16.5888 6.77222 16.5799 5.07146V4.47741C17.3146 3.83149 17.9505 3.03775 18.4594 2.13139C17.7676 2.49446 17.0356 2.73526 16.2862 2.84627C17.0807 2.27817 17.6769 1.38395 17.9643 0.32908C17.2239 0.862162 16.4119 1.23691 15.5646 1.43664C14.994 0.707028 14.2389 0.223415 13.4162 0.0606334C12.5934 -0.102148 11.7489 0.0649767 11.0133 0.536149C10.2777 1.00732 9.69201 1.75627 9.34683 2.66712C9.00165 3.57797 8.91625 4.59994 9.10383 5.5749C7.59857 5.48624 6.12576 5.01812 4.78128 4.20103C3.4368 3.38393 2.25082 2.23618 1.30055 0.832518C0.821378 1.83051 0.676139 3.00971 0.894239 4.13137C1.11234 5.25303 1.67748 6.23332 2.47524 6.87377C1.88673 6.84653 1.31183 6.65337 0.79711 6.30992V6.36026C0.79188 7.40322 1.08467 8.41683 1.62669 9.23215C2.16871 10.0475 2.92722 10.6152 3.77578 10.8409C3.22841 11.0175 2.65504 11.045 2.09766 10.9214C2.34332 11.8109 2.81227 12.5874 3.4402 13.1444C4.06812 13.7014 4.82427 14.0117 5.60494 14.0327C4.27017 15.322 2.61124 16.0317 0.897797 16.0464C0.597374 16.036 0.297655 16.0057 0 15.9558C1.73431 17.2817 3.74994 17.9808 5.80631 17.9695" fill="#1C1C1C"/>
        </svg>
      </div>
      <div class="face">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99775 5.99872C7.34513 5.99872 5.99647 7.34738 5.99647 9C5.99647 10.6526 7.34513 12.0013 8.99775 12.0013C10.6504 12.0013 11.999 10.6526 11.999 9C11.999 7.34738 10.6504 5.99872 8.99775 5.99872ZM17.9993 9C17.9993 7.75716 18.0106 6.52558 17.9408 5.28499C17.871 3.84402 17.5423 2.56515 16.4886 1.51144C15.4326 0.455477 14.156 0.129006 12.715 0.0592092C11.4722 -0.0105879 10.2406 0.000669702 9 0.000669702C7.75716 0.000669702 6.52558 -0.0105879 5.28499 0.0592092C3.84402 0.129006 2.56515 0.457728 1.51144 1.51144C0.455477 2.5674 0.129006 3.84402 0.0592092 5.28499C-0.0105879 6.52783 0.000669702 7.75941 0.000669702 9C0.000669702 10.2406 -0.0105879 11.4744 0.0592092 12.715C0.129006 14.156 0.457729 15.4348 1.51144 16.4886C2.5674 17.5445 3.84402 17.871 5.28499 17.9408C6.52783 18.0106 7.75941 17.9993 9 17.9993C10.2428 17.9993 11.4744 18.0106 12.715 17.9408C14.156 17.871 15.4348 17.5423 16.4886 16.4886C17.5445 15.4326 17.871 14.156 17.9408 12.715C18.0128 11.4744 17.9993 10.2428 17.9993 9V9ZM8.99775 13.6179C6.44227 13.6179 4.37988 11.5555 4.37988 9C4.37988 6.44452 6.44227 4.38213 8.99775 4.38213C11.5532 4.38213 13.6156 6.44452 13.6156 9C13.6156 11.5555 11.5532 13.6179 8.99775 13.6179ZM13.8047 5.27148C13.2081 5.27148 12.7263 4.78966 12.7263 4.193C12.7263 3.59635 13.2081 3.11452 13.8047 3.11452C14.4014 3.11452 14.8832 3.59635 14.8832 4.193C14.8834 4.33468 14.8556 4.475 14.8015 4.60593C14.7474 4.73686 14.6679 4.85582 14.5677 4.956C14.4676 5.05618 14.3486 5.13561 14.2177 5.18975C14.0867 5.24388 13.9464 5.27166 13.8047 5.27148V5.27148Z" fill="#1C1C1C"/>
        </svg>
      </div>
      <div class="face">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07175 6.2721H8.85725V7.9371C9.2585 6.9795 10.2875 6.1191 11.8333 6.1191C14.7965 6.1191 15.5 8.0253 15.5 11.5227V18H12.5V12.3192C12.5 10.3275 12.0988 9.2043 11.0773 9.2043C9.6605 9.2043 9.07175 10.4148 9.07175 12.3183V18H6.07175V6.2721ZM0.9275 17.847H3.9275V6.1191H0.9275V17.847ZM4.35725 2.295C4.35736 2.59675 4.30749 2.89551 4.21054 3.17393C4.11359 3.45235 3.97149 3.70486 3.7925 3.9168C3.4298 4.34936 2.93886 4.59149 2.4275 4.59C1.91704 4.58959 1.42723 4.34808 1.064 3.9177C0.885659 3.70504 0.744039 3.45224 0.647258 3.17379C0.550476 2.89534 0.500434 2.5967 0.5 2.295C0.5 1.6857 0.7025 1.1025 1.06475 0.6723C1.42766 0.241343 1.91768 -0.00026929 2.42825 2.25238e-07C2.93975 2.25238e-07 3.43025 0.2421 3.7925 0.6723C4.154 1.1025 4.35725 1.6857 4.35725 2.295Z" fill="#1C1C1C"/>
        </svg>
      </div>
    </div>
  </div>
    </div>
</template>

<style >
body{
  font-family: 'gilroy';
}
.Header{
  margin: 50px 100px;
}
@font-face {
  font-family: 'eczar';
  src: local('eczar'),
  url("../src/assets/fonts/Eczar-VariableFont_wght.ttf") format('truetype');
}
@font-face {
  font-family: 'gilroy';
  src: local('gilroy'),
  url("../src/assets/fonts/Gilroy-Regular - Copy.ttf") format('truetype');
}
@font-face {
    font-family: 'modesty';
    src: local('modesty'),
    url("../src/assets/fonts/Modesty Script.ttf") format('truetype');
}
.header-text{
  font-family: 'eczar';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 44px;
}
input{
  padding: 13.5px 300px 13.5px 20px;
  font-size: 16px;
  color: #9E9E9E;
  border: 1px solid #1C1C1C;
  width: 600px;
}
::placeholder{
 /*width: 400px;*/
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47.5px;
}
.search-box{
  display: flex;
  justify-content: center;
  align-items: center;
}
select{
  padding: 13px 19px;
  font-size: 16px;
  color: #9E9E9E;
  border: 1px solid #1C1C1C;
}
svg{
  padding-right: 22px;
}
svg:last-child{
  padding-right: 0;
}
nav {
display: flex;
  justify-content: left;
  align-items: center;

}

nav a {
text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  color: #9E9E9E;
  margin-right: 25px;
}
nav a:hover{
  color: #FAB131;
}
nav a::after{
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background-color: #FAB131;
  transition: all .3s ease;

  /*color:#FAB131;*/
  /*border-bottom-color: #FAB131;*/
  /*border-bottom-width: 3px;*/
  /*border-bottom-style: solid;*/
}
nav a:hover::after{
  width: 60%;
}

nav a.router-link-exact-active {
  color:#FAB131;
  border-bottom-color: #FAB131;
  border-bottom-width: 3px;
  border-bottom-style: solid;

}
  .footer{
    width: 100%;
    background-color: #F2F2F2;
  }
  .foot-content{
    padding: 62px 100px 41px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .foot-content h1{
    font-size: 25px;
    line-height: 23px;
    font-weight: 600;
    padding-bottom: 0;
  }
  .foot-content p{
    font-size: 16px;
    line-height: 19px;
    font-weight: lighter;
  }
  .footer-links{
    justify-content: center;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }
  .footer-links .face{
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
  }
</style>
