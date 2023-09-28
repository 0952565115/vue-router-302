<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 6,
    "name": "Sukhum Craft スクンクラフト",
    "review": "เป็นหนึ่งในร้านกาแฟเชียงใหม่แนว Specialty ที่ได้ทั้งอารมณ์คราฟต์ มินิมอล และกลิ่นอายกาแฟสดเชียงใหม่ผสมญี่ปุ่นนิด ๆ ไปแบบเต็มเปี่ยม ดูน่ารัก ตัวกาแฟมีความผสมผสานทั้งของไทยและของนอก ทำได้น่าสนใจ ส่วนตัวแนะนำ “Americano” ตัวร้านอาจจะอยู่ไกลหน่อย แต่น่าแวะสุด ๆ แถมราคายังเป็นมิตรอีกด้วย",
    "coverimage": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377122712_3446093835702557_9040405550870029248_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHuQ4DZUJ5NaYCEDgmIFuRc9GXvsC7Lcyv0Ze-wLstzK0JfZJOY4OKYKtDrm752AwN6rG0hDEpfQHMvvSOn1TOu&_nc_ohc=I08xGuD3ga0AX-ZE6Be&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdQ3CEZosO51vzsjzccrj0njPuNFmVIQMsqEA9DtzB8BOw&oe=652BD7D1",
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