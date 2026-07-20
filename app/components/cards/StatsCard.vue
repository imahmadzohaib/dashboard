<template>
  <div
    class="rounded-3xl  p-6  h-48
           flex flex-col justify-between"
           :class="!isDark?'bg-[#1F2933]':'bg-white' "
  >
    <div :class="!isDark?'text-[#919EAB]':'text-black'">
      <p class=" text-sm"
        >
        {{ title }}
      </p>

      <h2 class="text-SSxl font-bold mt-2" >
        {{ value }}
      </h2>

      <p
        class="text-sm mt-1"
        :class="positive ? 'text-green-400' : 'text-red-400'"
      >
        {{ change }}
      </p>
    </div>

    <ClientOnly>
      <slot />
    </ClientOnly>
  </div>
</template>

<script setup >
const props = defineProps({
  title: String,
  value: String,
  change: String,
  positive: Boolean
})

const isDark= useState("theme",()=>true)
</script>


