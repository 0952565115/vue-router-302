<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 4,
    "name": "LOOPER & CO.",
    "review": "ร้านกาแฟ & ค็อกเทลบาร์ที่มีเมนูเครื่องดื่ม signature ให้เลือกเยอะ ซึ่งเมนูที่ไม่ควรพลาดคือกาแฟแบบคลาสสิกที่หอมกาแฟชัดเจนอย่าง “ลาเต้” หรือกาแฟพิเศษที่มีลูกเล่นแพรวพราวอย่าง “Umechu Tonic” ที่ได้ทั้ง Coldbrew, Plum และ Tonic ผสมรวมกันอย่างลงตัว ส่วนในช่วงกลางคืนทางร้านยังปรับโทนเป็นบาร์ และยังมาพร้อมเครื่องดื่มหลากหลายให้ได้เลือกอีกด้วยครับ",
    "coverimage": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122428_688862336450689_6270943685738234442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEE8-BOK5NCw7_ab-ufdi4vRuKhqZ_eW-xG4qGpn95b7MHXVW8GU-Y6LQD6JtLf41gghZryDwJfbCEKOJFAuO7W&_nc_ohc=pvXBEKmysQIAX8kE7UA&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdSTGZ62eAupGlnzeFkMgyIUTRQH047hQ3vLoZCpFr1jqw&oe=652BE109",
    "price": "1600 $",
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