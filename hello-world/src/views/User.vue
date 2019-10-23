<template>
  <section>
    用户页面
    <div v-for="user in users" v-show="isCurrentUser(user.id)" :key="user.id">
      {{ user.id + ":" + user.name + ":" + user.link }}
    </div>
  </section>
</template>

<script>
  var users = [
    {
      id: 1,
      name: '阿强',
      link: 'www.baidu.com'
    },
    {
      id: 2,
      name: '阿珍',
      link: 'www.acfun.cn'
    },
    {
      id: 3,
      name: '阿红',
      link: 'www.bilibili.com'
    }
  ]
  export default {
    name: 'User',
    data() {
      return {
        users: users
      }
    },
    methods: {
      // 查看路由过来的id，是否跟当前的匹配，是返回true
      isCurrentUser: function(uid) {
        return parseInt(this.$route.params.id) === uid
      }
    }
  }

</script>
