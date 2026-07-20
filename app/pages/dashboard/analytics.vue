<template>
  <div class="flex flex-1 flex-col overflow-y-auto gap-8">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">Analytics</h1>
        <p class="mt-1 text-sm text-gray-400">
          Website traffic and user behavior insights
        </p>
      </div>

      <div
        class="flex gap-2 rounded-xl items-center justify-around"
        :class="!isDark ? 'bg-[#1F2933]' : 'bg-white'"
      >
        <div
          v-for="value in days"
          :key="value"
          class="flex-1 p-2 rounded-md hover:bg-[#10B981] transition-all duration-300 ease-in-out"
        >
          {{ value }}
        </div>
      </div>
    </div>

    <div>
      <ClientOnly>
        <MultiLineChart />
      </ClientOnly>
    </div>
  </div>
  <div>
    <AnalyticViewsChartItemRender />
  </div>

  <div>
    <AnalyticTrafficChartRender />
  </div>
</template>

<script setup>
import AnalyticTrafficChartRender from "~/components/chartRender/analytic-traffic-chart-render.vue";
import AnalyticViewsChartItemRender from "~/components/chartRender/analytic-views-chart-item-render.vue";
import MultiLineChart from "~/components/charts/MultiLineChart.vue";
const isDark = useState("theme", () => true);

const days = ["7d", "30d", "90d"];
</script>
