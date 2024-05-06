<template>
    <div>
      <v-toolbar color="#1F1F1F">
        <v-toolbar-title>Danh sách yêu thích</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col v-for="(product, index) in favoriteItems" :key="index" cols="12">
            <v-card>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>{{ formatMoney(product.money) }}</v-card-subtitle>
              <v-card-text>
                <img :src="product.image" alt="Product image" style="width: 100px; height: 100px;">
              </v-card-text>
              <!-- Nút xóa sản phẩm -->
              <v-card-actions>
                <v-btn color="error" @click="removeFromFavorites(product)">Xóa</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Danh sách sản phẩm yêu thích
        favoriteItems: [],
      };
    },
    mounted() {
      // Lấy danh sách sản phẩm yêu thích từ localStorage khi component được tạo
      this.fetchFavoriteItems();
    },
    methods: {
      // Phương thức để lấy danh sách sản phẩm yêu thích từ localStorage
      fetchFavoriteItems() {
        // Lấy danh sách sản phẩm từ localStorage
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        // Gán danh sách sản phẩm vào biến favoriteItems trong data
        this.favoriteItems = favoriteItems;
      },
      // Phương thức để xóa sản phẩm khỏi danh sách yêu thích
      removeFromFavorites(product) {
        // Lọc ra danh sách sản phẩm mới bằng cách loại bỏ sản phẩm được chọn
        this.favoriteItems = this.favoriteItems.filter(item => item !== product);
        // Lưu danh sách sản phẩm mới vào localStorage
        localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteItems));
      },
      // Phương thức để định dạng số tiền thành tiền tệ và thêm đơn vị đồng
      formatMoney(amount) {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 3 // Số lượng số thập phân tối thiểu
        }).format(amount);
        return formattedAmount;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Thêm CSS tùy chỉnh nếu cần */
  </style>
  