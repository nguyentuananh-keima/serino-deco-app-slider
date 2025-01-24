<template>
  <div class="main">
    <!-- Slide 01 -->
    <div ref="slide_1" class="background slide_1__background">
      <div ref="slide_1__triangle" class="triangle slide_1__triangle"></div>
      <!-- Box -->
      <div ref="slide_1__box" class="box">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_01, index) in slide_1_title" :key="index" :ref="'title_01' + index" class="title title__special font-size-24px font-weight-bold">{{title_01}}</p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph mt-20">
          <p v-for="(line_01, index) in slide_1_paragraph" :key="index" :ref="'line_01' + index" class="paragraph paragraph__special font-size-32px font-weight-bold text-underline">
            {{ line_01 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 02 -->
    <div ref="slide_2" class="background slide_2__background">
      <div ref="slide_2__triangle" class="triangle slide_2__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_2__box" class="box is_bottom--left pd-top-60 pd-bottom-60">

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
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_03_note, index) in slide_3_paragraph_note" :key="index" :ref="'line_03_note' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_03_note }}
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
      </div>
    </div>
    <!-- Slide 05 -->
    <div ref="slide_5" class="background slide_5__background">
      <div ref="slide_5__triangle" class="triangle slide_5__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_5__box" class="box is_bottom--right text-align-right pd-bottom-10">

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
          <p v-for="(line_05_note, index) in slide_5_paragraph_note" :key="index" :ref="'line_05_note' + index" class="paragraph font-size-8px font-weight-normal">
            {{ line_05_note }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 06 -->
    <div ref="slide_6" class="background slide_6__background">
      <div ref="slide_6__triangle" class="triangle slide_6__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_6__box" class="box is_bottom--left pd-bottom-10">

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
          <p v-for="(line_06_note, index) in slide_6_paragraph_note" :key="index" :ref="'line_06_note' + index" class="paragraph font-size-8px font-weight-normal">
            {{ line_06_note }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 07 -->
    <div ref="slide_7" class="background slide_7__background">
      <div ref="slide_7__triangle" class="triangle slide_7__triangle is_bottom--right"></div>
      <!-- Box -->
      <div ref="slide_7__box" class="box is_bottom--right text-align-right pd-top-80 pd-bottom-80">

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
      </div>
    </div>
    <!-- Slide 08 -->
    <div ref="slide_8" class="background slide_8__background">
      <div ref="slide_8__triangle" class="triangle slide_8__triangle is_bottom--left"></div>
      <!-- Box -->
      <div ref="slide_8__box" class="box is_bottom--left pd-top-80 pd-bottom-80">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_08, index) in slide_8_title" :key="index" :ref="'title_08' + index" class="title font-size-32px font-weight-bold">{{title_08}}</p>
        </div>

        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_08, index) in slide_8_paragraph" :key="index" :ref="'line_08' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_08 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_08_note, index) in slide_8_paragraph_note" :key="index" :ref="'line_08_note' + index" class="paragraph font-size-14px font-weight-normal">
            {{ line_08_note }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 09 -->
    <div ref="slide_9" class="background slide_9__background">
      <div ref="slide_9__triangle" class="triangle slide_9__triangle is_top--left"></div>
      <!-- Box -->
      <div ref="slide_9__box" class="box is_top--left mb_is_bottom--right pd-top-60 pd-bottom-60">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_09, index) in slide_9_title" :key="index" :ref="'title_09' + index" class="title font-size-32px font-weight-bold">{{title_09}}</p>
        </div>

        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_09, index) in slide_9_paragraph" :key="index" :ref="'line_09' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_09 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_09_note, index) in slide_9_paragraph_note" :key="index" :ref="'line_09_note' + index" class="paragraph font-size-14px font-weight-normal">
            {{ line_09_note }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_09_note_second, index) in slide_9_paragraph_note_second" :key="index" :ref="'line_09_note_second' + index" class="paragraph font-size-14px font-weight-normal">
            {{ line_09_note_second }}
          </p>
        </div>
      </div>
    </div>
    <!-- Slide 10 -->
    <div ref="slide_10" class="background slide_10__background">
      <div ref="slide_10__triangle" class="triangle slide_10__triangle bottom--left"></div>
      <!-- Box -->
      <div ref="slide_10__box" class="box is_bottom--left mb_is_bottom--left pd-top-80 pd-bottom-80">

        <!-- Title -->
        <div class="box__title">
          <p v-for="(title_10, index) in slide_10_title" :key="index" :ref="'title_10' + index" class="title font-size-32px font-weight-bold">{{title_10}}</p>
        </div>

        <!-- Paragraph -->
        <div class="box__paragraph">
          <p v-for="(line_10, index) in slide_10_paragraph" :key="index" :ref="'line_10' + index" class="paragraph font-size-16px font-weight-normal">
            {{ line_10 }}
          </p>
        </div>
        <!-- Paragraph -->
        <div class="box__paragraph--note">
          <p v-for="(line_10_note, index) in slide_10_paragraph_note" :key="index" :ref="'line_10_note' + index" class="paragraph font-size-14px font-weight-normal">
            {{ line_10_note }}
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
        '「生理痛が痛いのはあたりまえ」',
        '「みんなもつらいんだから」',
        'と我慢してしまう、'
      ],
      slide_1_paragraph: [
        'がんばり屋さんのあなたへ'
      ],
      slide_2_title: [
        '生理のつらい症状、',
        '我慢していませんか？'
      ],
      slide_2_paragraph: [
        '生理の痛みやつらさを、',
        '「みんなも同じようにつらいはず」と自分に言い聞かせて、',
        '我慢しているのかもしれません。'
      ],
      slide_3_title: [
        '女性にとって',
        '生理はあたりまえ。',
        'だから生理痛もあたりまえ？'
      ],
      slide_3_paragraph: [
        '生理は女性にそなわった、大切なからだのしくみです。',
        'だから毎月の生理痛もあたりまえで、しかたないこと…… '
      ],
      slide_3_paragraph_note: [
        '本当にそうでしょうか？'
      ],
      slide_4_title: [
        '実は生理痛には、',
        '思わぬ病気が',
        '隠れていることも'
      ],
      slide_4_paragraph: [
        '生理痛に隠れている病気の中には、',
        '生理をくり返すたびに症状が重くなっていくものもあります。',
        '「生理に痛みはつきもの」「みんなも同じようにつらいはず」',
        'と我慢しているうちに、病気が進んでしまう場合があります。'
      ],
      slide_5_title: [
        '生理回数が増えている？'
      ],
      slide_5_paragraph: [
        '現代の女性は、出産回数の減少などの理由で',
        '生理の回数が増えているといわれています。',
        '現代の女性は、昔の女性の約9倍もの生理回数がある、',
        'との報告1)もあります。'
      ],
      slide_5_paragraph_note: [
        '1) Short RV: Proc R Soc Lond B Biol Sci. 1976; 195: 3-24'
      ],
      slide_6_title: [
        '生理回数が増えると……'
      ],
      slide_6_paragraph: [
        '実は、生理回数の増加が、子宮内膜症を発症するリスクに',
        'つながる場合があります1-3)。',
        'さらに子宮内膜症は、',
        '様々な婦人科系の疾患に関連することが知られています4-10)。'
      ],
      slide_6_paragraph_note: [
        '1) Short RV: Proc R Soc Lond B Biol Sci. 1976; 195: 3-24　2) Treloar SA, et al.: Am J Obstet Gynecol 2010; 202: 534.e1-6',
        '3) Farland LV, et al.: BMJ 2017; 358: j3778　4) Takemura Y, et al.: Gynecol Endocrinol 2013; 29: 113-115',
        '5) Matorras R, et al.: Fertil Steril 1995; 63: 34-38　6) Nagai K, et al.: BMJ Open 2015; 5: e006360',
        '7) Melin A, et al.: Hum Reprod 2006; 21: 1237-1242　8) Kinugasa S, et al.: Atherosclerosis 2011; 219: 784-788',
        '9) Mu F, et al.: Circ Cardiovasc Qual Outcomes 2016; 9: 257-264　10) Laganà AS, et al.: Int J Womens Health 2017; 9: 323-330'
      ],
      slide_7_title: [
        '生理をお休みする',
        '選択肢があります'
      ],
      slide_7_paragraph: [
        '多すぎる生理は、私たちのからだに大きな負担を強いています。',
        'でも、その生理を「お休みする」、という選択肢があります。'
      ],
      slide_8_title: [
        '「生理を休む」って？'
      ],
      slide_8_paragraph: [
        '毎月の排卵を抑えることで生理の回数を減らす、',
        'つまり「生理を休む」治療があります。'
      ],
      slide_8_paragraph_note: [
        'つらい症状や生理痛が毎月くり返されること。',
        'これはあたりまえなことでも、我慢すべきことでもありません。'
      ],
      slide_9_title: [
        '生理を休んで大丈夫？'
      ],
      slide_9_paragraph: [
        '生理はからだの大切なしくみ。',
        'それを治療でお休みすることに、',
        '不安を感じるのは自然なことです。'
      ],
      slide_9_paragraph_note: [
        '副作用はありますか？',
        '将来、妊娠しにくくなりませんか？'
      ],
       slide_9_paragraph_note_second: [
        'そんな疑問や不安は、',
        '婦人科医におたずねください。'
      ],
      slide_10_title: [
        '婦人科医に',
        '相談してみませんか？'
      ],
      slide_10_paragraph: [
        '昔と比べてはるかに多くなった「生理」。',
        'そのつらい症状を一人で我慢したり、抱え込んだりせず、',
        'ぜひ、勇気をだして婦人科医にご相談ください。'
      ],
      slide_10_paragraph_note: [
        'あなたが、あなたらしくいられるように。'
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
      this.slide_3_paragraph_note.forEach((_, index) => {
        anime({
          targets: this.$refs['line_03_note' + index],
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
          targets: this.$refs['title_08' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_8_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_08' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_8_paragraph_note.forEach((_, index) => {
        anime({
          targets: this.$refs['line_08_note' + index],
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

      // Start slide 9
      anime({
        targets: this.$refs.slide_9,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration,
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_9__triangle,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_9__box,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      this.slide_9_title.forEach((_, index) => {
        anime({
          targets: this.$refs['title_09' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_9_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_09' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_9_paragraph_note.forEach((_, index) => {
        anime({
          targets: this.$refs['line_09_note' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_9_paragraph_note_second.forEach((_, index) => {
        anime({
          targets: this.$refs['line_09_note_second' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      // End slide 9
      anime({
        targets: this.$refs.slide_9,
        opacity: [1, 0],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
        complete: () => {
          this.$refs.slide_9.style.display = 'none';
          console.log('Background is now hidden');
        },
      });
      count_delay++;

      // Start slide 10
      anime({
        targets: this.$refs.slide_10,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration,
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_10__triangle,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      anime({
        targets: this.$refs.slide_10__box,
        opacity: [0, 1],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
      });
      count_delay++;
      this.slide_10_title.forEach((_, index) => {
        anime({
          targets: this.$refs['title_10' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_10_paragraph.forEach((_, index) => {
        anime({
          targets: this.$refs['line_10' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      this.slide_10_paragraph_note.forEach((_, index) => {
        anime({
          targets: this.$refs['line_10_note' + index],
          opacity: [0, 1],
          duration: timeDuration,
          easing: 'easeInOutQuad',
          delay: count_delay * timeDuration, 
      });
      count_delay++;
      });
      // End slide 10
      anime({
        targets: this.$refs.slide_10,
        opacity: [1, 0],
        duration: timeDuration,
        easing: 'easeInOutQuad',
        delay: count_delay * timeDuration, 
        complete: () => {
          this.$refs.slide_10.style.display = 'none';
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
/* Sart css slide 1 */
.slide_1__background {
  background-image: url('../assets/images/learndiagnosis01/page-01/1-1P.png');
}
.triangle.slide_1__triangle {
  background-color: #0020607d;
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

/* Sart css slide 2 */
.slide_2__background {
  background-image: url('../assets/images/learndiagnosis01/page-02/1-2P.png');
}
.triangle.slide_2__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 3 */
.slide_3__background {
  background-image: url('../assets/images/learndiagnosis01/page-03/1-3P.png');
}
.triangle.slide_3__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 4 */
.slide_4__background {
  background-image: url('../assets/images/learndiagnosis01/page-04/1-4P.png');
}
.triangle.slide_4__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 5 */
.slide_5__background {
  background-image: url('../assets/images/learndiagnosis01/page-05/1-5P.png');
}
.triangle.slide_5__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #064e6a7d;
}

/* Sart css slide 6 */
.slide_6__background {
  background-image: url('../assets/images/learndiagnosis01/page-06/1-6P.png');
}
.triangle.slide_6__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 7 */
.slide_7__background {
  background-image: url('../assets/images/learndiagnosis01/page-07/1-7P.png');
}
.triangle.slide_7__triangle {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #00b1507d;
}

/* Sart css slide 8 */
.slide_8__background {
  background-image: url('../assets/images/learndiagnosis01/page-08/1-8P.png');
}
.triangle.slide_8__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #2753167d;
}

/* Sart css slide 9 */
.slide_9__background {
  background-image: url('../assets/images/learndiagnosis01/page-09/1-9P.png');
}
.triangle.slide_9__triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  background: #064e6a7d;
}

/* Sart css slide 10 */
.slide_10__background {
  background-image: url('../assets/images/learndiagnosis01/page-10/1-10P.png');
}
.triangle.slide_10__triangle {
  clip-path: polygon(79% 0, 68% 50%, 78% 100%, 0 100%, 0% 50%, 0 0);
  background: #ff32cd7d;
}



/* Responsive */
@media screen and (max-width: 1024px) {
  .font-size-32px {
    font-size: calc(32*(100vw / 1024));
  }
  .font-size-16px {
    font-size: calc(16 * (100vw / 1024));
  }
  .font-size-24px {
    font-size: calc(24 * (100vw / 1024));
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
    line-height: 1.4;
  }
  .title.title__special {
    font-size: calc(16 * (100vw / 564));
  }
  .paragraph.paragraph__special{
    font-size: calc(20 * (100vw / 564));
  }
  .triangle.slide_7__triangle {
    background: #064e6a7d;
  }
  .triangle.slide_9__triangle {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
  .triangle.slide_10__triangle {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
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
}
</style>
