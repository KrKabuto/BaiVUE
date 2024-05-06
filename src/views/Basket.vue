<template>
    <div>
      <v-toolbar color="#1F1F1F">
        <v-toolbar-title>Giỏ hàng</v-toolbar-title>
        <v-spacer></v-spacer>                  
      </v-toolbar>
      <v-container>
        <!-- Hiển thị danh sách sản phẩm đã thêm vào giỏ hàng -->
        <v-row>
          <v-col v-for="(product, index) in cartItems" :key="index" cols="12">
            <v-card>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>{{ formatMoney(product.money) }} x {{ product.quantity }}</v-card-subtitle>
              <v-card-text>
                <img :src="product.image" alt="Product image" style="width: 100px; height: 100px;">
              </v-card-text>
              <!-- Thêm phần chọn số lượng -->
              <v-row class="mb-2 align-center">
                <v-col cols="4">
                  <v-btn icon @click="decreaseQuantity(product)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="4" class="text-center">
                  <v-text-field v-model="product.quantity" dense outlined readonly></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn icon @click="increaseQuantity(product)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <!-- Nút xóa sản phẩm -->
              <v-btn color="error" @click="removeFromCart(product)">Xóa</v-btn>
              <!-- Hiển thị tổng tiền của sản phẩm -->
              <div class="text-center">Tổng: {{ formatMoney(calculateProductTotal(product)) }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Hiển thị tổng tiền của tất cả sản phẩm -->
      <div class="text-center">Tổng tiền: {{ formatMoney(calculateTotalAmount) }}</div>
      <!-- Nút thanh toán -->
      <v-btn color="primary" @click="goToPaymentPage">Thanh toán</v-btn>
      <Footer/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Danh sách sản phẩm trong giỏ hàng
        cartItems: [],
      };
    },
    computed: {
      // Tính tổng tiền của một sản phẩm dựa trên số lượng đã chọn
      calculateProductTotal() {
        return (product) => {
          return product.quantity * parseFloat(product.money);
        };
      },
      // Tính tổng tiền của tất cả các sản phẩm trong giỏ hàng
      calculateTotalAmount() {
        return this.cartItems.reduce((total, product) => total + (product.quantity * parseFloat(product.money)), 0);
      }
    },
    mounted() {
      // Lấy danh sách sản phẩm từ local storage khi component được tạo
      this.fetchCartItems();
    },
    methods: {
      // Phương thức để lấy danh sách sản phẩm trong giỏ hàng từ local storage
      fetchCartItems() {
        // Lấy danh sách sản phẩm từ local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Gán danh sách sản phẩm vào biến cartItems trong data
        this.cartItems = cartItems;
      },
      // Phương thức để giảm số lượng sản phẩm
      decreaseQuantity(product) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      },
      // Phương thức để tăng số lượng sản phẩm
      increaseQuantity(product) {
        product.quantity++;
      },
      // Phương thức để xóa sản phẩm khỏi giỏ hàng
      removeFromCart(product) {
        // Lọc ra danh sách sản phẩm mới bằng cách loại bỏ sản phẩm được chọn
        this.cartItems = this.cartItems.filter(item => item !== product);
        // Lưu danh sách sản phẩm mới vào local storage hoặc gọi API để cập nhật
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      },
      // Phương thức để xử lý khi người dùng nhấn thanh toán
      checkout() {
        // Chuyển người dùng đến trang thanh toán
        // Thực hiện các bước xử lý thanh toán tại đây
        console.log("Xử lý thanh toán...");
      },
      // Phương thức để định dạng số tiền thành tiền tệ và thêm đơn vị đồng
      // Trong phương thức formatMoney, thêm đơn vị tiền tệ vào cuối chuỗi
      formatMoney(amount) {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 3 // Số lượng số thập phân tối thiểu
        }).format(amount);
        return formattedAmount ;
      },
      goToPaymentPage() {
        // Tạo một đối tượng để lưu trữ thông tin sản phẩm và tổng số tiền
        const paymentData = {
          cartItems: this.cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity,
            money: item.money,
            image: item.image // Thêm trường image vào đây
          })),
          totalAmount: this.calculateTotalAmount
        };
  
        // Chuyển đối tượng paymentData thành một mảng JSON trước khi truyền
        const paymentDataJSON = JSON.stringify(paymentData);
  
        // Chuyển người dùng đến trang thanh toán và truyền dữ liệu qua query parameters
        this.$router.push({ name: 'payment', query: { paymentData: paymentDataJSON } });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Thêm CSS tùy chỉnh nếu cần */
  </style>
  