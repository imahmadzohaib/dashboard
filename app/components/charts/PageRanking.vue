<template>
  <div>
    <div class="text-3xl font-bold p-4 pl-0">Top Pages</div>
    <div v-for="item in channels" :key="item.name" class="mb-8">
      <div class="flex  items-center justify-between gap-4">
        <div class="text-slate-400 font-bold">#{{item.rank}}</div>

        <div class="flex-1">
          <div class="flex justify-between mb-2">
            <span class="font-semibold text-white">
              {{ item.name }}
            </span>
          </div>

          <div class="h-2 rounded-full bg-[#313A44]">
            <div
              class="h-2 rounded-full transition-all"
              :style="{
                width: item.value + '%',
                background: '#10B981',
              }"
            />
          </div>
        </div>
        <div class="flex flex-col items-end">
            <p class="font-semibold text-xl">{{ item.value }}K</p>
            <p class="text-slate-400">{{ item.unique }}K unique</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  {
    name: "/",
    value: 42.4,
    unique: 31.2,
    rank: 1,
  },
  {
    name: "/products",
    value: 28.9,
    unique: 21.4,
    rank: 2,
  },
  {
    name: "/blog/getting-started-guide",
    value: 18.4,
    unique: 15.8,
    rank: 3,
  },
  {
    name: "/price",
    value: 15.6,
    unique: 12.3,
    rank: 4,
  },
  {
    name: "/pricing",
    value: 12.8,
    unique: 10.5,
    rank: 5,
  },
  {
    name: "/blog/top-10-features",
    value: 11.2,
    unique: 9.8,
    rank: 6,
  },
];
</script>
