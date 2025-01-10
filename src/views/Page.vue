<template>
  <div>
    <!-- Background -->
    <div ref="background" class="background">
      <div ref="triangle" class="triangle"></div>
      <!-- Box -->
      <div ref="box" class="box">

        <!-- Title -->
        <p v-for="(title, index) in title" :key="index" :ref="'title' + index" class="title">{{title}}</p>

        <!-- Paragraph -->
        <p v-for="(line, index) in paragraph" :key="index" :ref="'line' + index" class="paragraph">
          {{ line }}
        </p>
      </div>
    </div>

     <!-- Background -->
     <div ref="slide_2" class="background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle"></div>
      <!-- Box -->
      <div ref="slide_2__box" class="box">

        <!-- Title -->
        <p v-for="(title, index) in title" :key="index" :ref="'title' + index" class="title">{{title}}</p>

        <!-- Paragraph -->
        <p v-for="(line, index) in paragraph" :key="index" :ref="'line' + index" class="paragraph">
          {{ line }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      title: [
        '「生理痛が痛いのはあたりまえ」',
        '「みんなもつらいんだから」',
        'と我慢してしまう、'
      ],
      paragraph: [
        'がんばり屋さんのあなたへ'
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      let count_delay = 1;
      anime({
        targets: this.$refs.background,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: this.$refs.triangle,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: count_delay * 500, 
      });
      count_delay++;
      anime({
        targets: this.$refs.box,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: count_delay * 500, 
      });
      count_delay++;
      this.title.forEach((_, index) => {
        anime({
          targets: this.$refs['title' + index],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeInOutQuad',
          delay: count_delay * 500, 
      });
      count_delay++;
      });
      this.paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line' + index],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeInOutQuad',
          delay: count_delay * 500, 
      });
      count_delay++;
      });
      // end slide 1
      anime({
        targets: this.$refs.background,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: count_delay * 500, 
        complete: () => {
          this.$refs.background.style.display = 'none';
          console.log('Background is now hidden');
        },
      });
      count_delay++;

      anime({
        targets: this.$refs.slide_2,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: count_delay * 500,
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_2__triangle,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: count_delay * 500, 
      });
      count_delay++;
    });
  },
};
</script>


<style>
.background {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/page-01/1P.png');
}
.triangle {
  position: absolute;
  width: 60%;
  height: 100%;
  background-color: #0020607d;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  z-index: 1;
}
.box {
  position: absolute;
  width: 50%;
  height: auto;
  color: #FFFFFF;
  z-index: 2;
  padding: 15px
}

.title {
  font-size: 20px;
}

.paragraph {
  font-size: 30px;
}

.triangle.slide_2__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}
</style>
