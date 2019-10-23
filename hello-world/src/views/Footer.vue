<template>
  <footer class="copy">
    Copy &copy; {{ name }}
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        name: 'cqx'
      }
    }
  }
</script>

<style scoped>
  .copy {
    font-size: 8px;
    color: aqua;
  }
</style>
