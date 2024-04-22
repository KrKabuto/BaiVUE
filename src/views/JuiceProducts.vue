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
     { image: "f3.png", name: "Sinh tố Dừa", money: "20.000đ" },
      { image: "f4.png", name: "Sinh tố chuối", money: "20.000đ" },
       { image: "STdau.png", name: "Sinh tố dâu", money: "22.000đ" },
       { image: "STxoai.png", name: "Sinh tố xoài", money: "20.000đ" },
       { image: "STbo.png", name: "Sinh tố bơ", money: "22.000đ" },
       { image: "STthom.png", name: "Nước ép thơm", money: "18.000đ" },
       { image: "SToi.png", name: "Nước ép ổi hồng", money: "22.000đ" },
       { image: "STcam.png", name: "Nước cam vắt", money: "18.000đ" },
       { image: "STnho.png", name: "Nước ép nho", money: "20.000đ" },
       { image: "STtao.png", name: "Nước ép táo", money: "20.000đ" },
       { image: "STkiwi.png", name: "Nước Kiwi", money: "25.000đ" },
       { image: "STthapcam.png", name: "Nước trái cây nhiệt đới", money: "25.000đ" },
       { image: "STcantay.png", name: "Nước ép cần tây", money: "23.000đ" },
       { image: "STot.png", name: "Sinh tố ớt", money: "49.000đ" },
       { image: "44.png", name: "Chanh tuyết", money: "23.000đ" },
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
 
 
   