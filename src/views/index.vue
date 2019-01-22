<template>
  <div>
    <ul class="nav_dropdown list-unstyled clearfix">
      <li>
        <a v-if="language !== 'tw'" href="#" @click.prevent="changeLanguage('tw')">
          繁體中文
        </a>
      </li><li>
        <a v-if="language !== 'en'" href="#" @click.prevent="changeLanguage('en')">
          English
        </a>
      </li>
    </ul>
    Index {{ $t('HomePage.Hello') }} {{ $store.getters.name }}
    <b-form @submit.prevent="onSubmit">
      <div class="form-group">
        <label class="form__label">
          Email
        </label>
        <input v-model.trim="email" v-validate="'required|email'" name="email" :data-vv-as="$t('Common.Email')" />
        <span v-show="errors.has('email')">
          {{ errors.first('email') }}
        </span>
      </div>
      <div class="btn_wrapper no_btn_wrapper">
        <button type="submit" class="js_touthstart btn btn_style btn_sentout">
          <div class="btn_outline">
            <span>送出</span>
          </div>
        </button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      email: ''
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    this.$store.commit('SET_NAME', 'Guest')
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    },
    onSubmit(evt) {
      this.$validator.validate().then(result => {
        if (result) {
          alert(JSON.stringify(this.email))
        }
      })
    }
  }
}
</script>

<style scoped >

</style>
