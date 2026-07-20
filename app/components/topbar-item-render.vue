<template>
  <div
    v-for="item in items"
    :key="item.title"
    class=" rounded-md transition-colors p-2 cursor-pointer"
    :class="!isDark?'hover:bg-[#2E363E]':'hover:bg-[#BABFC7]'"
    @click="handleClick(item)"
  >
    <Icon  :name="item.title === 'light' ? themeIcon : item.icon" :style="{color:'#80858B'}" />
  </div>
  <div
    class="fixed flex-col top-12 right-12 pt-1 bg-[#1C252E] rounded-md outline font-semibold"
    :class="isLang ? 'block' : 'hidden'"
  >
    <div
      v-for="value in langarr"
      :key="value"
      class="p-2 hover:bg-[#2E363E] transition-colors cursor-pointer"
      :class="isSelected === value ? 'text-green-600' : ''"
      @click="selected(value)"
    >
      {{ value }}
    </div>
  </div>
</template>

<script setup>
const isLang = ref(false);
const langarr = ["English", "French", "Deutsch"];
const isSelected = ref(langarr[0]);
const colorMode = useColorMode()
const isDark = useState("theme", ()=>true)

const themeIcon = computed(() =>
  colorMode.value === 'dark'
    ? "lucide:moon"
    : "lucide:sun"
)

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  isDark.value = colorMode.value === 'dark' ? true : false; 
}


const props = defineProps({
  items: Array,
});

function selected(item) {
  isSelected.value = item;
}
function handleClick(item) { 
  switch (item.title) {
    case 'Language':
      isLang.value = !isLang.value
      break

    case 'light':
      toggleTheme()
      break
  }
}
</script>
