<template>
  <div class="overflow-y-auto">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">Calendar</h1>
        <p class="mt-1 text-sm text-gray-400">Schedule and manage events</p>
      </div>
      <div
        class="bg-[#00D5BE] rounded-md p-4 text-[#2E363E] font-semibold hover:bg-[#03b3a1] transition-colors duration-300 ease-in-out cursor-pointer"
        @click="addEvent"
      >
        + New Event
      </div>
    </div>
    <div
      class="rounded-3xl p-4 mt-8"
      :class="[!isDark? 'bg-[#1C252E] outline outline-[#2E363E]': 'bg-white outline outline-[#EDEFF2]',
        isDark ? 'light-calendar': 'dark-calendar'
      ]"
    >
      <ClientOnly>
        <FullCalendar :options="calendarOptions"  />
      </ClientOnly>
    </div>

    <div v-if="showAddEvent" class="fixed inset-0 bg-[#212A33]/80 z-40"></div>

    <div
      v-if="showAddEvent"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <AddEventCard @close="closeAddEvent" @submit="handleSubmit" />
    </div>
  </div>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventCard from "~/components/cards/addEventCard.vue";

const showAddEvent = ref(false);
const isDark = useState("theme");


function addEvent() {
  showAddEvent.value = true;
}

function closeAddEvent() {
  showAddEvent.value = false;
}

function handleSubmit(newEvent) {
  events.value.push(newEvent);
  showAddEvent.value = false;
}
const events = ref([
  {
    title: "Sprint 14 Planning",
    start: "2026-07-02",
    end: "2026-07-04",
    color: "#10b981",
  },
  {
    title: "Design System Review",
    start: "2026-03-05",
    end: "2026-03-07",
    color: "#7c3aed",
  },
]);

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,title,next",
    right: "today",
  },
  editable: true,
  selectable: false,
  events: events.value,
  contentHeight: "auto",
  expandRows: true,
};
</script>

<style scoped>
.dark-calendar :deep(.fc .fc-toolbar-title) {
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
}
:deep(.fc .fc-button) {
  font-size: 14px;
  border-radius: 10px;
}

:deep(.fc .fc-toolbar-chunk > div) {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}


.dark-calendar :deep(.fc-scrollgrid) {
  border-color: #2e363e;
}

.light-calendar :deep(.fc-scrollgrid) {
  border-color: #EDEFF2;
}

.dark-calendar :deep(.fc-scrollgrid td),:deep(.fc-scrollgrid th) {
  border-color: #2e363e;
}

.light-calendar :deep(.fc-scrollgrid th) {
  border-color: #EDEFF2;
}

:deep(.fc .fc-day-today) {
  background-color: #2e363e !important;
}

.light-calendar :deep(.fc .fc-day-today) {
  background-color: #EDEFF2 !important;
}

.light-calendar :deep(.fc .fc-toolbar-title) {
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
}
</style>
