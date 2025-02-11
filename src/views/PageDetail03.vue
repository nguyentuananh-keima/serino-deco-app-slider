<template>
  <div class="main">
    <!-- Slide 01 -->
    <div ref="slide_1" class="background slide_1__background">
      <div ref="slide_1__triangle" class="triangle slide_1__triangle"></div>
      <!-- Box -->
      <div ref="slide_1__box" class="box pd-top-60 pd-bottom-60 mb-pd-top-40">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_01, index) in slide_1_title" :key="index" :ref="'title_01' + index" class="title font-size-32px font-weight-bold">{{title_01}}</p>
        </div>
      </div>
    </div>
    <!-- Slide 02 -->
    <div ref="slide_2" class="background slide_2__background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_2__box" class="box is_bottom--left is_top-40">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_02, index) in slide_2_title" :key="index" :ref="'title_02' + index" class="title font-size-32px font-weight-bold">{{title_02}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_02, index) in slide_2_paragraph" :key="index" :ref="'line_02' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_02 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 03 -->
    <div ref="slide_3" class="background slide_3__background">
      <div ref="slide_3__triangle" class="triangle slide_3__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_3__box" class="box is_bottom--right text-align-right pd-top-80 pd-bottom-80">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_03, index) in slide_3_title" :key="index" :ref="'title_03' + index" class="title font-size-32px font-weight-bold">{{title_03}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_03, index) in slide_3_paragraph" :key="index" :ref="'line_03' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_03 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 04 -->
    <div ref="slide_4" class="background slide_4__background">
      <div ref="slide_4__triangle" class="triangle slide_4__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_4__box" class="box is_bottom--left pd-top-120 pd-bottom-120">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_04, index) in slide_4_title" :key="index" :ref="'title_04' + index" class="title font-size-32px font-weight-bold">{{title_04}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_04, index) in slide_4_paragraph" :key="index" :ref="'line_04' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_04 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 05 -->
    <div ref="slide_5" class="background slide_5__background">
      <div ref="slide_5__triangle" class="triangle slide_5__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_5__box" class="box is_bottom--right text-align-right">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_05, index) in slide_5_title" :key="index" :ref="'title_05' + index" class="title font-size-32px font-weight-bold">{{title_05}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_05, index) in slide_5_paragraph" :key="index" :ref="'line_05' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_05 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_05_note, index) in slide_5_paragraph_note" :key="index" :ref="'line_05_note' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_05_note }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_05_note_second, index) in slide_5_paragraph_note_second" :key="index" :ref="'line_05_note_second' + index" class="paragraph font-size-8px font-weight-normal">
            {{ line_05_note_second }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 06 -->
    <div ref="slide_6" class="background slide_6__background">
      <div ref="slide_6__triangle" class="triangle slide_6__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_6__box" class="box is_bottom--left">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_06, index) in slide_6_title" :key="index" :ref="'title_06' + index" class="title font-size-32px font-weight-bold">{{title_06}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_06, index) in slide_6_paragraph" :key="index" :ref="'line_06' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_06 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_06_note, index) in slide_6_paragraph_note" :key="index" :ref="'line_06_note' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_06_note }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 07 -->
    <div ref="slide_7" class="background slide_7__background">
      <div ref="slide_7__triangle" class="triangle slide_7__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_7__box" class="box is_bottom--right text-align-right pd-bottom-10 pd-right-20 mb-pd-bottom-15">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_07, index) in slide_7_title" :key="index" :ref="'title_07' + index" class="title font-size-32px font-weight-bold">{{title_07}}</p>
        </div>

        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_07, index) in slide_7_paragraph" :key="index" :ref="'line_07' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_07 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_07_note, index) in slide_7_paragraph_note" :key="index" :ref="'line_07_note' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_07_note }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_07_note_second, index) in slide_7_paragraph_note_second" :key="index" :ref="'line_07_note_second' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_07_note_second }}
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
        '今の治療で',
        '気になる症状はありませんか？',
        'LEP製剤にはもう一つの',
        '選択肢があります'
      ],
      slide_2_title: [
        '今の治療、',
        '満足していますか？'
      ],
      slide_2_paragraph: [
        '休薬期間（プラセボ服用期間）に気になる症状はありませんか？',
        '休薬期間の出血や、それに伴う腹痛や頭痛などのマイナートラブル。',
        '実は、こうした悩みを抱える患者さんは少なくありません。'
      ],
      slide_3_title: [
        'LEP製剤の、',
        'もう一つの選択肢'
      ],
      slide_3_paragraph: [
        'LEP製剤には、今あなたが使っている28日周期で服用するタイプの他に',
        '最長で数ヵ月間連続服用できるタイプがあります。'
      ],
      slide_4_title: [
        '休薬期間を',
        '「スキップ」する',
        'という考え方'
      ],
      slide_4_paragraph: [
        '最長で数ヵ月間連続で服用できるLEP製剤の場合',
        '服用している間は、困った症状が起こりがちな休薬期間を',
        '「スキップ」して、頻度を減らすことができます。'
      ],
      slide_5_title: [
        '数ヵ月もお薬を',
        '飲み続けて大丈夫？'
      ],
      slide_5_paragraph: [
        'あらゆるお薬と同様に',
        'LEP製剤も副作用に気をつける必要があります。'
      ],
      slide_5_paragraph_note: [
        'ただ、「28日周期服用」と「連続服用」で',
        '副作用の頻度に大きな違いのないことが報告されています1)。',
        '連続服用できるLEP製剤に興味があるあなた',
        '副作用のことも含めて、婦人科医に相談してみませんか。'
      ],
      slide_5_paragraph_note_second: [
        '１）Momoeda M, et al.: Int J Womens Health. 2017; 9: 295-305'
      ],
      slide_6_title: [
        'どうやって',
        '連続服用に',
        '切り替えるの？'
      ],
      slide_6_paragraph: [
        '今、手元にある28日周期服用タイプを1シート飲み終え',
        '休薬期間（プラセボ期間）が終わったら',
        '新しいシートから連続服用タイプにするだけです。',
        'もし、「連続服用」に切り替えたあとに',
        '「28日周期服用の方がいいな」と思ったら',
        '同じ方法で「28日周期服用」に戻すことができます。'
      ],
      slide_6_paragraph_note: [
        'LEP製剤の切り替えについては、婦人科医にご相談ください。'
      ],
      slide_7_title: [
        'よりあなたに合った',
        'LEP製剤を'
      ],
      slide_7_paragraph: [
        '休薬期間（プラセボ服用期間）に気になる症状があっても',
        '「生理のつらさから少し解放されたのだからこのくらいは……」',
        'と我慢していませんか。'
      ],
      slide_7_paragraph_note: [
        'LEP製剤には、休薬期間を「スキップ」する選択肢があります。'
      ],
      slide_7_paragraph_note_second: [
        'つらさは一人で抱え込まずに',
        '自分にはどちらのお薬が合っているのか',
        '次回受診の際に、婦人科医にじっくり相談してみませんか？'
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      let count_delay = 1;
      const timeDuration = 500;
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
          targets: this.$refs['title_01' + index],
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
        targets: this.$refs['title_02' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_2_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_02' + index],
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
        targets: this.$refs['title_03' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_3_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_03' + index],
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
        targets: this.$refs['title_04' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_4_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_04' + index],
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
        targets: this.$refs['title_05' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_5_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_05' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_5_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_05_note' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_5_paragraph_note_second.forEach((_, index) => {
      anime({
        targets: this.$refs['line_05_note_second' + index],
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
        targets: this.$refs['title_06' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_6_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_06' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_6_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_06_note' + index],
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

    // Start slide 7
    anime({
      targets: this.$refs.slide_7,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration,
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_7__triangle,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    anime({
      targets: this.$refs.slide_7__box,
      opacity: [0, 1],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
    });
    count_delay++;
    this.slide_7_title.forEach((_, index) => {
      anime({
        targets: this.$refs['title_07' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_7_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_07' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_7_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_07_note' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_7_paragraph_note_second.forEach((_, index) => {
      anime({
        targets: this.$refs['line_07_note_second' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    // End slide 7
    anime({
      targets: this.$refs.slide_7,
      opacity: [1, 0],
      duration: timeDuration,
      easing: 'easeInOutQuad',
      delay: count_delay * timeDuration, 
      complete: () => {
        this.$refs.slide_7.style.display = 'none';
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
.is_top-40 {
  top: 40%;
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
.pd-right-20 {
  padding-right: 20px !important;
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
  background-image: url('../assets/images/learndiagnosis03/page-01/3-1P.png');
}
.triangle.slide_1__triangle {
  background-color: #0020607d;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

/* Sart css slide 2 */
.slide_2__background {
  background-image: url('../assets/images/learndiagnosis03/page-02/3-2P.png');
}
.triangle.slide_2__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 3 */
.slide_3__background {
  background-image: url('../assets/images/learndiagnosis03/page-03/3-3P.png');
}
.triangle.slide_3__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 4 */
.slide_4__background {
  background-image: url('../assets/images/learndiagnosis03/page-04/3-4P.png');
}
.triangle.slide_4__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 5 */
.slide_5__background {
  background-image: url('../assets/images/learndiagnosis03/page-05/3-5P.png');
}
.triangle.slide_5__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 6 */
.slide_6__background {
  background-image: url('../assets/images/learndiagnosis03/page-06/3-6P.png');
}
.triangle.slide_6__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 7 */
.slide_7__background {
  background-image: url('../assets/images/learndiagnosis03/page-07/3-7P.png');
}
.triangle.slide_7__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #ff32cd7d;
}


/* Responsive */
@media screen and (max-width: 1024px) {
  .background {
    background-position: 65% center;
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
  .mb-pd-bottom-15 {
    padding-bottom: 15px !important;
  }
  .box.mb-pd-top-40 {
    padding-top: 40px !important;
  }
  .pd-right-20 {
    padding-right: 15px !important;
  }
  .is_top-40 {
    top: auto;
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
