<template>
  <div class="grid lg:grid-cols-2 gap-4 md:grid-cols-1  ">
    <div class=" p-6 rounded-3xl mt-10 min-w-0"
     :class="isDark?'bg-white':'bg-[#1F2933]'">
      <TrafficChannelChart />
    </div>

    <div class=" p-6 rounded-3xl mt-10 min-w-0"
    :class="isDark?'bg-white':'bg-[#1F2933]'">
      <DeviceBreakdownChart>
        <DeviceChart />
      </DeviceBreakdownChart>
    </div>

     <div class=" p-6 rounded-3xl mt-10 min-w-0"
     :class="isDark?'bg-white':'bg-[#1F2933]'">
      <PageRanking />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeviceBreakdownChart from "../charts/DeviceBreakdownChart.vue";
import DeviceChart from "../charts/DeviceChart.vue";
import PageRanking from "../charts/PageRanking.vue";
import TrafficChannelChart from "../charts/TrafficChannelChart.vue";
const isDark= useState("theme",()=>true)

</script>
