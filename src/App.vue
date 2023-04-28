<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";
import Content from "./components/Content/Content.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: { Sidebar, Content, Header, Footer },
  setup() {
    return {
      sidebarWidth,
    };
  },
};
</script>

<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <Header />
    <Content />
    <Footer />

    <!-- <router-view /> -->
  </div>
</template>
<style></style>
