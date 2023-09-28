<script>
export default {
  props: ['id', 'name', 'review', 'coverimage', 'readmore']
}
</script>

<template>
  <div class="card">
    <img :src="coverimage" :alt="name" style="width:100%">
    <div class="container">
      <h2><b>{{ name }}</b></h2>
      <p>{{ review }}</p>

      <router-link :to="'/CoffeeShopDetail/'+id">
        {{ readmore }}
      </router-link>

    </div>
    <RouterView/>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.6s;
  margin: 30px;
  border-radius: 10px;
  background-color: white;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  padding: 20px;
}
.container {
  padding: 10px 25px;
}
</style>