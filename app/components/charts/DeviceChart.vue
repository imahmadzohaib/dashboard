<template>
  <div class="w-full h-full">
    <Doughnut
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";

const chartData = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      data: [54, 37, 9],
      backgroundColor: [
        "#10B981",
        "#3B82F6",
        "#F59E0B"
      ],
      borderWidth: 0,
      cutout: "72%"
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    }
  }
};
</script>