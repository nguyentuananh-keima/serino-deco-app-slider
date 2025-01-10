<template>
  <div
    :class="['fade-in', 'animate__animated', 'animate__fadeIn']"
    :style="{ animationDelay: `${delay}s` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
.fade-in {
  visibility: hidden;
}
.fade-in.animate__fadeIn {
  visibility: visible;
}
</style>
