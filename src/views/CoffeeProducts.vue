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
      { image: "capuchino.png", name: "Cappuccino", money: "40.000đ" },
      { image: "Bacxiu.png", name: "Bạc xĩu", money: "20.000đ" },
      { image: "cfmuoi.png", name: "Cà phê muối", money: "20.000đ" },
      { image: "cfchon.png", name: "Cà phê chồn", money: "200.000đ" },
      { image: "f5.png", name: "Cà phê sữa", money: "18.000đ" },
      { image: "f6.png", name: "Cà phê đen", money: "15.000đ" },
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


  