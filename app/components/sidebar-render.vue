<template>
  <div v-for="item in totalItems" :key="item.category">
    <div class="font-semibold mt-4 " v-if="isOpen" 
     :class="[
          'transition-all duration-300 ',
          isOpen ? 'opacity-100 max-w-40 ml-2' : 'opacity-0 max-w-0 ml-0',
        ]">
      {{ item.category }}
    </div>

    <ItemRender :items="item.items"></ItemRender>
  </div>
</template>

<script setup>

const props = defineProps({
    totalItems: Object
});

const isOpen = useState("sidebar-open")

</script>
