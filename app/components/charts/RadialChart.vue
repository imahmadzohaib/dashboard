<template>
  <div class="flex items-center gap-5">

    <div class="relative h-20 w-20 left-8
    ">
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
      data:[72,28],
      backgroundColor:[
        "#8B5CF6",
        "#2E363E"
      ],
      borderWidth:0,
      cutout:"78%"
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