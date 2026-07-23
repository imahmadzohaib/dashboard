<template>
  <div
    class="w-full flex h-16 items-center outline outline-solid outline-[#29313A] fixed top-0 left-0 right-0 z-52"
    :class="isDark ? 'bg-white' : 'bg-[#141A21]'"
  >
    <div
      class="flex items-center outline outline-solid outline-[#29313A] bg-[#1C252E] font-bold text-amber-50 transition-all duration-300 ease-in-out max-md:hidden"
      :class="isOpen ? 'w-64' : 'w-16'"
    >
      <div class="bg-[#007E55] p-1 pl-3 pr-3 inline rounded-md m-4 lg:">A</div>
      <div v-if="isOpen">Ahmad</div>
    </div>

    <div class="flex justify-between items-center flex-1">
      <div class="text-[#07B1A2] font-semibold flex items-center gap-2">
        <Icon
          :name="sideBarIcon"
          @click="toggleIcon"
          class="ml-4 cursor-pointer max-md:hidden"
        />
        <Icon
          :name="menuBarIcon"
          @click="toggleIcon"
          class="ml-4 cursor-pointer md:hidden"
        />

        <div class="max-md:hidden">Dashboard</div>
        <div class="md:hidden">
          <div class="flex items-center gap-2">
            <template v-for="(item, index) in breadcrumbs" :key="item.path">
              <NuxtLink
                :to="item.path"
                :class="[
                  index === breadcrumbs.length - 1
                    ? 'text-emerald-400 font-semibold'
                    : 'text-slate-400 hover:text-white',
                ]"
              >
                {{ item.label }}
              </NuxtLink>

              <Icon
                v-if="index < breadcrumbs.length - 1"
                name="heroicons:chevron-right-20-solid"
                class="size-4 text-slate-500"
              />
            </template>
          </div>
        </div>
      </div>

      <div
        class="flex items-center gap-2 text-[#CACED3] mr-2 transition-colors duration-300 ease-in-out"
      >
        <TopbarItemRender :items="topbarItems" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";

const sideBarIcon = ref("lucide:panel-left-close");
const isOpen = useState("sidebar-open", () => true);
const isDark = useState("theme");


const menuBarIcon = ref("lucide:menu");

const isXL = useMediaQuery("(max-width: 1280px)");

watch(
  isXL,
  (value) => {
    isOpen.value = !value;
  }
);

const route = useRoute();

const breadcrumbs = computed(() => {
  return route.path
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: "/" + array.slice(0, index + 1).join("/"),
    }));
});

function toggleIcon() {
  sideBarIcon.value =
    sideBarIcon.value === "lucide:panel-left-close"
      ? "lucide:panel-left-open"
      : "lucide:panel-left-close";

  if (sideBarIcon.value === "lucide:panel-left-open") {
    isOpen.value = false;
  } else {
    isOpen.value = true;
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
