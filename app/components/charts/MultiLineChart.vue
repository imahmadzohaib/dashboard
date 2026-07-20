<template>
  <div class="h-96 w-full ">
    <Line
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { Line } from "vue-chartjs"

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul"
  ],
  datasets: [
    {
      label: "Impressions",
      data: [30, 42, 55, 48, 70, 80, 92],
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
      borderWidth: 3,
      tension: 0.4,
      fill: false,
      pointRadius: 4
    },
    {
      label: "Pageviews",
      data: [20, 35, 40, 38, 50, 60, 72],
      borderColor: "#10B981",
      backgroundColor: "#10B981",
      borderWidth: 3,
      tension: 0.4,
      fill: false,
      pointRadius: 4
    },
    {
      label: "Unique visitors",
      data: [10, 7, 15, 10, 20, 20, 20],
      borderColor: "#F59E0B",
      backgroundColor: "#F59E0B",
      borderWidth: 3,
      tension: 0.4,
      fill: false,
      pointRadius: 4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top" as const
    }
  },

  scales: {
    x: {
      grid: {
        color:"#787B82",
        display: true
      }
    },
    y: {
      grid:{
        color:"#787B82"
      },
      beginAtZero: true
    }
  }
}
</script>