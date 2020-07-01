<template>
  <div class="header">
    <button v-show="loggedIn" class="logout-button">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>

<style scoped>
.header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: skyblue;
}

.logout-button {
  float: right;
}


</style>
