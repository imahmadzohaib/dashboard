<template>
  <div class="h-16 w-full">
    <Line :data="data" :options="options" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
  datasets: [{
    data: [15,18,17,20,11,10,14],
    borderColor: "#00B8D9",
    backgroundColor: "rgba(0,184,217,.15)",
    fill: true,
    tension: .45,
    pointRadius: 0,
    borderWidth: 3
  }]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display:false },
    tooltip:{ enabled:false }
  },
  scales:{
    x:{
      display:false,
      grid:{display:false},
      border:{display:false}
    },
    y:{
      display:false,
      grid:{display:false},
      border:{display:false}
    }
  }
}
</script>