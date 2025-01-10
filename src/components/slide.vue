<template>
  <div class="slide short-content" ref="slideContainer">
    <div class="slide-image">
      <slot name="image">
        <img src="https://example.com/default-image.jpg" alt="Default Image" />
      </slot>
    </div>
    <h2 class="slide-title">
      <slot name="title">Default Title</slot>
    </h2>
    <!-- Paragraph 1 -->
    <p 
      v-if="$slots['content-1']" 
      class="slide-content-1" 
      ref="content1"
    >
      <slot name="content-1"></slot>
    </p>
    <!-- Paragraph 2 -->
    <p 
      v-if="$slots['content-2']" 
      class="slide-content-2" 
      ref="content2"
    >
      <slot name="content-2"></slot>
    </p>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "FlyInShortContent",
  props: {
    animationOptions: {
      type: Object,
      default: () => ({
        paragraph1: { translateX: [-200, 0], opacity: [0, 1], duration: 1000 },
        paragraph2: { translateX: [200, 0], opacity: [0, 1], duration: 1500 },
      }),
    },
  },
  mounted() {
    // Animate paragraph 1 if slot exists
    if (this.$refs.content1) {
      anime({
        targets: this.$refs.content1,
        ...this.animationOptions.paragraph1,
      });
    }
    // Animate paragraph 2 if slot exists
    if (this.$refs.content2) {
      anime({
        targets: this.$refs.content2,
        ...this.animationOptions.paragraph2,
      });
    }
  },
};
</script>

<style scoped>
.slide {
  padding: 20px;
  margin: 10px 0;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: center;
}
.slide-image img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}
.slide-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.slide-content-1, .slide-content-2 {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}
</style>
