<template>
  <div class="space-y-4">
    <h2 class="text-3xl font-bold">Device Breakdown</h2>

    <div class="flex items-center gap-8 max-sm:flex-col">

      <div class="w-36 h-36 flex items-center justify-center shrink-0 lg:w-30 lg:h30">
        <ClientOnly>
          <slot />
        </ClientOnly>
      </div>

      <div class="flex-1 flex flex-col gap-4">
        <div
          v-for="item in devices"
          :key="item.name"
          class="flex items-center justify-between rounded-2xl border border-[#313A44] p-5 lg:p-3"
        >
          <div class="flex items-center gap-4">
            <Icon
              :name="item.icon"
              class="text-4xl shrink-0 lg:text-3xl"
              :style="{ color: item.color }"
            />

            <div>
              <p class="font-semibold ">
                {{ item.name }}
              </p>

              <p class="text-[#919EAB]">
                {{ item.sessions }}
              </p>
            </div>
          </div>

          <span class="text-xl font-bold lg:font-semibold lg:text-lg">
            {{ item.percent }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const devices = [
  {
    name: "Desktop",
    sessions: "48,200 sessions",
    percent: 54,
    color: "#10B981",
    icon: "mdi:monitor",
  },
  {
    name: "Mobile",
    sessions: "33,100 sessions",
    percent: 37,
    color: "#3B82F6",
    icon: "mdi:cellphone",
  },
  {
    name: "Tablet",
    sessions: "8,121 sessions",
    percent: 9,
    color: "#F59E0B",
    icon: "mdi:tablet",
  },
];
</script>
