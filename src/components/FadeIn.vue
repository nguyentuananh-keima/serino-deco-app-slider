<template>
  <div>
    <div
      v-for="(line, index) in lines"
      :key="index"
      ref="divs"
      class="fade-div"
      v-show="currentIndex === index"
    >
      {{ line }}
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'FadeIn',
  props: {
    lines: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0, // Div hiện tại
    };
  },
  mounted() {
    this.runSequence();
  },
  methods: {
    runSequence() {
      const totalDivs = this.lines.length;

      const animate = (index) => {
        anime({
          targets: this.$refs.divs[index],
          opacity: [0, 1], // Fade in
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: () => {
            setTimeout(() => {
              anime({
                targets: this.$refs.divs[index],
                opacity: [1, 0], // Fade out
                duration: 1000,
                easing: 'easeInOutQuad',
                complete: () => {
                  // Chuyển sang `div` tiếp theo
                  if (index + 1 < totalDivs) {
                    this.currentIndex = index + 1;
                    animate(index + 1);
                  }
                },
              });
            }, 1000); // Giữ `div` hiển thị trong 1 giây trước khi ẩn
          },
        });
      };

      animate(this.currentIndex);
    },
  },
};
</script>

<style>
.fade-div {
  opacity: 0; /* Ẩn ban đầu */
  transition: opacity 1s ease-in-out;
}
</style>
