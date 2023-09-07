<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <!-- <HelloWorld msg="这是赵芃瑞的作业" /> -->

        <nav v-for="item in routerItem">
          <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->

          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerItem: [
        {
          name: '城乡',
          path: '/chengxiang'
        },
        {
          name: '行业-城镇',
          path: '/hangyechengzhen'
        },
        {
          name: '行业-国有',
          path: '/hangyeguoyou'
        },
        {
          name: '经济-城镇',
          path: '/jingjichengzhen'
        },
        {
          name: '经济-乡村',
          path: '/jingjixiangcun'
        },
        {
          name: '劳动力',
          path: '/laodongli'
        },
        {
          name: '三次产业',
          path: '/sancichanye'
        },
        {
          name: '私营企业',
          path: '/siyingqiye'
        }
      ]
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
