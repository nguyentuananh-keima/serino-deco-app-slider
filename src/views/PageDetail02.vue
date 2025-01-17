<template>
  <div class="main">
    <!-- Slide 01 -->
    <div ref="slide_1" class="background slide_1__background">
      <div ref="slide_1__triangle" class="triangle slide_1__triangle"></div>
      <!-- Box -->
      <div ref="slide_1__box" class="box">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_01, index) in slide_1_title" :key="index" :ref="'title_01' + index" class="title font-size-32px font-weight-bold">{{title_01}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_01, index) in slide_1_paragraph" :key="index" :ref="'line_01' + index" class="paragraph font-size-24px font-weight-bold">
            {{ line_01 }}
          </p>
        </div>
      </div>
    </div>

    <!-- Slide 02 -->
    <div ref="slide_2" class="background slide_2__background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_2__box" class="box is_bottom--left">

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
      <div ref="slide_3__box" class="box is_bottom--right text-align-right">

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
      <div ref="slide_4__box" class="box is_bottom--left">

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
         <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_04_note, index) in slide_4_paragraph_note" :key="index" :ref="'line_04_note' + index" class="paragraph font-size-14px font-weight-normal">
            {{ line_04_note }}
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
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_06_note_second, index) in slide_6_paragraph_note_second" :key="index" :ref="'line_06_note_second' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_06_note_second }}
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
      this.slide_1_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_01' + index],
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
    this.slide_4_paragraph_note.forEach((_, index) => {
      anime({
        targets: this.$refs['line_04_note' + index],
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
      this.slide_6_paragraph_note_second.forEach((_, index) => {
        anime({
          targets: this.$refs['line_06_note_second' + index],
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
  width: 45%;
  height: auto;
  color: #FFFFFF;
  z-index: 2;
  padding: 30px;
}
.box__paragraph {
  margin-top: 40px;
}
.box__paragraph--note {
  margin-top: 40px;
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
  font-size: 32px;
  line-height: 1.5;
}
.font-size-24px {
  font-size: 24px;
  line-height: 1.5;
}
.font-size-16px {
  font-size: 16px;
  line-height: 1.5;
}
.font-size-14px {
  font-size: 14px;
  line-height: 1.5;
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

</style>
