<template>
  <div class="main">
    <div ref="slide_1" class="background slide_1__background">
      <div ref="slide_1__triangle" class="triangle slide_1__triangle"></div>
      <div ref="slide_1__box" class="box pd-top-80 pd-bottom-80 mb-pd-top-40">
        <div class="box__title">
          <p v-for="(title_1, index) in slide_1_title" :key="index" :ref="'title_1' + index" class="title font-size-32px font-weight-bold">{{title_1}}</p>
        </div>
      </div>
    </div>
    <div ref="slide_2" class="background slide_2__background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle is_bottom--left"></div>
      <div ref="slide_2__box" class="box is_bottom--left pd-top-120 pd-bottom-120">
        <div class="box__title">
          <p v-for="(title_2, index) in slide_2_title" :key="index" :ref="'title_2' + index" class="title font-size-32px font-weight-bold">{{title_2}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_2, index) in slide_2_paragraph" :key="index" :ref="'line_2' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_2 }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_3" class="background slide_3__background">
      <div ref="slide_3__triangle" class="triangle slide_3__triangle is_bottom--right"></div>
      <div ref="slide_3__box" class="box is_bottom--right text-align-right pd-top-120 pd-bottom-120">
        <div class="box__title">
          <p v-for="(title_3, index) in slide_3_title" :key="index" :ref="'title_3' + index" class="title font-size-32px font-weight-bold">{{title_3}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_3, index) in slide_3_paragraph" :key="index" :ref="'line_3' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_3 }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_4" class="background slide_4__background">
      <div ref="slide_4__triangle" class="triangle slide_4__triangle is_bottom--left"></div>
      <div ref="slide_4__box" class="box is_bottom--left pd-top-80 pd-bottom-80">
        <div class="box__title">
          <p v-for="(title_4, index) in slide_4_title" :key="index" :ref="'title_4' + index" class="title font-size-32px font-weight-bold">{{title_4}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_4, index) in slide_4_paragraph" :key="index" :ref="'line_4' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_4 }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_5" class="background slide_5__background">
      <div ref="slide_5__triangle" class="triangle slide_5__triangle is_bottom--right"></div>
      <div ref="slide_5__box" class="box is_bottom--right text-align-right">
        <div class="box__title">
          <p v-for="(title_5, index) in slide_5_title" :key="index" :ref="'title_5' + index" class="title font-size-32px font-weight-bold">{{title_5}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_5, index) in slide_5_paragraph" :key="index" :ref="'line_5' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_5 }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_6" class="background slide_6__background">
      <div ref="slide_6__triangle" class="triangle slide_6__triangle is_bottom--left"></div>
      <div ref="slide_6__box" class="box is_bottom--left pd-top-120 pd-bottom-120">
        <div class="box__title">
          <p v-for="(title_6, index) in slide_6_title" :key="index" :ref="'title_6' + index" class="title font-size-32px font-weight-bold">{{title_6}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_6, index) in slide_6_paragraph" :key="index" :ref="'line_6' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_6 }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_7" class="background slide_7__background">
      <div ref="slide_7__triangle" class="triangle slide_7__triangle is_bottom--left"></div>
      <div ref="slide_7__box" class="box is_bottom--left pd-bottom-10 mb_is_bottom--right">
        <div class="box__title">
          <p v-for="(title_7, index) in slide_7_title" :key="index" :ref="'title_7' + index" class="title font-size-32px font-weight-bold">{{title_7}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_7, index) in slide_7_paragraph" :key="index" :ref="'line_7' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_7 }}
          </p>
        </div>
        <div class="box__paragraph mt-5 mb-is-mt-5">
          <p v-for="(line_7_note, index) in slide_7_paragraph_note" :key="index" :ref="'line_7_note' + index" class="paragraph font-size-8px font-weight-normal">
            {{ line_7_note }}
          </p>
        </div>
      </div>
    </div>
    <div ref="slide_8" class="background slide_8__background">
      <div ref="slide_8__triangle" class="triangle slide_8__triangle is_bottom--right"></div>
      <div ref="slide_8__box" class="box is_bottom--right text-align-right mb_is_bottom--left">
        <div class="box__title">
          <p v-for="(title_8, index) in slide_8_title" :key="index" :ref="'title_8' + index" class="title font-size-32px font-weight-bold">{{title_8}}</p>
        </div>
        <div class="box__paragraph">
          <p v-for="(line_8, index) in slide_8_paragraph" :key="index" :ref="'line_8' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_8 }}
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
        'LEP製剤のもう一つの選択肢、',
        'あらためて考えてみませんか？'
      ],
      slide_2_title: [
        '女性のからだの',
        '自然なリズム、',
        '28日周期服用'
      ],
      slide_2_paragraph: [
        'LEP製剤を服用することで、つらい生理の症状から',
        '少し解放されたのではないでしょうか。'
      ],
      slide_3_title: [
        '気になる症状が',
        '残っていませんか？'
      ],
      slide_3_paragraph: [
        'もしかしたら',
        '休薬期間（プラセボ服用期間）に気になる症状があるのでは？',
        '28日周期で服用するLEP製剤は',
        '休薬期間にホルモン分泌量がわずかに増加し',
        '人によっては頭痛や腹痛などのマイナートラブルが起こる場合があります。'
      ],
      slide_4_title: [
        'LEP製剤の、',
        'もう一つの選択肢'
      ],
      slide_4_paragraph: [
        'ご存知のように、LEP製剤には',
        'あなたが選んだ28日周期で服用するタイプと',
        '最長で数ヵ月間連続服用できるタイプがあります。'
      ],
      slide_5_title: [
        '休薬期間を',
        '「スキップ」する',
        'という考え方'
      ],
      slide_5_paragraph: [
        '28日周期で服用するLEP製剤の場合',
        '28日間に1度、必ず休薬期間（プラセボ服用期間）があります。',
        '一方、数ヵ月間連続で服用できるLEP製剤の場合、',
        '服用している間は、困った症状が起こりがちな休薬期間を',
        '「スキップ」して、頻度を減らすことができます。',
      ],
      slide_6_title: [
        '生理の回数が',
        '少なくなっても大丈夫？'
      ],
      slide_6_paragraph: [
        '自然な生理と近いサイクルの28日周期で',
        '服用するタイプを選んでいるあなた。',
        '連続服用タイプに変更すると',
        '「自然な生理じゃない」と違和感があるかもしれませんね。'
      ],
      slide_7_title: [
        '生理の回数が',
        '増えている？'
      ],
      slide_7_paragraph: [
        '現代の女性の生理回数は、昔の女性の約9倍にもなる1)',
        'という報告があります。',
        'その理由のひとつとして',
        '昔の女性は今よりも出産回数が多かったため、',
        '妊娠中や産後の「生理のない期間」の合計時間が',
        '今よりもずっと長かったと考えられています。'
      ],
      slide_7_paragraph_note: [
        '1) Short RV: Proc R Soc Lond B Biol Sci. 1976; 195: 3-24'
      ],
      slide_8_title: [
        'よりあなたに',
        '合ったLEP製剤を'
      ],
      slide_8_paragraph: [
        '女性が出産を多く経験していた時代から',
        '時代とともに社会や生活は大きく変化しました。',
        '現代社会では、生理のありかたも変わってきているのかもしれません。',
        '休薬期間（プラセボ服用期間）に気になる症状がある場合は',
        '次回受診の際に',
        '自分にどのタイプのLEP製剤が合うのかについて',
        '婦人科医にじっくり相談してみてはいかがでしょうか？'
      ]
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
        targets: this.$refs['title_7' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_7_paragraph.forEach((_, index) => {
      anime({
        targets: this.$refs['line_7' + index],
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
    });
    count_delay++;
    });
    this.slide_7_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_7_note' + index],
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
    // Start slide 8
      anime({
        targets: this.$refs.slide_8,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration,
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_8__triangle,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_8__box,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      this.slide_8_title.forEach((_, index) => {
        anime({
          targets: this.$refs['title_8' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_8_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_8' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      // End slide 8
      anime({
        targets: this.$refs.slide_8,
        opacity: [1, 0],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
        complete: () => {
          this.$refs.slide_8.style.display = 'none';
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
  background-image: url('../assets/images/learndiagnosis04/page-01/4-1P.png');
}
.triangle.slide_1__triangle {
  background-color: #0020607d;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

/* Sart css slide 2 */
.slide_2__background {
  background-image: url('../assets/images/learndiagnosis04/page-02/4-2P.png');
}
.triangle.slide_2__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 3 */
.slide_3__background {
  background-image: url('../assets/images/learndiagnosis04/page-03/4-3P.png');
}
.triangle.slide_3__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 4 */
.slide_4__background {
  background-image: url('../assets/images/learndiagnosis04/page-04/4-4P.png');
}
.triangle.slide_4__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 5 */
.slide_5__background {
  background-image: url('../assets/images/learndiagnosis04/page-05/4-5P.png');
}
.triangle.slide_5__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 6 */
.slide_6__background {
  background-image: url('../assets/images/learndiagnosis04/page-06/4-6P.png');
}
.triangle.slide_6__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 7 */
.slide_7__background {
  background-image: url('../assets/images/learndiagnosis04/page-07/4-7P.png');
}
.triangle.slide_7__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 8 */
.slide_8__background {
  background-image: url('../assets/images/learndiagnosis04/page-08/4-8P.png');
}
.triangle.slide_8__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #ff32cd7d;
}

/* Responsive */
@media screen and (max-width: 1024px) {
  .background {
    background-position: 65% center;
  }
  .slide_4__background {
    background-position: 50% center;
  }
  .slide_5__background {
    background-position: 30% center;
  }
  .slide_8__background {
    background-position: 16% center;
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
  .triangle.slide_7__triangle {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
  .slide_7__background {
    background-position: 85% center;
  }
  .triangle.slide_8__triangle {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
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
