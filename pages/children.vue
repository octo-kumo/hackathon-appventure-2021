<template>
  <div id="base" class="flex flex-col space-y-8">
    <div :key="c.name"
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6 border-indigo-50 border rounded-2xl"
         v-for="c in $store.state.children">
      <h1 v-text="c.name" class="text-4xl col-span-full pt-3 pl-6"></h1>
      <h3 v-text="c.age" class="text-xl text-gray-500 col-span-full pt-0 pl-6"></h3>
      <div class="flex flex-col rounded-md shadow-md hover:bg-indigo-50 m-3 p-5" :key="course.name"
           @click="$set(opened,course.name,!opened[course.name])"
           v-for="course in [...c.courses].sort((a, b) =>a.progress - b.progress)">
        <h1 v-text="course.name" class="font-semibold text-lg m-0.5 hover:text-indigo-700 hover:underline"
            :class="course.progress<1?'text-current':'text-gray-500'"></h1>
        <h1 v-text="`CAP: ${course.cap}`" class="font-semibold text-md m-0.5"
            :class="course.progress<1?'text-current':'text-gray-500'"></h1>
        <p class="flex-grow m-0.5">
          <span v-if="opened[course.name]&&getCourse(course.name).description"
                v-text="getCourse(course.name).description"></span>
        </p>
        <div class="inline-flex items-center justify-center overflow-hidden rounded-full "
             v-if="course.motivation||course.motivation===0">
          <svg class="w-20 h-20">
            <circle
              class="text-gray-300"
              stroke-width="5"
              stroke="currentColor"
              fill="transparent" :r="radius" :cx="radius+10" :cy="radius+10"/>
            <circle
              :class="getColor(course.motivation)"
              stroke-width="5"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference - course.motivation/10 * circumference"
              stroke-linecap="round"
              stroke="currentColor" fill="transparent" :r="radius" :cx="radius+10" :cy="radius+10"/>
          </svg>
          <img class="absolute" :src="getEmote(course.motivation)" :width="radius*2-3" :height="radius*2-3">
        </div>
        <div class="relative pt-1">
          <div class="overflow-hidden h-1 text-xs flex rounded bg-indigo-200">
            <div :style="`width:${100*course.progress}%`"
                 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                 :class="course.progress<1?'bg-indigo-500':'bg-green-500'"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Children"
  }),
  data: () => ({
    radius: 30,
    circumference: 30 * 2 * Math.PI,
    opened: {}
  }),
  methods: {
    getCourse(name) {
      return this.$store.state.courses.find(c => c.name === name);
    },
    getEmote(motive) {
      if (motive > 9) return "/assets/cb91d362742dcc886e4a4c3f981f3365.svg"
      if (motive > 7) return "/assets/66f6c781fe86c346fbaf3390618668fc.svg"
      if (motive > 6) return "/assets/da3651e59d6006dfa5fa07ec3102d1f3.svg"
      if (motive > 4) return "/assets/fa9b378aed10bba1aea54ca34e76fe4b.svg"
      if (motive > 2) return "/assets/fc5c8aa09047ef94d2c380891feff0f4.svg"
      return "/assets/2ea1f6bba4448fa4e8d9504fe976095d.svg"
    },
    getColor(motive) {
      if (motive > 9) return "text-green-500"
      if (motive > 7) return "text-green-700"
      if (motive > 6) return "text-blue-500"
      if (motive > 4) return "text-yellow-600"
      if (motive > 2) return "text-red-500"
      return "text-red-500"
    }
  }
}
</script>
