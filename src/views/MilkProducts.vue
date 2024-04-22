<template>
    <v-window v-model="tab" class="co">
   <v-window-item v-for="n in 3" :key="n" :value="n">
     <v-container fluid>
       <v-row>
         <v-col v-for="(dishe, i) in dishes" :key="i" cols="12" md="3">
           <v-hover v-slot="{ isHovering, props }" open-delay="200">
             <v-card class="" color="#111111" v-bind="props">
               <v-img height="90" :src="dishe.image" class="mt-6"></v-img>
               <v-card-item class="text-center mt-14">
                 <v-card-subtitle>
                   <span class=" ">{{ dishe.name }}</span>
                 </v-card-subtitle>
                 <v-card-title class="text-caption text-orange">{{ dishe.money }}</v-card-title>
               </v-card-item>
               <v-expand-transition>
                 <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-grey-darken-3 v-card--reveal text-h2" style="height: 100%">
                   <v-btn density="compact" icon="mdi mdi-magnify" class="mr-2"></v-btn>
                   <v-btn density="compact" icon="mdi mdi-heart-outline" class="mr-2"></v-btn>
                   <v-btn density="compact" icon="mdi mdi-sync"></v-btn>
                 </div>
               </v-expand-transition>
             </v-card>
           </v-hover>
         </v-col>
       </v-row>
     </v-container>
   </v-window-item>
 </v-window>
 
   </template>
   
   <script setup>
 import { ref } from 'vue';
 </script>
 
 <script>
 export default {
   data: () => ({
     tab: null,
     dishes: [
     { image: "f7.avif", name: "Trà sữa Chocolate", money: "23.000đ" },
      { image: "TStruyenthong.png", name: "Trà sữa truyền thống", money: "20.000đ" },
       { image: "TSkhoaimon.png", name: "Trà sữa Khoai môn", money: "25.000đ" },
       { image: "7.png", name: "Trà sữa thái xanh", money: "28.000đ" },
       { image: "TSmatcha.png", name: "Trà sữa Matcha", money: "25.000đ" },
       { image: "TSdau.png", name: "Trà sữa dâu tây", money: "23.000đ" },
       { image: "TSduongden.png", name: "Sữa tươi trân châu đường đen", money: "25.000đ" },
       { image: "trachanh.png", name: "Trà chanh", money: "20.000đ" },
       { image: "tradao.png", name: "Trà đào", money: "25.000đ" },
       { image: "tratac.png", name: "Trà tắc", money: "20.000đ" },
       { image: "traoi.png", name: "Trà ổi hồng", money: "25.000đ" },
       { image: "tramangcau.png", name: "Trà mãng cầu", money: "25.000đ" },
       { image: "tramangcut.png", name: "Trà măng cụt", money: "25.000đ" },
       { image: "travai.png", name: "Trà vải", money: "25.000đ" },
       { image: "trahoahong.png", name: "Trà hoa hồng", money: "39.000đ" },
     ],
   }),
 };
 </script>
 
   
 <style scoped>
 .co {
   background-color: #1f1f1f;
 }
 
 .text-orange {
   color: orange;
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
 </style>
 
 
   