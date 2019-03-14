<template>
  <div>
    <ul class="nav justify-content-end">
      <li class="nav-item nav-link">
        {{ $t('Common.Language') }}
      </li>
      <li class="nav-item">
        <a v-if="language !== 'tw'" class="nav-link" href="#" @click.prevent="changeLanguage('tw')">
          繁體中文
        </a>
      </li>
      <li class="nav-item nav-link">
        <a v-if="language !== 'en'" href="#" @click.prevent="changeLanguage('en')">
          English
        </a>
      </li>
      <li class="nav-item nav-link">
        {{ $t('Common.Hello') }} {{ $store.getters.name }}
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/form">
          Example
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>

<style scoped>

</style>
