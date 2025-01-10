<template>
  <div>
    <div v-for="(fadeInContent, index) in fadeInContents" :key="index">
      <FadeIn :lines="['Div 1', 'Div 2', 'Div 3']" />

    </div>
  </div>
</template>

<script>
import Slide from "../components/slide.vue";
import FadeIn from "../components/FadeIn.vue";

export default {
  components: {
    FadeIn
  },
  data() {
    return {
      fadeInContents: [
        { lines: ['Line 1 of Page 1', 'Line 2 of Page 1', 'Line 3 of Page 1'] },
        { lines: ['Line 1 of Page 2', 'Line 2 of Page 2', 'Line 3 of Page 2'] },
        { lines: ['Line 1 of Page 3', 'Line 2 of Page 3', 'Line 3 of Page 3'] }
      ],
      currentFadeInIndex: 0 // Điều khiển chỉ cho phép chạy 1 FadeIn tại một thời điểm
    };
  },
  methods: {
    triggerNextFadeIn(index) {
      // Kiểm tra nếu tất cả các FadeIn trước đã hoàn thành, trigger FadeIn tiếp theo
      if (index === this.currentFadeInIndex) {
        // Cập nhật `currentFadeInIndex` để trigger tiếp theo
        this.currentFadeInIndex += 1;
      }
    }
  }
};
</script>
