<template>
  <div v-for="item in items" :key="item.title">
    <NuxtLink
      :to="item.path"
      class="flex items-center gap-2 p-3 w-[90%] hover:bg-[#2E363E] rounded-xl transition-colors"
      :class="route.path===item.path? 'bg-[#1C3037]':'bg-[#1C252E]'"
    >
      <Icon :name="item.icon" size="24" class="shrink-0"/>
      <span
        :class="[
          'transition-all duration-400 ease-in-out',
          isOpen ? 'opacity-100 max-w-40 ml-2' : 'opacity-0 max-w-0 ml-0',
        ]"
      >
        {{ item.title }}
      </span>
    </NuxtLink>
  </div>

</template>

<script setup lang="ts">
interface Item {
  title: string;
  icon: string;
  path:string;
}

const props = defineProps<{ items: Item[] }>();
const isOpen = useState("sidebar-open",()=>true);



const route = useRoute();
</script>
