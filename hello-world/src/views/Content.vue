<template>
  <div>
    contenttttttttttttt
    <div>
      {{ msg }}
      <div v-html="rawHtml" />
    </div>
  </div>
</template>

<script>
  import http from '@/api/request'

  export default {
    name: 'Content',
    data() {
      return {
        msg: 'Hello World!',
        rawHtml: ''
      }
    },
    created() {
      var vm = this
      // http请求拿到A站内容 然后用v-html指令填充上去
      http.get('/api', null, null, function(response) {
        vm.$data.rawHtml = response.data
      })
    }
  }
</script>
