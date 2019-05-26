<template>
  <section class="side-bar-menu">
    <div class="menu-top">
      <div class="unlogin-style" v-if="!loginStatus">
        <p class="login-desc1">音乐给我力量</p>
        <p class="login-desc2">Music give me power!</p>
        <div class="login-btn-container">
          <button class="login-btn" @click="toLoginPage">立即登录</button>
        </div>
      </div>
      <div class="haslogin-style" v-else>
        <div class="img-container">
          <img v-lazy="avatarUrl" alt class="avatar">
        </div>
        <h1 class="nickname">{{nickname}}</h1>
      </div>
    </div>
    <div class="menu-body"></div>
    <div class="menu-footer" v-if="loginStatus">
      <div class="btn-wrap">
        <button class="logout-btn" @click="logoutThenUpdateLoginStatus">
          <i class="iconfont icon-guanji"></i>
          退出登录
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { logout, getUserDetail } from "../api/SideBar";

export default {
  props: ["children"],
  data() {
    return {
      nickname: null,
      avatarUrl: null
    };
  },
  computed: {
    ...mapGetters(["loginStatus"])
  },
  watch: {
    async loginStatus(hasLogined) {
      if (hasLogined) {
        try {
          const res = await getUserDetail(localStorage.getItem("uid"));
          this.nickname = res.profile.nickname;
          this.avatarUrl = res.profile.avatarUrl;
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  methods: {
    ...mapActions(["getThenSetLoginStatus"]),
    async logoutThenUpdateLoginStatus() {
      try {
        await logout();
        this.getThenSetLoginStatus(); // 更新vuex里的登录状态
      } catch (error) {
        console.log(error);
      }
    },
    toLoginPage() {
      this.$props.children[1].slideout.close();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang='less'>
.side-bar-menu {
  position: relative;
  .menu-top {
    height: 1.7rem;
    padding-top: 0.4rem;
    background: #000;
    .login-desc1,
    .login-desc2 {
      color: lightgray;
      text-align: center;
      padding-bottom: 0.02rem;
    }
    .login-btn-container {
      padding-top: 0.1rem;
      text-align: center;
      .login-btn {
        border: 1px solid lightgray;
        padding: 0.05rem 0.35rem;
        border-radius: 0.14rem;
        background: #000;
        color: #f1f1f1;
      }
    }

    .haslogin-style {
      .img-container {
        text-align: center;
        .avatar {
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
        }
      }
      .nickname {
        font-weight: 400;
        font-size: 18px;
        text-align: center;
      }
    }
  }
  .menu-body {
    height: 10rem;
    background: #fff;
  }
  .menu-footer {
    position: fixed;
    width: 85%; // todo: 这个footer以div为定位基准元素，如果改为以menu为基准元素？
    bottom: 0;
    padding: 0.1rem;
    border-top: 1px solid #e4e4e4;
    .btn-wrap {
      display: flex;
      justify-content: space-around;
      .logout-btn,
      .iconfont {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
}
</style>
