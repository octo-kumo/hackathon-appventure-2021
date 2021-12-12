<template>
  <div id="base" class="flex flex-col items-center justify-center grid-cols-1">
    <div class="flex-grow flex-row justify-center text-center">
      <img src="logo.png"/>
      <h1 class="text-5xl">Course Feedback</h1>
    </div>
    <NuxtLink to="/courses">
      <button class="p-3 m-3 bg-indigo-400 text-white rounded">Explore some courses!</button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "Home"
  }),
}
</script>
