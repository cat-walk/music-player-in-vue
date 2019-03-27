<template>
  <section class="login-wrap">
    <back-header title="手机号登录" color="red"></back-header>
    <div class="phone-number-container">
      <i class="iconfont icon-shouji"></i>
      <span class="country-code">+86</span>
      <input class="tel-input" type="tel" autofocus v-model="tel">
      <button class="clean-btn" @click="cleanTel">
        <i class="iconfont icon-chahao"></i>
      </button>
    </div>
    <div class="password-container">
      <i class="iconfont icon-suo"></i>
      <input class="password-input" type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="login-btn-container">
      <button class="login-btn" @click="tryToLogin">登录</button>
    </div>
    <reminder :word="reminderWord" :ifShow="reminderFlag" :callback='resetReminder'></reminder>
  </section>
</template>

<script>
import BackHeader from '../../components/BackHeader.vue';
import Reminder from '../../components/Reminder.vue';
import { login } from '../../api/Login';

export default {
  data() {
    return {
      tel: null,
      password: null,
      reminderFlag: false,
      reminderWord: '',
    };
  },
  methods: {
    cleanTel() {
      this.tel = null;
    },
    tryToLogin() {
      login(this.tel, this.password).then(
        (res) => {
          console.log(res, 'success');
        },
        (err) => {
          console.dir(err, 'failed');
          this.reminderFlag = true;
          this.reminderWord = err.msg;
        },
      );
    },
    resetReminder() {
      this.reminderFlag = false;
    },
  },
  components: {
    BackHeader,
    Reminder,
  },
};
</script>

<style scoped lang='less'>
.login-wrap {
  padding-top: 0.44rem;
  .phone-number-container,
  .password-container {
    border-bottom: 1px solid #e4e4e4;
    padding: 0.05rem 0;
    margin: 0.2rem 0.2rem;
  }
  .tel-input,
  .password-input {
    font-size: 16px;
    margin-left: 0.1rem;
    border: none;
  }
  .iconfont {
    font-size: 18px;
  }
  .iconfont {
    color: gray;
  }
  .country-code {
    margin: 0 0.1rem;
    font-size: 16px;
  }
  .clean-btn {
    float: right;
  }
  .login-btn-container {
    text-align: center;
    .login-btn {
      background: #d44439;
      color: #f1f1f1;
      border: none;
      width: 90%;
      height: 0.4rem;
      border-radius: 0.2rem;
      font-size: 16px;
    }
  }
}
</style>
