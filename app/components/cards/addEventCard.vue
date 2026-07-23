<template>
  <div class=" p-8 rounded-2xl border border-[#2e363e] max-xs:p-4" :class="isDark? 'bg-white':'bg-[#171E25]' ">
    <h2 class="font-bold text-2xl p-2 pl-0">New Event</h2>

    <form @submit.prevent="submitEvent" class="font-semibold flex flex-col gap-4">
      <div>
        <label for="title" class="block">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Event title"
          v-model="title"
          class="font-light rounded-md p-2 border border-[#2e363e] "
          :class="isDark? 'bg-white':'bg-[#1C252E]'"
          />
      </div>

      <div class="flex gap-40 max-sm:gap-25 max-xs:gap-1">
        <div>
          <label for="startDate" class="block">Start Date</label>
          <input type="date" name="" id="startDate" v-model="startDate" 
          :class="isDark? 'bg-white':'bg-[#1C252E]'"
          class="font-light rounded-md p-2 border border-[#2e363e]  mt-1" />
        </div>
        <div>
          <label for="endDate" class="block">End Date</label>
          <input type="date" name="" id="endDate" v-model="endDate" 
          :class="isDark? 'bg-white':'bg-[#1C252E]'"
          class="font-light rounded-md p-2 border border-[#2e363e]  mt-1" />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-white mb-3">Color</label>

        <div class="flex flex-wrap gap-3">
          <label class="relative cursor-pointer select-none">
            <input
              type="radio"
              name="color"
              value="#00A76F"
              v-model="selectedColor"
              class="sr-only peer"
              checked
            />
            <div
              class="w-10 h-10 rounded-full bg-[#00A76F] border-2 border-transparent 
              transition-all peer-checked:border-white peer-checked:scale-105"
            ></div>
          </label>

          <label class="relative cursor-pointer select-none">
            <input
              type="radio"
              name="color"
              value="#7635DC"
              class="sr-only peer"
              v-model="selectedColor"
            />
            <div
              class="w-10 h-10 rounded-full bg-[#7635DC] border-2 border-transparent 
              transition-all peer-checked:border-white peer-checked:scale-105"
            ></div>
          </label>

          <label class="relative cursor-pointer select-none">
            <input
              type="radio"
              name="color"
              value="#00B8D9"
              class="sr-only peer"
              v-model="selectedColor"
            />
            <div
              class="w-10 h-10 rounded-full bg-[#00B8D9] border-2 border-transparent 
              transition-all peer-checked:border-white peer-checked:scale-105"
            ></div>
          </label>

          <label class="relative cursor-pointer select-none">
            <input
              type="radio"
              name="color"
              value="#FFAB00"
              class="sr-only peer"
              v-model="selectedColor"
            />
            <div
              class="w-10 h-10 rounded-full bg-[#FFAB00] border-2 border-transparent 
              transition-all peer-checked:border-white peer-checked:scale-105"
            ></div>
          </label>

          <label class="relative cursor-pointer select-none">
            <input
              type="radio"
              name="color"
              v-model="selectedColor"
              value="#FF5630"
              class="sr-only peer"
            />
            <div
              class="w-10 h-10 rounded-full bg-[#FF5630] border-2 border-transparent 
              transition-all peer-checked:border-white peer-checked:scale-105"
            ></div>
          </label>
        </div>
      </div>

      <div>
        <label for="description" class="block">Description</label>
        <textarea name="" id="description" v-model="description" placeholder="Add a description"
         class="font-light rounded-md p-2 border border-[#2e363e] bg-[#1C252E] mt-1"
         :class="isDark? 'bg-white':'bg-[#1C252E]'"></textarea>
      </div>

      <div class="flex gap-2 items-center justify-end">
        <div class="hover:bg-[#1C252E] transition-colors duration-300 ease-in-out 
        cursor-pointer rounded-md p-4" @click="emit('close')">Cancel</div>

        <button class="bg-[#00D5BE] rounded-md p-4 text-[#2E363E] font-semibold 
        hover:bg-[#03b3a1] transition-colors duration-300 ease-in-out cursor-pointer" type="submit">+ Create Event</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const selectedColor = ref("#00A76F");
const title = ref(null);
const startDate = ref(null);
const endDate = ref(null);
const description = ref(null);
const emit = defineEmits(['close']);
const isDark = useState("theme");


const submitEvent = ()=>{
    const event= {
    title: title.value,
    start: startDate.value,
    end: endDate.value,
    color: selectedColor.value,
    }

    emit('submit',event)
}
</script>
