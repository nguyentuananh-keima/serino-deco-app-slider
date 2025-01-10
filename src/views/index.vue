<template>
  <div>
    <page-01 v-if="currentHash === '/01'" />
    <page-02 v-if="currentHash === '/02'" />
    <page-03 v-if="currentHash === '/03'" />
    <page-04 v-if="currentHash === '/04'" />
  </div>
</template>

<script>
import Page01 from "./page-01.vue";
import Page02 from "./page-02.vue";
import Page03 from "./page-03.vue";
import Page04 from "./page-04.vue";
export default {
  components: {
    Page01,
    Page02,
    Page03,
    Page04
  },
  data() {
    return {
      currentHash: null,
    };
  },
  created() {
    this.handleHashChange();
    window.addEventListener("hashchange", this.handleHashChange);
  },
  destroyed() {
    window.removeEventListener("hashchange", this.handleHashChange);
  },
  mounted() {
  },
  methods: {
    handleHashChange() {
      this.currentHash =window.location.hash.slice(1) || "/";
    }
  }
};
</script>

<style>
.slide {
  position: relative;
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.animated-object {
  display: inline-block;
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 10px;
}
</style>
