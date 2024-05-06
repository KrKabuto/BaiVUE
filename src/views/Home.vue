<template>
  <v-app :style="{ background: '#B7AC9A' }">
    <v-main>
      <!-- <SideBare /> -->
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="2">
            <v-row>
              <!-- <v-col cols="12" sm="12">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel class="co">
                    <v-expansion-panel-title class="text-white bg-orange"
                      ><v-icon icon="mdi mdi-menu" class="ml-n4 mr-1"> </v-icon
                      >Phân loại</v-expansion-panel-title
                    >
                    <v-expansion-panel-text>
                      <v-list class="cat" density="compact">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                          :value="item"
                          color="orange"
                          variant="plain"
                          class="ml-n2"
                        >
                          <v-list-item-title
                            v-text="item.text"
                            class="text-caption"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col> -->
              <v-col cols="12" sm="12">
                <v-card class="co">
                  <v-list lines="two" class="cat pro">
                    <!-- phổ biến 1 -->
                    <v-list-subheader inset class="ml-n10 text-black" style="font-weight: bold; "
                      >Phổ biến</v-list-subheader
                    >

                    <v-list-item
                      v-for="product in products"
                      :key="product.title"
                      :title="product.title"
                      color="red"
                    >
                      <v-list-item-subtitle
                        v-text="product.subtitle"
                        class="text-caption text-red"
                      ></v-list-item-subtitle>
                      <template v-slot:prepend>
                        <v-avatar variant="outlined" rounded="0" color="#FFA07A">
                          <v-img color="black" :src="product.image"></v-img>
                        </v-avatar>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <!-- phổ biến 2 -->
                  <h5 class="ml-4 text-black" >Phổ biến</h5> 
                  <!-- <v-chip class="ma-2 tag" label color="white"> Tráng miệng </v-chip> -->
                  <v-chip class="ma-2" label color="black"> Nước ép </v-chip>
                  <v-chip class="ma-2" label color="black"> Kem tươi </v-chip>
                  <v-chip class="ma-2" label color="black"> Cà phê </v-chip>
                  <v-chip class="ma-2" label color="black"> Trà sữa </v-chip>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="8">
            <v-row>
              <!-- show slide -->
              <v-col cols="12" sm="12">
                <v-carousel :show-arrows="false">
                  <v-carousel-item
                    v-for="(item, i) in pictures"
                    :key="i"
                    :src="item.src"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12" sm="12">
                <!-- kho voucher -->
                <v-toolbar color="#F7F2E5">
                  <v-toolbar-title style="font-weight: bold;">Kho voucher</v-toolbar-title>
                  <v-spacer></v-spacer>                  
                    <v-btn color="black" class="btn" @click="goToVocherPage"> Xem ưu đãi </v-btn>
                </v-toolbar>
              </v-col>
              <v-col cols="12" sm="12" >
                <v-card class="tb" flat>
                  <v-tabs v-model="tab" color="black" align-tabs="end" >
                    <v-tab :value="1">Bán chạy nhất</v-tab>
                  </v-tabs>
                  <v-window v-model="tab" class="co">
                    <v-window-item v-for="n in 3" :key="n" :value="n">
                      <v-container fluid>
                        <v-row>
                          <v-col
                            v-for="(dishe, i) in dishes"
                            :key="i"
                            cols="12"
                            md="3"
                          >
                          <!-- hover -->
                            <v-hover
                              v-slot="{ isHovering, props }"
                              open-delay="200"
                            >
                            <!-- nền sp bán chạy -->
                              <v-card class="" color="#F7F2E5" v-bind="props">
                                <v-img
                                  height="90"
                                  :src="dishe.image"
                                  class="mt-6"
                                ></v-img>
                                <v-card-item class="text-center mt-14">
                                  <v-card-subtitle>
                                    <span class=" ">{{ dishe.name }}</span>
                                  </v-card-subtitle>
                                  <v-card-title
                                    class="text-caption text-red"
                                    >{{ formatMoney(dishe.money) }}</v-card-title
                                  >
                                </v-card-item>
                                <v-expand-transition>
                                  <div
                                    v-if="isHovering"
                                    class="d-flex transition-fast-in-fast-out bg-grey-darken-4 v-card--reveal text-h3"
                                    style="height: 100%"
                                  >
                                  <!-- nút trên hover -->
                                    
                                    <v-btn
                                      density="compact"
                                      icon="mdi mdi-heart-outline"
                                      class="mr-4"
                                      @click="addToFavorites(dishe)"
                                    ></v-btn>
                                    <v-btn
                                      density="compact"
                                      icon="mdi-shopping"
                                      @click="addToCart(dishe)"
                                    ></v-btn>
                                  </div>
                                </v-expand-transition>
                              </v-card>
                            </v-hover>
                          </v-col>
                          <!-- <v-toolbar color="transparent">
                            <v-toolbar-title class="text-white"
                              >Danh sách</v-toolbar-title
                            >
                            <v-spacer></v-spacer>
                            <v-icon icon="mdi mdi-chevron-left-circle"></v-icon>
                            <v-icon
                              icon="mdi mdi-chevron-right-circle"
                              class=""
                            ></v-icon>
                          </v-toolbar>
                          <v-col cols="12" sm="12">
                            <v-sheet
                              class="mx-auto co"
                              elevation="8"
                              max-width="800"
                            >
                              <v-slide-group
                                v-model="model"
                                class="pa-4"
                                center-active
                                show-arrows
                              >
                                <v-slide-group-item
                                  v-for="(dishe, i) in dishes"
                                  :key="i"
                                  v-slot="{ isSelected, toggle }"
                                >
                                  <v-card
                                    :color="isSelected ? 'primary' : '#111111'"
                                    class="ma-4 btn"
                                    height="100"
                                    width="200"
                                    @click="toggle"
                                  >
                                    <v-row>
                                      <v-col cols="12" sm="6">
                                        <v-img
                                          height="100"
                                          :src="dishe.image"
                                          class="ml-5"
                                        ></v-img>
                                      </v-col>
                                      <v-col
                                        cols="12"
                                        sm="6"
                                        class="text-center mt-6"
                                      >
                                        <span class=" ">{{ dishe.name }}</span>

                                        <h5 class="text-caption text-orange">
                                          {{ dishe.money }}
                                        </h5>
                                      </v-col>
                                    </v-row>
                                    <div
                                      class="d-flex fill-height align-center justify-center"
                                    >
                                      <v-scale-transition>
                                        <v-icon
                                          v-if="isSelected"
                                          color="white"
                                          size="48"
                                          icon="mdi-close-circle-outline"
                                        ></v-icon>
                                      </v-scale-transition>
                                    </div>
                                  </v-card>
                                </v-slide-group-item>
                              </v-slide-group>
                            </v-sheet>
                          </v-col> -->
                        </v-row>
                      </v-container>
                    </v-window-item>
                  </v-window>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row>
              <!-- thanh ưu đãi phục vụ 24/7 -->
              <v-col cols="12" sm="12">
                <v-card class="co">
                  <v-list lines="two" class="cat pro">
                    <v-list-item
                      v-for="offer in offers"
                      :key="offer.title"
                      :title="offer.title"
                      color="red"
                    >
                      <v-list-item-subtitle
                        v-text="offer.subtitle"
                        class="text-caption"
                        style="font-weight: bold;"
                      ></v-list-item-subtitle>
                      <template v-slot:prepend>
                       <!-- màu icon -->
                        <v-icon
                          :icon="offer.icon"
                          large
                          color="red"
                        ></v-icon>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <div class="float-sm-left">
                    <span class="ml-4 text-black" style="font-weight: bold;">Member VIP</span>
                    <v-icon icon="mdi mdi-chevron-left-circle" class="ml-14"></v-icon>
                  </div>
                  <v-icon icon="mdi mdi-chevron-right-circle"></v-icon>
                  <div class="text-center">
                    <v-avatar variant="outlined" color="white" class="mt-2">
                      <v-img src="/20.jpg" alt="John"></v-img>
                    </v-avatar>
                    <h5 class="text-black mt-3">Sơn Tùng MTP</h5>
                    <p class="text-black mt-2 text-caption">
                      "Tôi cảm thấy cửa hàng này là một trong những cửa hàng bán đồ ăn nhẹ ngon nhất mà tôi từng ăn"
                    </p>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card class="co pa-2">
                  <!-- mục mới nhất  -->
                  <div class="float-sm-left mb-4">
                    <span class="ml-4 text-black" style="font-weight: bold;">Mới nhất </span>
                    <v-icon
                      icon="mdi mdi-chevron-left-circle"
                      class="ml-16"
                    ></v-icon>
                    <v-icon icon="mdi mdi-chevron-right-circle"></v-icon>
                  </div>
                  <div class="text-center"> <!-- Đã thêm lớp text-center -->
                    <v-img src="/public/kemsocola.png" alt="pi" width="200" style="margin-left: 25px"></v-img>
                  </div>
                  <h5 class="text-center text-balck mt-3">Kem Chocolate</h5> <!-- Đã thêm lớp text-center -->
                  <p class="text-center text-red mt-2 text-caption">20-04-2024</p> <!-- Đã thêm lớp text-center -->
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script setup>
import SideBare from "@/components/SideBare.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router';

