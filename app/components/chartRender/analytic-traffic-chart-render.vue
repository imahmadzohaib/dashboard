<template>
  <div class="grid grid-cols-2 gap-4 ">
    <div class=" p-6 rounded-3xl mt-10"
     :class="!isDark?'bg-[#1F2933]':'bg-white'">
      <TrafficChannelChart />
    </div>

    <div class=" p-6 rounded-3xl mt-10"
    :class="!isDark?'bg-[#1F2933]':'bg-white'">
      <DeviceBreakdownChart>
        <DeviceChart />
      </DeviceBreakdownChart>
    </div>

     <div class=" p-6 rounded-3xl mt-10"
     :class="!isDark?'bg-[#1F2933]':'bg-white'">
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
