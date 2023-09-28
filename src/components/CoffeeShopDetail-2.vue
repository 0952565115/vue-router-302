<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 2,
    "name": "RISTR8TO",
    "review": "ร้านกาแฟเชียงใหม่ดี ๆ ย่านถนนนิมาน ร้านนี้อยู่หน้านิมมานซอยสาม มีลูกค้าเยอะตลอดทั้งวัน ทั้งชาวไทยและชาวต่างชาติ มีเมนูให้เลือกเยอะ มีเมล็ดกาแฟให้เลือกเยอะเช่นกัน วันนี้ได้สั่งเป็น “Dirty” ทางร้านผสมนมได้โอเคมาก ไม่หวาน มัน ๆ กำลังดี ช็อตกาแฟหอม ๆ ใส่ลงไปเข้ากันมาก สายกาแฟไม่ควรพลาดร้านนี้ ทั้งเรื่องรสชาติและบรรยากาศ ควรมาครับ",
    "coverimage": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122709_994115998539684_3112291651868365063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmeB_NoSDiRFXlx_TqeAaAyvRieiRBKETK9GJ6JEEoRMcyKmZHrohXWo-dbdza-6jRB4sdmd9OWu0MqH5iXgYm&_nc_ohc=rtajCFoM960AX_jE87L&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdRZdSEPhjeaErraclcS7DPQE0FL96kmgfNTJEU2DOnlPw&oe=652BE18E",
    "price": "1500 $",
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