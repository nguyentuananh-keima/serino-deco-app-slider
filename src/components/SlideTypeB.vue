<template>
  <div :class="['slide', 'animate__animated', animationClass]">
      <img :src="image" alt="Slide Image" />
      <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
      image: { type: String, required: true },
      caption: { type: String, required: false },
      animation: { type: String, default: 'animate__slideInRight' }
  },
  computed: {
      animationClass() {
          return this.animation;
      }
  }
};
</script>

<style>
.slide img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
</style>
