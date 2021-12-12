<template>
  <div id="base" class="flex flex-col space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
      <div class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
        <h2 class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">Enrichment Courses</h2>
        <a href="#" class="text-xs text-gray-800 font-semibold uppercase">More</a>
      </div>
      <div :key="t.id" v-for="t in types" @click="type=type===t.id?'':t.id"
           class="bg-white p-6 rounded-xl border border-gray-50"
           :class="type===t.id?'active-type':''">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <p class="type-name text-xs text-gray-600 tracking-wide" v-text="t.name"></p>
            <h3 class="type-amm mt-1 text-lg text-blue-500 font-bold"
                v-text="$store.state.courses.filter(c=>c.type===t.id).length"></h3>
            <span class="type-children mt-4 text-xs text-gray-500"
                  v-text="$store.state.children.filter(c=>c.courses.filter(c=>c.progress<1).some(c=>c.type===t.id)).map(c=>c.name).join(', ')"></span>
          </div>
          <div class="type-icon p-2 md:p-1 xl:p-2 rounded-md" :class="t.class">
            <img :src="t.icon" alt="icon" class="w-auto h-8 md:h-6 xl:h-8 object-cover">
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 xl:p-0 gap-4 xl:gap-6">
      <div :key="course.id" v-for="course in courses" class="py-4 px-8 bg-white shadow-md rounded-md flex flex-col">
        <h2 class="flex-none text-gray-800 text-xl font-semibold" v-text="course.name"></h2>
        <p class="flex-grow mt-2 text-gray-600" v-text="course.description"></p>
        <p class="mt-2 text-gray-600 flex space-x-2">
            <span
              class="text-sm rounded-sm px-2 py-0.5 text-gray-50"
              :class="c.courses.filter(c=>c.name===course.name).some(c=>c.progress<1)?'bg-indigo-500':'bg-gray-500'"
              v-for="c in $store.state.children.filter(c=>c.courses.some(c=>c.name===course.name))"
              :key="c.name" v-text="c.name"></span>
        </p>
        <div class="flex-none flex justify-end mt-4">
          <a href="#" class="text-md font-medium text-indigo-500">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Courses"
  }),
  data: () => ({
    type: "",
    types: [{
      id: "holistic",
      class: "bg-blue-500",
      icon: "assets/dish.png",
      name: "Holistic"
    }, {
      id: "academic",
      class: "bg-green-500",
      icon: "assets/read.png",
      name: "Academic"
    }, {
      id: "fun",
      class: "bg-yellow-500",
      icon: "assets/gaming.png",
      name: "Fun & Games"
    }, {
      id: "arts",
      class: "bg-indigo-500",
      icon: "assets/paint-palette.png",
      name: "Music & Art"
    }]
  }),
  computed: {
    courses() {
      return this.type ? this.$store.state.courses.filter(c => c.type === this.type) : this.$store.state.courses;
    }
  }
}
</script>
<style scoped>
.active-type {
  @apply bg-blue-500
}

.active-type .type-name {
  @apply text-gray-50
}

.active-type .type-amm {
  @apply text-white
}

.active-type .type-children {
  @apply text-gray-50
}

.active-type .type-icon {
  @apply bg-blue-200
}
</style>
