<template>
    <div class="grid grid-cols-4 gap-6 mt-4">
    <StatsCard
      title="Pageviews"
      value="56.8K"
      change="+14.2% vs last period"
      :positive="true"
      
    >
      <SingleLineChart />
    </StatsCard>

    <StatsCard
      title="Bounce Rate"
      value="42.3%"
      change="-2.1%"
      :positive="false"
      
    >
      <GuageChart />
    </StatsCard>

    <StatsCard
      title="Avg. Duration"
      value="3m 28s"
      change="+5.6%"
      :positive="true"    
    >
      <RadialChart />

    </StatsCard>

    <StatsCard
      title="Sessions"
      value="89,421"
      change="+9.8%"
      :positive="true"
      
    >
      <MiniBarChart />
    </StatsCard>
  </div>
</template>

<script setup>
import StatsCard from "~/components/cards/StatsCard.vue";
import GuageChart from "~/components/charts/GuageChart.vue";
import MiniBarChart from "~/components/charts/MiniBarChart.vue";
import SingleLineChart from "~/components/charts/SingleLineChart.vue";
import RadialChart from "../charts/RadialChart.vue";
</script>