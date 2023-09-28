<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 1,
    "name": "The Sax Music House",
    "review": "ร้าน sax ตั้งอยู่ที่โครงการวันนิมมาน ใครมาแถวนี้แล้วอยากหาร้านที่เหมาะแก่การนั่งจิบกาแฟเบาๆ แนะนำร้านนี้เลย ในร้านตกแต่งแนวคลาสสิค บรรยากาศดี มีดนตรีสดให้ฟัง และยังเป็นดนตรีสากลอีกด้วย ใครที่จะมาพูดคุยสังสรรค์ก็ถือว่าดีเลย",
    "coverimage": "https://img.wongnai.com/p/1920x0/2021/01/25/d89985104ddf41f48fc2852591138e60.jpg",
    "price": "1700 $",
    "latitude": 18.799182,
    "longitude": 98.967171,
  }
])


</script>

<template>
  <h1 style="margin-top: 20px; text-align: center; font-size: 50px;">
    Coffee Shop Detail
  </h1><hr>
  <div class="card" v-for="(n) in CoffeeShopDetail" :key="n">
    <img :src="n.coverimage" :alt="name" style="width:100%">
    <div class="container-all">
      <h2>{{ n.name }}</h2>
      <p style="margin-top: 10px; font-size: 16px;">{{ n.review }}</p>
      <div class="container">
        <p style="margin-top: 10px; font-size: 16px;">ราคาโต๊ะ : {{n.price}}</p>
        <p style="margin-top: 10px; margin-bottom: 10px; font-size: 16px;">-*-*- 5 คนต่อ 1 โต๊ะ -*-*-</p>
        <button type="button" class="btn">จองโต๊ะ</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

hr {
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: .50;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.6s;
  margin: 30px;
  border-radius: 10px;
  background-color: white;
  margin-left: 300px;
  margin-right: 300px;
}
.container-all {
  padding: 10px 25px;
}

.container {
  text-align: center;
}
.btn {
  text-align: center;
  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  background-color: lightblue;
  border: 0;
}

.btn:hover {
  color: white;
  background-color: lightcoral;
  transition: 0.6s;
  border: 0;
}
</style>