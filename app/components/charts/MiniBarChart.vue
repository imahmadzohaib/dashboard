<template>
  <div class="h-20">
    <Bar
      :data="data"
      :options="options"
    />
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";

const data={
  labels:["","","","","","","","","","","",""],
  datasets:[
    {
      data:[5,7,6,8,9,4,3,6,8,9,10,9],
      backgroundColor:"#00B884",
      borderRadius:4,
      borderSkipped:false
    }
  ]
}

const options={
  responsive:true,
  maintainAspectRatio:false,

  plugins:{
    legend:{display:false},
    tooltip:{enabled:false}
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