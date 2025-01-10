<template>
  <div>
    <!-- <page_template /> -->
    <!-- <index /> -->
    <page />
  </div>
</template>

<script>
import page_template from './views/page-template.vue';
import index from './views/index.vue';
import page from './views/Page.vue';

import './style/main.scss';

export default {
  name: 'App',
  components: {
    page_template,
    index,
    page
  },
  data() {
    return {};
  },
};
</script>

<style module lang='sass'></style>
