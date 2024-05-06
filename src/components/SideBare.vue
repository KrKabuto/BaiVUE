<template>
  <!-- màu thanh trên cùng -->
  <v-system-bar color="#DCDCDC">
    <img src="/public/logo 4 con ga tach nen.png" class="center-image">
    <!-- <span>Kính chào quý khách</span> -->
    <v-spacer></v-spacer>
    <a href="https://www.facebook.com/" class="social-link">
      <v-icon icon="mdi mdi-facebook" class="ms-2"></v-icon>
    </a>
    <a href="https://www.pinterest.com/" class="social-link">
      <v-icon icon="mdi mdi-pinterest" class="ms-2"></v-icon>
    </a>
    <a href="https://twitter.com/x" class="social-link">
      <v-icon icon="mdi mdi-twitter" class="ms-2"></v-icon>
    </a>
    <a href="https://www.instagram.com/" class="social-link">
      <v-icon icon="mdi mdi-instagram" class="ms-2"></v-icon>
    </a>
    <a href="https://www.youtube.com/" class="social-link">
      <v-icon icon="mdi mdi-youtube" class="ms-2"></v-icon>
    </a>
  </v-system-bar>

<!-- màu nền menu -->
  <v-app-bar  height="100" flat color="#F7F2E5">
    <v-app-bar-title>
      <h2>Menu</h2>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <!-- css tìm kiếm  -->
    <v-card
      color="#f2f2f2"
      flat
      outlined
      height="45"
      width="510"
      class="mt-4 pt-1" 
      style="box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);"
    >
      <v-row>
        <v-col cols="12" sm="10">
          <v-text-field
            density="compact"
            placeholder="Tìm kiếm ở đây ..."
            variant=""
            class=""
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <!-- màu icon tim kiếm -->
          <v-icon
            color="red" 
            icon="mdi mdi-magnify"
            size="large"
            class="mt-2 ml-4"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-spacer></v-spacer>
    <div>
      <span class="ml-4 text-caption">Danh sách</span><br />
      <v-btn 
      append-icon="mdi mdi-heart-outline" class="account"
      variant="text" 
      :color="activeButton === 'lovelist' ? '#F97350' : ''" 
      @click="goToLovelistPage"
      >
        Yêu thích
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
    </div>
    <v-divider vertical inset class="mr-6"></v-divider>
    <div>
      <span class="ml-4 text-caption">Đăng nhập/Đăng kí</span><br />
        <v-btn append-icon="mdi-account" class="account" variant="text" 
      :color="activeButton === 'login' ? '#F97350' : ''" @click="goToLoginPage">
        My account
        <template v-slot:append>
          <v-icon></v-icon>
        </template>
      </v-btn>
        
      
    </div>
      <v-divider vertical inset class="mr-6"></v-divider>
      <v-btn 
      class="mr-6"
      variant="text" 
      :color="activeButton === 'basket' ? '#F97350' : ''" 
      @click="goToBasketPage"
      >
        <v-icon size = "24">mdi mdi-cart-outline</v-icon>
      </v-btn>
      
  </v-app-bar>
  <!-- thanh menu -->
  <v-app-bar  height="50" flat color="#FAD06C">
    <v-btn 
      style="font-weight: bold;"
      variant="text" 
      :color="activeButton === 'home' ? '#F97350' : ''" 
      @click="goToHomePage"
    > Trang chủ </v-btn>
    <v-btn 
      style="font-weight: bold;"
      variant="text" 
      :color="activeButton === 'coffee' ? '#F97350' : ''" 
      class="account" 
      @click="goToCoffeePage"
    > Coffee </v-btn>
    <v-btn 
      style="font-weight: bold;"
      variant="text" 
      :color="activeButton === 'icream' ? '#F97350' : ''" 
      class="account" 
      @click="goToIcreamPage"
    > Kem tươi </v-btn>
    <v-btn 
      style="font-weight: bold;"
      variant="text" 
      :color="activeButton === 'juice' ? '#F97350' : ''" 
      class="account" 
      @click="goToJuicePage"
    > Nước ép </v-btn>
    <v-btn 
     style="font-weight: bold;"
      variant="text" 
      :color="activeButton === 'milk' ? '#F97350' : ''" 
      class="account" 
      @click="goToMilkPage"
    > Trà sữa </v-btn>

    <v-spacer></v-spacer>
    <!-- <v-btn
      density="comfortable"
      icon="mdi mdi-phone"
      class="phone mr-2"
    ></v-btn>
    <div>
      <span class="text-caption">Liên hệ</span><br />
      <span class="text-grey text-caption mr-2">0832183162</span>
    </div> -->
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      activeButton: null,
      showFooterAndSidebar: true
    };
  },
  methods: {
    goToHomePage() {
      this.activeButton = 'home';
      this.$router.push({ name: 'Home' }); 
    },
    goToCoffeePage() {
      this.activeButton = 'coffee';
      this.$router.push('/coffee');
    },
    goToIcreamPage() {
      this.activeButton = 'icream';
      this.$router.push('/icream');
    },
    goToJuicePage() {
      this.activeButton = 'juice';
      this.$router.push('/juice');
    },
    goToMilkPage() {
      this.activeButton = 'milk';
      this.$router.push('/milk');
    },
    goToLovelistPage() {
      this.activeButton = 'lovelist';
      this.$router.push('/lovelist');
    },
    goToBasketPage() {
      this.activeButton = 'basket';
      this.$router.push('/basket');
    },
    goToLoginPage() {
      this.activeButton = 'login';
      this.$router.push('/login');
    },
  },
  mounted() {
    this.goToHomePage();
  }
};
</script>

<style>
/* icon */
.social-link:hover v-icon {
  color: #F97350;
}
/* hình logo  */
.center-image {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 50px; /* Thay đổi kích thước chiều rộng của ảnh */
  height: 50px; /* Thay đổi kích thước chiều cao của ảnh */
}

.account {
  transition-duration: 0.4s;
}
.account:hover {
  color: #F97350;
}
/* .phone {
  background-color: red !important;
} */
</style>
