<script setup>

import { ref } from 'vue';

const CoffeeShopDetail = ref([
  {
    "id": 3,
    "name": "di BOSCO COFFEE SPECIALIST",
    "review": "เป็นร้านกาแฟในเชียงใหม่ดี ๆ อีกร้านหนึ่งที่แม่ริม ใครมาแถวนี้แล้วอยากหาร้านที่เน้นกาแฟจริงจัง แนะนำร้านนี้เลยครับ ในร้านมีเมนูเครื่องดื่มและอาหารไว้บริการ เมล็ดกาแฟในร้านมีให้เลือกเยอะมาก ๆ เยอะจนตกใจ เรียกได้ว่าใครชอบดื่มแบบไหน มีให้เลือกครบทุกแนว วันนี้สั่งเป็นเมล็ดพิเศษอย่าง “May Flower” กับตัวปกติมาลอง ตัวพิเศษจะราคาสูงหน่อย แต่รสชาติดี ถูกใจมาก ๆ ครับ",
    "coverimage": "https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/377124405_845751270533460_2060598025526403964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFYHRG540bGoZdhHynUrdCvE1D2kYNE2iQTUPaRg0TaJCwuNgQIQTN0Nj6MxmK1A22P6H2gkhpO0OqW4JzAvJtB&_nc_ohc=alG10MBBdmEAX927vr4&_nc_ht=scontent.fbkk8-4.fna&oh=03_AdROAzkAOj9mEoqcR4eZ8DbqvnvgA_1TLDf6LbNC-kWDDQ&oe=652BDD05",
    "price": "2000 $"
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