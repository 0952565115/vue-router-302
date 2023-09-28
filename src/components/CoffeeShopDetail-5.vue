<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 5,
    "name": "Nine One Coffee",
    "review": "เป็นร้านกาแฟในเชียงใหม่ที่เจ้าถิ่นพามาเพราะเป็นลูกค้าประจำค่ะ ร้านนี้ขึ้นชื่อเรื่องของ “Drip Coffee” มาก ๆ มีเมล็ดกาแฟหลากหลายของไทยที่เค้าจะ Blend เองให้ลูกค้าตามใจชอบเลย ถ้าเลือกไม่ถูก บาริสต้าที่นี่ก็พร้อมให้คำแนะนำแบบละเอียดยิบ แถมอัธยาศัยดี ยิ้มแย้มแจ่มใสด้วยค่ะ สำหรับวันนี้ลองเป็นกาแฟชื่อ “Fruity Floral” ที่เค้าดริปแบบ เก็บน้ำแรกของการดริปไว้ให้เราดื่มด้วย ถือเป็นอีกหนึ่งร้านกาแฟดี ๆ ในนิมมานที่น่ามาลองค่ะ",
    "coverimage": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377121513_854568835832443_4484750541489743961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEKSkApGNRlAUToJxhXYVCy2CgTlGQtVknYKBOUZC1WSQO0AKaRDypMx11ZgRJgpLvEV2zgUn-KdjIF8NYiAaMB&_nc_ohc=TSbgpLaS_QUAX_FZr4R&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdTfd2hFHMSxeFkwLim8ylfc_UD5pL2X4Abqcf_KmUrD6w&oe=652BEC45",
    "price": "1900 $",
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