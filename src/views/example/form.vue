<template>
  <div class="clearfix">
    <div class="container">
      <div class="row">
        <div class="clearfix">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  #
                </th>
                <th scope="col">
                  IP
                </th>
                <th scope="col">
                  {{ $t('Member.LoginDate') }}
                </th>
              </tr>
            </thead>
            <tr v-for="(item, index) in list" :key="index">
              <th scope="row">
                {{ index + 1 }}
              </th>
              <td>
                {{ item.ip }}
              </td>
              <td>
                {{ item.loginTime }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <form class="form" data-vv-scope="changePass" @submit.prevent="changePassword">
            <div class="form-group">
              <div class="input-group">
                <label for="input-icon-left" class="control-label">{{ $t('Member.OldPassword') }}</label>
                <input id="input-icon-left" v-model="form.password" v-validate="{ required: true }" class="form-control" :data-vv-as="$t('Member.OldPassword')" name="form.password" placeholder="" type="password">
                <div v-show="errors.has('form.password')" class="text-danger">
                  {{ errors.first('form.password') }}
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>{{ $t('Member.NewPassword') }}</label>
              <input v-model="form.newPassword" v-validate="'required|min:6|max:10'" class="form-control" :data-vv-as="$t('Member.NewPassword')" name="form.newPassword" placeholder="" type="password">
              <div v-show="errors.has('form.newPassword')" class="text-danger">
                {{ errors.first('form.newPassword') }}
              </div>
            </div>
            <div class="form-group">
              <label>{{ $t('Member.ConfirmPassword') }}</label>
              <input v-model="form.confirmPassword" v-validate="'required|min:6|max:10'" class="form-control" :data-vv-as="$t('Member.ConfirmPassword')" name="form.confirmPassword" placeholder="" type="password">
              <div v-show="errors.has('form.confirmPassword')" class="text-danger">
                {{ errors.first('form.confirmPassword') }}
              </div>
            </div>
            <div class="btn_wrapper no_btn_wrapper text-right">
              <button class="js_touthstart btn btn_style btn_sentout" type="submit">
                <div class="btn btn-info">
                  <span>{{ $t('Member.Change') }}</span>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div class="col-lg-6">
          <form class="form" data-vv-scope="login" @submit.prevent="loginTo">
            <div class="form-group">
              <label>{{ $t('Member.LoginId') }}</label>
              <input v-model="loginForm.loginId" v-validate="{ required: true }" class="form-control" :data-vv-as="$t('Member.LoginId')" name="loginForm.loginId" placeholder="" type="text">
              <div v-show="errors.has('loginForm.loginId')" class="text-danger">
                {{ errors.first('loginForm.loginId') }}
              </div>
            </div>
            <div class="form-group">
              <label>{{ $t('Member.Password') }}</label>
              <input v-model="loginForm.password" v-validate="{ required: true }" class="form-control" :data-vv-as="$t('Member.Password')" name="loginForm.password" placeholder="" type="password">
              <div v-show="errors.has('loginForm.password')" class="text-danger">
                {{ errors.first('loginForm.password') }}
              </div>
            </div>
            <div class="btn_wrapper no_btn_wrapper text-right">
              <button class="js_touthstart btn btn_style btn_sentout" type="submit">
                <div class="btn btn-success">
                  <span>{{ $t('Member.Login') }}</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      baseUrl: process.env.BASE_URL,
      tabPosition: 1,
      balance: 0,
      processs: process.env.BASE_API,
      list: [],
      fields: [
        { key: 'index', label: '#', thClass: 'member-table-th', tdClass: 'member-table-th' },
        { key: 'ip', label: 'IP', thClass: 'member-table-th', tdClass: 'member-table-th' },
        { key: 'loginTime', label: this.$t('Member.LoginDate'), thClass: 'member-table-th', tdClass: 'member-table-th' }
      ],
      total: 0,
      listQuery: {
        pageIdx: 1,
        page: 1,
        pageSize: 10
      },
      form: {
        password: '',
        newPassword: '',
        confirmPassword: ''
      },
      loginForm: {
        password: '',
        loginId: ''
      }
    }
  },
  created() {
    this.getHistoryList()
  },
  methods: {
    changePassword() {
      this.$validator.reset().then(result => {
        this.$validator.validateAll('changePass').then(result => {
          if (result) {
            const formData = new FormData()
            formData.set('oldPassword  ', this.form.password)
            formData.set('newPassword   ', this.form.newPassword)
            this.$message.success(this.$t('Messages.OperateSuccess'), 5 * 1000)
            this.form = {
              password: '',
              newPassword: '',
              confirmPassword: ''
            }
            this.$validator.reset()
          }
        })
      })
    },
    getHistoryList() {
      this.list = [{
        ip: 'w.x.y.z',
        loginTime: '2019-01-01 23:00:01'
      }]
      this.total = 1
    },
    loginTo() {
      this.$validator.reset().then(() => {
        this.$validator.validateAll('login').then(result => {
          if (result) {
            const formData = new FormData()
            formData.set('loginId ', this.loginForm.loginId)
            formData.set('password  ', this.loginForm.password)
            this.$store.dispatch('LoginById', formData).then(() => {
              this.$message.success(this.$t('Messages.LoginSuccess'), 5 * 1000)
              this.$router.push({ path: '/index' })
            }).catch(() => {
              this.$message.error(this.$t('Messages.LoginFailed'), 5 * 1000)
            })
          }
        })
      })
    }
  }
}
</script>

<style scoped>
  .tab-name{
    width: 140px!important;
  }
</style>
