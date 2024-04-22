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
    { image: "f1.png", name: "Kem ốc quế", money: "20.000đ" },
      { image: "f2.png", name: "sữa chua", money: "15.000đ" },
       { image: "kemdua.png", name: "Kem dừa", money: "22.000đ" },
       { image: "kemvietquoc.png", name: "Kem việt quốc", money: "30.000đ" },
       { image: "kemchuoi.png", name: "Kem chuối", money: "27.000đ" },
       { image: "kemdau.png", name: "Kem dâu", money: "30.000đ" },
       { image: "kemsocola.png", name: "Kem Chocolate", money: "25.000đ" },
       { image: "kembingsu.png", name: "Kem Bing su Hàn Quốc", money: "30.000đ" },
       { image: "kemsaurieng.png", name: "Kem sầu riêng", money: "25.000đ" },
       { image: "kemxoai.png", name: "Kem xoài", money: "25.000đ" },
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
 
 
   