<template>
  <v-window v-model="tab" class="co">
    <v-window-item v-for="n in 3" :key="n" :value="n">
      <v-container fluid>
        <v-row>
          <v-col v-for="(dishe, i) in dishes" :key="i" cols="12" md="3">
            <v-card class="" color="#F7F2E5">
              <v-img height="90" :src="dishe.image" class="mt-6"></v-img>
              <v-card-item class="text-center">
                <v-card-subtitle>
                  <span>{{ dishe.name }}</span>
                </v-card-subtitle>
                <v-card-title class="text-caption" style="color: red;">
                  {{ formatMoney(dishe.money) }}
                </v-card-title>
                <v-row style="align-items: center;">
                  <v-col cols="6">
                    <v-btn icon @click="addToFavorites(dishe)">
                      <v-icon color="#F97350">mdi-heart</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn icon @click="addToCart(dishe)">
                      <v-icon color="#F97350">mdi-cart</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-item>
              <!-- <v-card-actions>
                <v-btn icon @click="addToFavorites(dishe)">
                  <v-icon color="#F97350">mdi-heart</v-icon>
                </v-btn>
                <v-btn icon @click="addToCart(dishe)">
                  <v-icon color="#F97350">mdi-cart</v-icon>
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      dishes: [
       { id : 32, image: "f7.avif", name: "Trà sữa Chocolate", money: "23.000đ" },
       { id : 33, image: "TStruyenthong.png", name: "Trà sữa truyền thống", money: "20.000đ" },
       { id : 34, image: "TSkhoaimon.png", name: "Trà sữa Khoai môn", money: "25.000đ" },
       { id : 35, image: "7.png", name: "Trà sữa thái xanh", money: "28.000đ" },
       { id : 36, image: "TSmatcha.png", name: "Trà sữa Matcha", money: "25.000đ" },
       { id : 37, image: "TSdau.png", name: "Trà sữa dâu tây", money: "23.000đ" },
       { id : 38, image: "TSduongden.png", name: "Sữa tươi trân châu đường đen", money: "25.000đ" },
       { id : 39, image: "trachanh.png", name: "Trà chanh", money: "20.000đ" },
       { id : 40, image: "tradao.png", name: "Trà đào", money: "25.000đ" },
       { id : 41, image: "tratac.png", name: "Trà tắc", money: "20.000đ" },
       { id : 42, image: "traoi.png", name: "Trà ổi hồng", money: "25.000đ" },
       { id : 43, image: "tramangcau.png", name: "Trà mãng cầu", money: "25.000đ" },
       { id : 44, image: "tramangcut.png", name: "Trà măng cụt", money: "25.000đ" },
       { id : 45, image: "travai.png", name: "Trà vải", money: "25.000đ" },
       { id : 46, image: "trahoahong.png", name: "Trà hoa hồng", money: "39.000đ" },
      ],
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.co {
  background-color: #B7AC9A; /* Background  */
}

.text-orange {
  color: orange; /* Not used in this example */
}

.text-caption {
  font-size: 14px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

/* Đặt 2 nút sát viền */
.v-btn {
  padding: 0;
}

/* Added styles for card and text color based on your theme */
.v-card {
  background-color: #F7F2E5; /* Light beige card background */
}

.v-card-subtitle span,
.v-card-title {
  font-weight: bold;
  color: black; /* màu sp */
}
</style>
