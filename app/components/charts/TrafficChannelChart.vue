<template>
  <div>
    <div class="text-3xl font-bold p-4 pl-0">Traffic by Channel</div>
    <div v-for="item in channels" :key="item.name" class="mb-8">
      <div class="flex justify-between mb-2">
        <span class="font-semibold text-white">
          {{ item.name }}
        </span>

        <span class="text-slate-400"> {{ item.value }}% </span>
      </div>

      <div class="h-3 rounded-full bg-[#313A44]">
        <div
          class="h-3 rounded-full transition-all"
          :style="{
            width: item.value + '%',
            background: item.color,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  {
    name: "Organic Search",
    value: 38,
    color: "#10B981",
  },
  {
    name: "Direct",
    value: 28,
    color: "#3B82F6",
  },
  {
    name: "Referral",
    value: 18,
    color: "#F59E0B",
  },
  {
    name: "Social Media",
    value: 12,
    color: "#EC4899",
  },
  {
    name: "Email",
    value: 6,
    color: "#8B5CF6",
  },
];
</script>
