<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12" style="background-color: orange;">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Vui lòng đăng nhập</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined >
                            <v-icon icon="mdi mdi-facebook" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon icon="mdi mdi-google" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon icon="mdi mdi-twitter" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4" style="padding-bottom: 16px;">Vui lòng Không để trống tài khoản và mật khẩu</h4>
                        <v-form @submit.prevent="signIn">
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            @blur="checkEmailValidity"
                            v-model="email"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            @blur="checkPasswordValidity"
                            v-model="password"
                          />
                          <span v-if="passwordError" class="error-message">Mật khẩu không được để trống</span>
                        </v-form>
                        <span v-if="emailError" class="error-message">Email không đúng định dạng</span>
                        <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
                        <h3 class="text-center mt-4">Bạn quên mật khẩu ?</h3>
                        <div class="text-center mt-3" style="padding-bottom: 30px">
                          <v-btn rounded style="background-color: #000;color: #fff;" @click="signIn">SIGN IN</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1" style="padding-bottom: 16px;">Đăng ký</h1>
                        <h5
                          class="text-center"
                        >Nếu bạn chưa có tài khoản</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1" style="padding-bottom: 16px">Đăng nhập</h1>
                        <h5
                        >Nếu bạn đã có tài khoản vui lòng đăng nhập tại đây</h5>
                      </v-card-text>
                      <div class="text-center" style="padding-bottom: 30px;">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Đăng kí</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined >
                            <v-icon icon="mdi mdi-facebook" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined >
                            <v-icon icon="mdi mdi-google" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined >
                            <v-icon icon="mdi mdi-twitter" class="ms-2" style="font-size: 32px;"></v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4" style="padding-bottom: 16px;" >Vui lòng Không để trống tài khoản và mật khẩu</h4>
                        <v-form @submit.prevent="signUp">
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            @blur="checkNameValidity"
                            v-model="name"
                          />
                          <span v-if="nameError" class="error-message">Tên không được để trống</span>

                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            @blur="checkEmailValidity"
                            v-model="email"
                          />
                          <span v-if="emailError" class="error-message">Email không đúng định dạng</span>

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            @blur="checkPasswordValidity"
                            v-model="password"
                          />
                          <span v-if="passwordError" class="error-message">Mật khẩu không được để trống</span>
                          <div class="text-center mt-n5" style="padding-bottom: 16px;">
                            <v-btn style="background-color: #000; color: #fff;" type="submit" rounded  >SIGN UP</v-btn>
                          </div>
                        </v-form>
                        <span v-if="successMessage" class="success-message">{{ successMessage }}</span>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    email: '',
    password: '',
    name: '',
    emailError: false,
    passwordError: false,
    nameError: false,
    errorMessage: '',
    successMessage: ''
  }),
  methods: {
    checkEmailValidity() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailRegex.test(this.email);
    },
    checkPasswordValidity() {
      this.passwordError = this.password.trim() === '';
    },
    checkNameValidity() {
      this.nameError = this.name.trim() === '';
    },
    signIn() {
      // Assume this is your validation logic, for now, let's just assume they are valid
      const isValid = true; // Implement your validation logic here
      
      if (isValid) {
        // Display success message
        this.successMessage = 'Đăng nhập thành công!';
        // Redirect to home page (you can change the URL accordingly)
        this.$router.push({ name: 'Home' });
        this.activeButton = 'home';
      } else {
        // Display error message
        this.errorMessage = 'Tài khoản hoặc mật khẩu không đúng';
      }
    },
    signUp() {
      // Assume this is your sign-up logic
      if (this.nameError || this.emailError || this.passwordError) {
        this.successMessage = 'Vui lòng nhập đúng định dạng.';
      } else {
        // Assume sign-up is successful
        this.successMessage = 'Đăng kí thành công!';
        // Reset fields after successful sign-up
        this.name = '';
        this.email = '';
        this.password = '';
      }
    }
  }
};
</script>

<style>
.error-message {
  color: red;
  font-size: 14px;
}
.success-message {
  color: green;
  font-size: 14px;
}
</style>
