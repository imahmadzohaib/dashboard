<template>
  <Sidebar />
  <Topbar />
  <main
    :class="isOpen ? 'ml-64' : 'ml-16'"
    class="mt-16 p-6 transition-all duration-300"
  >
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

const isOpen = useState("sidebar-open", () => true);
</script>
