<template>
  <div class="flex items-center gap-5">

    <div class="relative h-24 w-24">
      <Doughnut
        :data="data"
        :options="options"
      />
    </div>

  </div>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";

const data={
  datasets:[
    {
      data:[42,58],
      backgroundColor:[
        "#FFAB00",
        "#2E363E"
      ],
      borderWidth:0,
      circumference:180,
      rotation:270,
      cutout:"80%"
    }
  ]
}

const options={
  responsive:true,
  plugins:{
    legend:{display:false},
    tooltip:{enabled:false}
  }
}
</script>