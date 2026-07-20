<template>
  <div
    class="w-full flex h-16  items-center outline outline-solid outline-slate-500
    fixed top-0 left-0 right-0"
    :class="isDark? 'bg-white':'bg-[#141A21]'"
  >
    <div
      class="flex items-center outline outline-solid outline-slate-500 bg-[#1C252E] font-bold text-amber-50 transition-all duration-300 ease-in-out"
      :class="isOpen ? 'w-64' : 'w-16'"
    >
      <div class="bg-[#007E55] p-1 pl-3 pr-3 inline rounded-md m-4">A</div>
      <div v-if="isOpen">Ahmad</div>
    </div>

    <div class="flex justify-between items-center flex-1">
      <div class="text-[#07B1A2] font-semibold flex items-center gap-2">
        <Icon :name="sideBarIcon" @click="toggleIcon" class="ml-4 cursor-pointer" />
        <div>Dashboard</div>
      </div>

      <div class="flex items-center gap-2 text-[#CACED3] mr-2 transition-colors duration-300 ease-in-out">
        <TopbarItemRender :items="topbarItems" />
      </div>
    </div>
  </div>
</template>

<script setup>
const sideBarIcon = ref("lucide:panel-left-open");
const isOpen = useState("sidebar-open", () => true);
const isDark = useState("theme",()=> false)

function toggleIcon() {
  sideBarIcon.value =
    sideBarIcon.value === "lucide:panel-left-close"
      ? "lucide:panel-left-open"
      : "lucide:panel-left-close";

  if (sideBarIcon.value === "lucide:panel-left-open") {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
}

const topbarItems = [
  {
    title: "search",
    icon: "lucide:search",
  },
  {
    title: "docs",
    icon: "lucide:book-open",
  },
  {
    title: "light",
    icon: "lucide:sun",
  },
  {
    title: "Language",
    icon: "lucide:globe",
  },
  {
    title: "notification",
    icon: "lucide:bell",
  },
];
</script>