</script>
<script>

export default {
  data: () => ({
    panel: [0],
    disabled: false,
    tab: null,
    model: null,
    items: [
      { text: "COFFEE" },
      { text: "KEM TƯƠI" },
      { text: "NƯỚC ÉP" },
      { text: "TRÀ SỮA" },
    ],
    products: [
      {
        title: "Cappuccino",
        subtitle: "30.000đ",
        image: "3.png",
      },
      {
        title: "Kem dừa",
        subtitle: "25.000đ",
        image: "11.png",
      },
      {
        title: "Sinh tố Dâu",
        subtitle: "20.000đ",
        image: "20.png",
      },
      {
        title: "Sinh tố lúa mạch",
        subtitle: "15.000đ",
        image: "21.png",
      },
      {
        title: "Trà sữa thái xanh",
        subtitle: "28.000đ",
        image: "7.png",
      },
    ],
    offers: [
      {
        title: "Khách hàng VIP",
        subtitle: "Giảm 30% ",
        icon: "mdi mdi-diamond-stone",
      },
      {
        title: "Ưu đãi",
        subtitle: "Mua 1 tặng 1",
        icon: "mdi mdi-gift",
      },
      {
        title: "Phục vụ 24/7",
        subtitle: "6:00 đến 22:00",
        icon: "mdi-clock",
      },
      {
        title: "Nhiều ưu đãi khác",
        subtitle: "Mua ngay",
        icon: "mdi mdi-ticket",
      },
      {
        title: "Miễn phí ship",
        subtitle: "Đối với đơn từ 150.000đ trở lên",
        icon: "mdi-truck-delivery",
      },
    ],
    pictures: [
      {
        src: "p2.jpg",
      },
      {
        src: "p4.jpg",
      },
      {
        src: "p3.jpg",
      },
      {
        src: "p1.jpg",
      },
    ],
    dishes: [
      { id : 7, image: "f1.png", name: "Kem ốc quế", money: "20.000đ" },
      { id: 4, image: "cfchon.png", name: "Cà phê chồn", money: "200.000đ" },
      { id: 1, image: "capuchino.png", name: "Cappuccino", money: "40.000đ" },
      { id : 14, image: "kembingsu.png", name: "Kem Bing su Hàn Quốc", money: "30.000đ" },
      { id : 30, image: "STot.png", name: "Sinh tố ớt", money: "49.000đ" },
      { id: 3, image: "cfmuoi.png", name: "Cà phê muối", money: "20.000đ" },
      { id : 35, image: "7.png", name: "Trà sữa thái xanh", money: "28.000đ" },
      { id : 44, image: "tramangcut.png", name: "Trà măng cụt", money: "25.000đ" },
    ],
  }),
  methods:{
    goToVocherPage() {
      this.$router.push('/vocher');
    },


    addToCart(product) {
  console.log("Sản phẩm đã chọn:", product);

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  let existingProduct = cartItems.find(item => item.id === product.id);

  if (!existingProduct) {
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào với số lượng là 1
    product.quantity = 1;
    product.money = parseFloat(product.money.replace('đ', ''));
    cartItems.push(product);
  } else {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
    existingProduct.quantity++;
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
},


    formatMoney(amount) {
      if (typeof amount !== 'string') {
        amount = amount.toString();
      }
      if (amount.includes('đ')) {
        amount = amount.replace('đ', '');
      }
      const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 3
      }).format(amount);
      return formattedAmount;
    },

    addToFavorites(product) {
  console.log("Sản phẩm đã chọn:", product);

  let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

  let existingProduct = favoriteItems.find(item => item.id === product.id);

  if (!existingProduct) {
    product.quantity = 1;
    product.money = parseFloat(product.money.replace('đ', ''));
    product.id = favoriteItems.length + 1;
    favoriteItems.push(product);
  } else {
    existingProduct.quantity++;
  }

  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}
  }
};

</script>
<style scoped>
.co {
  /* màu nền chính */
  background-color: #F7F2E5; 
}
.tb {
  /* thanh bán chạy nhất  */
  background-color: #FAD06C; 
}

.cat {
  /* phổ biến và khách hàng */
  background-color: #F7F2E5;
  /* màu chữ */
  color: black;
}
/* .tag:hover {
  color: orange;
} */
.btn {
  /* btn xem ưu đãi */
  background-color: #B7AC9A;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  transform: scale(1.2);  
}
</style>
