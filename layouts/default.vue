<template>
  <div class="wrap">
    <header id="header" :class="gnbHoverState ? 'on' : ''">
      <h1 class="logo">
        <NuxtLink
          to="/"
          @mouseover.native="gnbHoverState = true"
          @mouseleave.native="gnbHoverState = false"
        >
          <img src="/images/logo.png" alt="VERBY 로고" />
        </NuxtLink>
      </h1>
      <nav class="nav">
        <h2 class="hidden">메인 네비게이션</h2>
        <ul class="menus">
          <li>
            <NuxtLink
              to="/"
              @mouseover.native="gnbHoverState = true"
              @mouseleave.native="gnbHoverState = false"
              >SERVICE</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/playlist"
              @mouseover.native="gnbHoverState = true"
              @mouseleave.native="gnbHoverState = false"
              >PLAYLIST</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              @mouseover.native="gnbHoverState = true"
              @mouseleave.native="gnbHoverState = false"
              >ABOUT</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              @mouseover.native="gnbHoverState = true"
              @mouseleave.native="gnbHoverState = false"
              >CONTACT</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <nav class="nav-mobile" v-show="$store.getters.isMobile">
        <button class="nav-mobile__menu-btn" @click="handleSideMenu(true)">
          <span class="hidden">메뉴</span>
        </button>
        <div
          class="nav-mobile__side-menu-wrapper"
          :class="{ show: showSideMenu }"
        >
          <ul class="nav-mobile__side-menu">
            <li @click="() => handleSideMenu(false)">
              <NuxtLink to="/">SERVICE</NuxtLink>
            </li>
            <li @click="() => handleSideMenu(false)">
              <NuxtLink to="/playlist">PARTNERS</NuxtLink>
            </li>
            <li @click="() => handleSideMenu(false)">
              <NuxtLink to="/about">ABOUT</NuxtLink>
            </li>
            <li @click="() => handleSideMenu(false)">
              <NuxtLink to="/contact">CONTACT</NuxtLink>
            </li>
          </ul>
          <button
            class="nav-mobile__close-btn"
            @click="() => handleSideMenu(false)"
          >
            <span class="hidden">닫기</span>
          </button>
        </div>
      </nav>
    </header>
    <section id="container">
      <Nuxt />
    </section>
    <footer>
      <div class="logo">
        <img src="/images/logo.png" alt="VERBY 로고" /><span class="hidden"
          >VERBY</span
        >
      </div>
      <div class="footer__content">
        <p class="footer__title">버비컴퍼니</p>
        <ul>
          <li class="footer__text-col2">
            <div>
              <span v-if="!$store.getters.isMobile">대표&nbsp;:&nbsp;</span>
              <span v-else>대표</span>
              <p class="footer__text">박완</p>
            </div>
            <div>
              <span v-if="!$store.getters.isMobile"
                >사업자 등록번호&nbsp;:&nbsp;</span
              >
              <span v-else>사업자 등록번호</span>
              <p class="footer__text">666-20-01980</p>
            </div>
          </li>
          <li>
            <div>
              <span v-if="!$store.getters.isMobile">주소&nbsp;:&nbsp;</span>
              <span v-else>주소</span>
              <p class="footer__text">
                03628 서울특별시 서대문구 통일로 484 서대문구창업지원센터 321호
                버비컴퍼니
              </p>
            </div>
          </li>
          <li>
            <div>
              <span v-if="!$store.getters.isMobile"
                >고객 문의&nbsp;:&nbsp;</span
              >
              <span v-else>고객 문의</span>
              <p class="footer__text">verbykorea@gmail.com</p>
            </div>
          </li>
          <li v-if="$store.getters.isMobile">
            <div>
              <span class="footer__copyright"
                >Copyright 2024.VERBY Co.all rights reserved.</span
              >
            </div>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      gnbHoverState: false,
      showSideMenu: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // 모바일 사이즈 체크
      this.$store.dispatch("updateIsMobile");
    },
    handleSideMenu(isOpen) {
      this.showSideMenu = isOpen;
    },
  },
};
</script>
