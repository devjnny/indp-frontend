<template>
  <button
    :class="[arrow ? 'arrow' : '', disabled ? 'disabled' : '', type]"
    @click="$emit('doAction')"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    doAction: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoint.scss";
button {
  width: 340px;
  height: 60px;
  // padding: 15px 52px;
  background-color: #216097;
  border-radius: 30px;
  span {
    display: inline-block;
    position: relative;
    color: #fff;
    font-family: "NanumSquareNeo", sans-serif;
    font-size: 1.375rem;
    line-height: 2rem;
    font-weight: 800;
  }
  &.arrow {
    width: auto;
    padding: 0 32px;
    span {
      padding-right: 19px;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: block;
        width: 9px;
        height: 15px;
        background: url(/icons/icon_arrow_right.png) no-repeat center/100%;
      }
    }
  }
  &.disabled {
    opacity: 0.4;
  }
  &.w-full {
    width: 100% !important;
  }
}

@include mobile-tablet {
  button {
    width: 200px;
    height: 52px;
    padding: 14px 32px;
    border-radius: 50px;
    background-color: #2686d9;
    span {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    &.arrow {
      width: auto;
      span {
        padding-right: 20px;
        &:after {
          width: 16px;
          height: 16px;
          background: url(/icons/icon_mo_arrow_right.png) no-repeat center/100%;
        }
      }
    }
  }
}
</style>
