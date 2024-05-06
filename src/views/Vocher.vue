<template>
      <SideBare/>
            <v-toolbar color="#1F1F1F">
                <v-toolbar-title
                >Voucher của bạn</v-toolbar-title
                >

                <v-spacer></v-spacer>                  
                <v-btn color="white" class="btn" @click="goToVocherPage"> khuyến mãi khác </v-btn>
            </v-toolbar>
      <h1>Ưu đãi của bạn sẽ được hiển thị ở đây</h1>
      <Footer/>
  </template>
  
  <script setup>

  </script>
  <style scoped>
    h1{
        color: orange;
        height: 500px;
        background-color: rgb(31, 31, 31);
    }
</style>
  