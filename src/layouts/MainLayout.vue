<template>
  <div>
    <Sidebar />
    <SidebarMobile />
    <div
      class="content-wrapper"
      :class="sidebarCollapse ? 'sidebar__open' : 'sidebar__close'"
    >
      <Navbar />
      <div class="grid grid-cols-10 gap-4">
        <div
          class="content col-span-10 xl:col-span-7 md:col-span-7 lg:col-span-3"
        >
          <router-view></router-view>
        </div>
        <div class="col-span-10 xl:col-span-3 md:col-span-3 lg:col-span-3">
          <EventBar />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import EventBar from "./components/EventBar.vue";
import SidebarMobile from "./components/SidebarMobile.vue";
const sidebarCollapse = ref(true);
</script>
<style lang="scss" scoped>
.sidebar__open {
  margin-left: 270px;
}
.sidebar__close {
  margin-left: 60px;
}
.content-wrapper {
  transition: all 0.5s ease;
}
</style>
