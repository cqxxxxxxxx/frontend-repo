<template>
  <section id="index">
    <CustomHeader />
    indexxxxxxxxxxxxx
    <div>{{ msg }}</div>
    <router-link to="/user/1">user1</router-link>
    <router-link to="/user/2">user2</router-link>
    <router-link to="/user/3">user3</router-link>

    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
    <CustomFooter />
  </section>
</template>

<script>
  import CustomHeader from '@/views/Header.vue'
  import CustomFooter from '@/views/Footer'

  export default {
    components: {
      CustomHeader, CustomFooter
    },
    data() {
      return {
        msg: 'Hello World!',
        items: ''
      }
    },
    created() {
      this.$data.items = this.loadItems()
    },
    methods: {
      loadItems: function() {
        return [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style scoped>
  #index {
    background: red;
    height: 100vh;
  }
</style>

