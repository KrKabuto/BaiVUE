<template>
    <div>
      <v-toolbar color="#1F1F1F">
        <v-toolbar-title>Thanh toán</v-toolbar-title>
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
              <!-- Hiển thị tổng tiền của sản phẩm -->
              <div class="text-center">Tổng: {{ formatMoney(calculateProductTotal(product)) }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Hiển thị tổng tiền của tất cả sản phẩm -->
      <div class="text-center">Tổng tiền: {{ formatMoney(totalAmount) }}</div>
  
      <!-- Hiển thị các phương thức thanh toán -->
      <div class="text-center mt-5 d-flex flex-column align-items-center">
        <h3>Chọn phương thức thanh toán</h3>
        <v-btn color="primary" class="payment-btn" @click="showAddressForm">Thanh toán khi nhận hàng</v-btn>
        <v-btn color="primary" class="payment-btn" @click="showMomoPaymentModal">Thanh toán bằng Momo</v-btn>
        <v-btn color="primary" class="payment-btn" @click="showVnpayPaymentModal">Thanh toán bằng VNPayQR</v-btn>
        <v-btn color="primary" class="payment-btn" @click="showBidvPaymentModal">Chuyển khoản ngân hàng</v-btn>
      </div>
  
      <!-- Modal cho nhập địa chỉ -->
      <v-dialog v-model="addressFormModal" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Nhập địa chỉ nhận hàng và số điện thoại</v-card-title>
          <v-card-text>
            <v-text-field v-model="deliveryAddress" label="Địa chỉ nhận hàng"></v-text-field>
            <v-text-field v-model="phoneNumber" label="Số điện thoại"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="confirmDeliveryInfo">Xác nhận</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Modal cho thông báo -->
      <v-dialog v-model="deliveryNotificationModal" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Thông báo</v-card-title>
          <v-card-text>
            Đơn hàng của bạn đang được giao cho đơn vị vận chuyển và sẽ được giao đến bạn trong vòng 15 đến 30 phút. Vui lòng chú ý cuộc gọi để không bỏ lỡ đơn hàng nhé!!!
          </v-card-text>
        </v-card>
      </v-dialog>
  
      <!-- Modal cho thanh toán bằng Momo -->
      <v-dialog v-model="momoPaymentModal" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Thanh toán bằng Momo</v-card-title>
          <v-card-text>
            <!-- Thông tin thanh toán -->
            <div class="text-center">
              <img src="/public/QRMOMO.png" alt="Momo QR" style="width: 200px; height: 200px;">
              <h4>Chủ tài khoản : TRAN QUOC TOAN</h4>
              <p style="color: green;">Tổng tiền cần thanh toán: {{ formatMoney(totalAmount) }}</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="momoPaymentConfirmed">Đã thanh toán</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Modal cho thanh toán bằng VNPAYQR -->
      <v-dialog v-model="vnpayPaymentModal" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Thanh toán bằng VNPAYQR</v-card-title>
          <v-card-text>
            <!-- Thông tin thanh toán -->
            <div class="text-center">
              <img src="/public/QRVNPAY.png" alt="Vnpay QR" style="width: 200px; height: 200px;">
              <h4>Chủ tài khoản : TRAN QUOC TOAN</h4>
              <p style="color: green;">Tổng tiền cần thanh toán: {{ formatMoney(totalAmount) }}</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="vnpayPaymentConfirmed">Đã thanh toán</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

       <!-- Modal cho thanh toán bằng ngân hàng -->
       <v-dialog v-model="bidvPaymentModal" max-width="500">
        <v-card>
          <v-card-title class="text-h5">Thanh toán bằng Ngân hàng</v-card-title>
          <v-card-text>
            <!-- Thông tin thanh toán -->
            <div class="text-center">
              <img src="/public/QRBIDV.png" alt="Bidv QR" style="width: 200px; height: 200px;">
              <h4>Chủ tài khoản : TRAN QUOC TOAN</h4>
              <p style="color: green;">Tổng tiền cần thanh toán: {{ formatMoney(totalAmount) }}</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="bidvPaymentConfirmed">Đã thanh toán</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Danh sách sản phẩm trong giỏ hàng
        cartItems: [],
        // Tổng tiền của tất cả các sản phẩm
        totalAmount: 0,
        // Trạng thái của modal nhập địa chỉ
        addressFormModal: false,
        // Trạng thái của modal thông báo
        deliveryNotificationModal: false,
        // Trạng thái của modal thanh toán bằng Momo
        momoPaymentModal: false,
        // Trạng thái của modal thanh toán bằng VNPayQR
        vnpayPaymentModal: false,
        // Trạng thái của modal thanh toán bằng ngân hàng
        bidvPaymentModal: false,
        // Địa chỉ nhận hàng
        deliveryAddress: '',
        // Số điện thoại
        phoneNumber: ''
      };
    },
    computed: {
      // Tính tổng tiền của một sản phẩm dựa trên số lượng đã chọn
      calculateProductTotal() {
        return (product) => {
          return product.quantity * parseFloat(product.money);
        };
      },
    },
    mounted() {
      // Parse lại dữ liệu từ chuỗi JSON được truyền qua query parameters
      const paymentData = JSON.parse(this.$route.query.paymentData);
      // Lưu dữ liệu vào data để sử dụng trong template
      this.cartItems = paymentData.cartItems;
      // Tính tổng tiền của tất cả các sản phẩm
      this.totalAmount = paymentData.totalAmount;
    },
    methods: {
      // Phương thức để định dạng số tiền thành tiền tệ và thêm đơn vị đồng
      formatMoney(amount) {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 3 // Số lượng số thập phân tối thiểu
        }).format(amount);
        return formattedAmount;
      },
      // Hiển thị modal nhập địa chỉ
      showAddressForm() {
        this.addressFormModal = true;
      },
      // Phương thức xác nhận địa chỉ và hiển thị thông báo
      confirmDeliveryInfo() {
        // Xử lý logic xác nhận địa chỉ và hiển thị thông báo
        console.log("Đã xác nhận địa chỉ:", this.deliveryAddress);
        console.log("Số điện thoại:", this.phoneNumber);
        this.addressFormModal = false; // Đóng modal nhập địa chỉ
        this.deliveryNotificationModal = true; // Mở modal thông báo
      },
      // Hiển thị modal cho thanh toán bằng Momo
      showMomoPaymentModal() {
        // Hiển thị modal thanh toán bằng Momo
        this.momoPaymentModal = true;
      },
      // Xác nhận thanh toán bằng Momo
      momoPaymentConfirmed() {
        // Thực hiện các bước xác nhận thanh toán bằng Momo
        console.log("Đã thanh toán bằng Momo...");
        this.momoPaymentModal = false; // Đóng modal thanh toán bằng Momo
        // Hiển thị modal nhập địa chỉ để xác nhận địa chỉ và thông báo giao hàng
        this.addressFormModal = true;
      },
      // Hiển thị modal cho thanh toán bằng Vnpay
      showVnpayPaymentModal(){
        this.vnpayPaymentModal = true;
      },
      // Xác nhận thanh toán bằng Vnpay
      vnpayPaymentConfirmed(){
        // Thực hiện các bước xác nhận thanh toán bằng Vnpay
        console.log("Đã thanh toán bằng Vnpay...");
        this.vnpayPaymentModal = false; // Đóng modal thanh toán bằng vnpay
        // Hiển thị modal nhập địa chỉ để xác nhận địa chỉ và thông báo giao hàng
        this.addressFormModal = true;
      },
      // Hiển thị modal cho thanh toán bằng Ngân hàng
      showBidvPaymentModal(){
        this.bidvPaymentModal = true;
      },
      // Xác nhận thanh toán bằng Vnpay
      bidvPaymentConfirmed(){
        // Thực hiện các bước xác nhận thanh toán bằng Ngân hàng
        console.log("Đã thanh toán bằng chuyển khoản ngân hàng...");
        this.bidvPaymentModal = false; // Đóng modal thanh toán bằng vnpay
        // Hiển thị modal nhập địa chỉ để xác nhận địa chỉ và thông báo giao hàng
        this.addressFormModal = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-btn {
    width: 300px; 
    margin-bottom: 15px; 
  }
  </style>
  