<template>
  <div class="Mybar">
    <ul>
      <li><img src="https://www.emojiall.com/en/header-svg/%E2%98%95%EF%B8%8F.svg" alt="" style="width: 30px; margin-left: 20px; margin-right: 0px; margin-top: 10px;"></li>
      <li><p>Coffee Shop booking website</p></li>
      <li><a class="active" href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>
</template>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li p {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

</style>