<template>
  <div class="bg-red">
    <h1 class="text-2xl font-bold text-red-400">Dashboard</h1>

    <p class="text-gray-400 mt-4">
      This is the dashboard content. Only two pages are currently working.
    </p>
    <p class="text-gray-400">Working page are</p>
    <div class="flex mt-4">
      <NuxtLink to="/dashboard/analytics"
        ><ButtonCard>Analytics</ButtonCard></NuxtLink
      >
      <NuxtLink to="/apps/calendar">
        <ButtonCard>Calender</ButtonCard></NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import ButtonCard from "~/components/cards/buttonCard.vue";
</script>
