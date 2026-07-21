<template>
  <Sidebar />
  <Topbar />
  <main
    :class="isOpen ? 'ml-64 max-md:ml-0 max-md:z-10' : 'ml-16 max-md:ml-0'"
    class="mt-16 p-6 transition-all duration-300 max-md:relative"
  >
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

const isOpen = useState("sidebar-open", () => true);
</script>
