<template>
  <div class="main">
    <!-- Slide 01 -->
    <div ref="slide_1" class="background slide_1__background">
      <div ref="slide_1__triangle" class="triangle slide_1__triangle"></div>
      <!-- Box -->
      <div ref="slide_1__box" class="box">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_1, index) in slide_1_title" :key="index" :ref="'title_1' + index" class="title font-size-32px font-weight-bold">{{title_1}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph mt-10 mb-is-mt-5">
          <p v-for="(line_1, index) in slide_1_paragraph" :key="index" :ref="'line_1' + index" class="paragraph font-size-24px font-weight-bold">
            {{ line_1 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 02 -->
    <div ref="slide_2" class="background slide_2__background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_2__box" class="box is_bottom--left pd-top-80 pd-bottom-80">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_2, index) in slide_2_title" :key="index" :ref="'title_2' + index" class="title font-size-32px font-weight-bold">{{title_2}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_2, index) in slide_2_paragraph" :key="index" :ref="'line_2' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_2 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 03 -->
    <div ref="slide_3" class="background slide_3__background">
      <div ref="slide_3__triangle" class="triangle slide_3__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_3__box" class="box is_bottom--right text-align-right">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_3, index) in slide_3_title" :key="index" :ref="'title_3' + index" class="title font-size-32px font-weight-bold">{{title_3}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_3, index) in slide_3_paragraph" :key="index" :ref="'line_3' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_3 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 04 -->
    <div ref="slide_4" class="background slide_4__background">
      <div ref="slide_4__triangle" class="triangle slide_4__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_4__box" class="box is_bottom--left pd-bottom-20 mb-pd-bottom-35">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_4, index) in slide_4_title" :key="index" :ref="'title_4' + index" class="title font-size-32px font-weight-bold">{{title_4}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_4, index) in slide_4_paragraph" :key="index" :ref="'line_4' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_4 }}
          </p>
        </div>
         <!-- Paragraph -->
        <div class="box__paragraph--note mt-5 mb-is-mt-5">
          <p v-for="(line_4_note, index) in slide_4_paragraph_note" :key="index" :ref="'line_4_note' + index" class="paragraph font-size-10px font-weight-normal">
            {{ line_4_note }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 05 -->
    <div ref="slide_5" class="background slide_5__background">
      <div ref="slide_5__triangle" class="triangle slide_5__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_5__box" class="box is_bottom--right text-align-right pd-top-120 pd-bottom-120">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_5, index) in slide_5_title" :key="index" :ref="'title_5' + index" class="title font-size-32px font-weight-bold">{{title_5}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_5, index) in slide_5_paragraph" :key="index" :ref="'line_5' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_5 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 06 -->
    <div ref="slide_6" class="background slide_6__background">
      <div ref="slide_6__triangle" class="triangle slide_6__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_6__box" class="box is_bottom--left pd-bottom-20">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_6, index) in slide_6_title" :key="index" :ref="'title_6' + index" class="title font-size-32px font-weight-bold">{{title_6}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_6, index) in slide_6_paragraph" :key="index" :ref="'line_6' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_6 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_6_note, index) in slide_6_paragraph_note" :key="index" :ref="'line_6_note' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_6_note }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_6_note_second, index) in slide_6_paragraph_note_second" :key="index" :ref="'line_6_note_second' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_6_note_second }}
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      slide_1_title: [
        '「生理のつらさとも、',
        '自分の力で上手につきあっていきたい」 '
      ],
      slide_1_paragraph: [
        'そんなしっかり者のあなたへ'
      ],
      slide_2_title: [
        '生理で大切なもの、',
        '失っていませんか'
      ],
      slide_2_paragraph: [
        '生理のつらい症状で、仕事や試験などで実力が発揮できなかったり',
        '楽しみにしていたことをキャンセルしたことはありませんか？',
        'つらい生理とうまくつきあおうと頑張ってきたのですよね。'
      ],
      slide_3_title: [
        '「生理を休む」という考え方'
      ],
      slide_3_paragraph: [
        '生理はご存知のとおり、女性が妊娠するために必要なからだのしくみです。',
        'でも、もしあなたが今すぐ妊娠することを望んでいるわけではないなら',
        '生理を「お休みする」という選択肢があります。'
      ],
      slide_4_title: [
        '生理のつらさを',
        'やわらげる選択肢も'
      ],
      slide_4_paragraph: [
        'LEP製剤（低用量経口エストロゲン-プロゲスチン＊配合剤）',
        'というお薬を使った治療があります。',
        'LEP製剤は低用量ピルともよばれ、1日1錠、28日周期で飲むタイプと',
        '最長で数ヵ月間飲み続けることのできるタイプがあります。',
        '後者のタイプは、生理を数ヵ月間「お休み」して',
        '生理の回数を1年間で3～4回程度にすることができる選択肢です。',
        'LEP製剤は婦人科等を受診することで、医師から処方されます。'
      ],
      slide_4_paragraph_note: [
        '＊：合成された黄体ホルモン（プロゲステロン）のこと'
      ],
      slide_5_title: [
        '気になる！',
        'お薬のデメリット'
      ],
      slide_5_paragraph: [
        'お薬の服用となると、デメリットも気になるところ。',
        '心配なことがありましたら婦人科医にご相談ください。'
      ],
      slide_6_title: [
        'あなた自身の',
        '選択で、',
        'あなたらしい生活を'
      ],
      slide_6_paragraph: [
        '生理のつらい症状で',
        '実力を発揮できなかったり、何かを諦めたりすることは',
        '決して当たり前でも、我慢すべきことでもありません。'
      ],
      slide_6_paragraph_note: [
        '一人で悩んだり、抱え込んだりせず',
        '婦人科医に相談してみませんか。'
      ],
      slide_6_paragraph_note_second: [
        'あなたの勇気ある行動はきっと',
        'あなたがあなたらしくいられる未来につながっています。'
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      let count_delay = 1;
      const timeDuration = 200;
      anime({
        targets: this.$refs.slide_1,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: this.$refs.slide_1__triangle,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_1__box,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      this.slide_1_title.forEach((_, index) => {
        anime({
          targets: this.$refs['title_1' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_1_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_1' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      // end slide 1
      anime({
        targets: this.$refs.slide_1,
        opacity: [1, 0],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
        complete: () => {
          this.$refs.slide_1.style.display = 'none';
          console.log('Background is now hidden');
        },
      });
      count_delay++;

    // Start slide 2
    anime({
      targets: this.$refs.slide_2,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration,
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_2__triangle,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_2__box,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    this.slide_2_title.forEach((_, index) => {
      anime({
        targets: this.$refs['title_2' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_2_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_2' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    // End slide 2
    anime({
      targets: this.$refs.slide_2,
      opacity: [1, 0],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
      complete: () => {
        this.$refs.slide_2.style.display = 'none';
        console.log('Background is now hidden');
      },
    });
    count_delay++;
    
    // Start slide 3
    anime({
      targets: this.$refs.slide_3,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration,
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_3__triangle,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_3__box,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    this.slide_3_title.forEach((_, index) => {
      anime({
        targets: this.$refs['title_3' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_3_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_3' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    // End slide 3
    anime({
      targets: this.$refs.slide_3,
      opacity: [1, 0],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
      complete: () => {
        this.$refs.slide_3.style.display = 'none';
        console.log('Background is now hidden');
      },
    });
    count_delay++;

    // Start slide 4
    anime({
      targets: this.$refs.slide_4,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration,
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_4__triangle,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_4__box,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    this.slide_4_title.forEach((_, index) => {
      anime({
        targets: this.$refs['title_4' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_4_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_4' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_4_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_4_note' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    // End slide 4
    anime({
      targets: this.$refs.slide_4,
      opacity: [1, 0],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
      complete: () => {
        this.$refs.slide_4.style.display = 'none';
        console.log('Background is now hidden');
      },
    });
    count_delay++;

    // Start slide 5
    anime({
      targets: this.$refs.slide_5,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration,
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_5__triangle,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_5__box,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    this.slide_5_title.forEach((_, index) => {
      anime({
        targets: this.$refs['title_5' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_5_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_5' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    // End slide 5
    anime({
      targets: this.$refs.slide_5,
      opacity: [1, 0],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
      complete: () => {
        this.$refs.slide_5.style.display = 'none';
        console.log('Background is now hidden');
      },
    });
    count_delay++;

    // Start slide 6
      anime({
        targets: this.$refs.slide_6,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration,
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_6__triangle,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_6__box,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      this.slide_6_title.forEach((_, index) => {
        anime({
          targets: this.$refs['title_6' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_6_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_6' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_6_paragraph_note.forEach((_, index) => {
        anime({
          targets: this.$refs['line_6_note' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_6_paragraph_note_second.forEach((_, index) => {
        anime({
          targets: this.$refs['line_6_note_second' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      // End slide 6
      anime({
        targets: this.$refs.slide_6,
        opacity: [1, 0],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
        complete: () => {
          this.$refs.slide_6.style.display = 'none';
          console.log('Background is now hidden');
        },
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.triangle {
  position: absolute;
  width: 60%;
  height: 100%;
  z-index: 1;
}
.box {
  position: absolute;
  width: 100%;
  height: auto;
  color: #FFFFFF;
  z-index: 2;
  padding: 40px 30px;
}
.box__paragraph {
  margin-top: 30px;
}
.box__paragraph--note {
  margin-top: 30px;
}
.is_top--left {
  top: 0;
  left: 0;
}
.is_bottom--left {
  bottom: 0;
  left: 0;
}
.is_bottom--right {
  bottom: 0;
  right: 0;
}
.text-align-right {
  text-align: right;
}
.text-align-left {
  text-align: left;
}
.text-underline {
  text-decoration: underline;
}
.font-size-32px {
  font-size: calc(32 * (100vw / 1360));
  line-height: 1.5;
}
.font-size-24px {
  font-size: calc(24 * (100vw / 1360));
  line-height: 1.5;
}
.font-size-16px {
  font-size: calc(16 * (100vw / 1360));
  line-height: 1.6;
}
.font-size-14px {
  font-size: max(14px, 14 * (100vw / 1360));
  line-height: 1.5;
}
.font-size-10px {
  font-size: max(10px, 10 * (100vw / 1360));
  line-height: 1.5;
}
.font-size-8px {
  font-size: max(8px, 8 * (100vw / 1360));
  line-height: 1.6;
}
.font-weight-bold {
  font-weight: 700;
}
.font-weight-medium {
  font-weight: 500;
}
.font-weight-normal {
  font-weight: 400;
}
.mt-0 {
  margin-top: 0;
}
.mb-0 {
  margin-bottom: 0;
}
.mt-5 {
  margin-top: 5px;
}
.mb-5 {
  margin-bottom: 5px;
}
.mt-10 {
  margin-top: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mt-40 {
  margin-top: 40px;
}
.mb-40 {
  margin-bottom: 40px;
}
.pd-top-0 {
  padding-bottom: 0;
}
.pd-bottom-0 {
  padding-bottom: 0;
}
.pd-top-10 {
  padding-bottom: 10px !important;
}
.pd-bottom-10 {
  padding-bottom: 10px !important;
}
.pd-top-20 {
  padding-bottom: 20px !important;
}
.pd-bottom-20 {
  padding-bottom: 20px !important;
}
.pd-top-60 {
  padding-top: 60px !important;
}
.pd-bottom-60 {
  padding-bottom: 60px !important;
}
.pd-top-80 {
  padding-top: 80px !important;
}
.pd-bottom-80 {
  padding-bottom: 80px !important;
}
.pd-top-120 {
  padding-top: 120px !important;
}
.pd-bottom-120 {
  padding-bottom: 120px !important;
}

/* Sart css slide 1 */
.slide_1__background {
  background-image: url('../assets/images/learndiagnosis02/page-01/2-1P.png');
}
.triangle.slide_1__triangle {
  background-color: #0020607d;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

/* Sart css slide 2 */
.slide_2__background {
  background-image: url('../assets/images/learndiagnosis02/page-02/2-2P.png');
}
.triangle.slide_2__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 3 */
.slide_3__background {
  background-image: url('../assets/images/learndiagnosis02/page-03/2-3P.png');
}
.triangle.slide_3__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 4 */
.slide_4__background {
  background-image: url('../assets/images/learndiagnosis02/page-04/2-4P.png');
}
.triangle.slide_4__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2652167d;
}

/* Sart css slide 5 */
.slide_5__background {
  background-image: url('../assets/images/learndiagnosis02/page-05/2-5P.png');
}
.triangle.slide_5__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 4 */
.slide_6__background {
  background-image: url('../assets/images/learndiagnosis02/page-06/2-6P.png');
}
.triangle.slide_6__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #ff32cd7d;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .background {
    background-position: 65% center;
  }
  .slide_1__background {
    background-position: 80% center;
  }
  .slide_2__background {
    background-position: 20% center;
  }
  .slide_3__background {
    background-position: 55% center;
  }
  .slide_5__background {
    background-position: 48% center;
  }
  .slide_6__background {
    background-position: 60% center;
  }
  .font-size-32px {
    font-size: calc(32*(100vw / 1024));
  }
  .font-size-16px {
    font-size: calc(16 * (100vw / 1024));
  }
  .font-size-24px {
    font-size: calc(24 * (100vw / 1024));
  }
  .font-size-10px {
    font-size: max(10px, 10 * (100vw / 1024));
  }
  .font-size-8px {
    font-size: max(8px, 8 * (100vw / 1024));
  }
}

@media screen and (max-width: 768px) {
  .box {
    padding: 35px 15px;
  }
  .triangle {
    width: 100%;
  }
  .box__paragraph,
  .box__paragraph--note {
    margin-top: 20px;
  }
  .font-size-32px {
    font-size: calc(18 * (100vw / 564));
    line-height: 1.6;
  }
  .font-size-24px {
    font-size: calc(16 * (100vw / 564));
    line-height: 1.5;
  }
  .font-size-16px {
    font-size: calc(14 * (100vw / 564));
    line-height: 1.5;
  }
  .title.title__special {
    font-size: calc(16 * (100vw / 564));
  }
  .paragraph.paragraph__special{
    font-size: calc(20 * (100vw / 564));
  }
  .mb_is_bottom--right {
    top: initial;
    left: inherit;
    bottom: 0;
    right: 0;
    text-align: right;
  }
  .mb_is_bottom--left {
    top: initial;
    left: inherit;
    bottom: 0;
    left: 0;
    text-align: left;
  }
  .mb-is-mt-5 {
    margin-top: 5px;
  }
  .mb-pd-bottom-35 {
    padding-bottom: 35px !important;
  }
}
@media screen and (max-width: 564px) {
  .font-size-32px {
    font-size: calc(18 * (100vw / 375));
  }
  .font-size-24px {
    font-size: calc(16 * (100vw / 375));
  }
  .font-size-16px {
    font-size: calc(14 * (100vw / 375));
  }
  .font-size-10px {
    font-size: max(8px, 8 * (100vw / 375));
  }
  .title.title__special {
    font-size: calc(16 * (100vw / 375));
  }
  .paragraph.paragraph__special{
    font-size: calc(20 * (100vw / 375));
  }
  .pd-top-60 {
    padding-top: 35px !important;
  }
  .pd-bottom-60 {
    padding-bottom: 35px !important;
  }
  .pd-top-80 {
    padding-top: 35px !important;
  }
  .pd-bottom-80 {
    padding-bottom: 35px !important;
  }
  .pd-top-120 {
    padding-top: 35px !important;
  }
  .pd-bottom-120 {
    padding-bottom: 35px !important;
  }
}

</style>
