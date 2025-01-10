<template>
  <div class="fade-in-container">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="fade-in-line"
      ref="lineRefs"
    >
      <p>{{ line }}</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'FadeIn',
  props: {
    lines: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.animateLines();
  },
  methods: {
    animateLines() {
      this.$nextTick(() => {
        this.$refs.lineRefs.forEach((line, index) => {
          anime({
            targets: line,
            opacity: [0, 1], 
            duration: 1000, 
            delay: index * 500, 
            easing: 'easeInOutQuad' 
          });
        });
      });
    }
  }
}
</script>

<style scoped>
.fade-in-line {
  opacity: 0;
}
</style>
