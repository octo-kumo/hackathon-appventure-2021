<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer=!drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img src="/logo.png" alt="Logo" class="h-auto w-12"/>
      <h1 class="text-xl font-semibold" v-text="name"></h1>
    </div>
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
        <NuxtLink to="/children" active-class="active-nav-menu">
          <button
            title="Children"
            class="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
            <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z"/>
            </svg>
            <span>Children</span>
          </button>
        </NuxtLink>
        <button
          @click="notifications=!notifications"
          class="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
          <svg
            :fill="notifications?'currentColor':'none'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </button>
        <NuxtLink to="/user" active-class="active-nav-menu">
          <button
            class="flex items-cente p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </NuxtLink>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0">
      <div
        @keydown.esc="drawer = false"
        v-show="drawer"
        class="z-10 fixed inset-0 transition-opacity">
        <div
          @click="drawer = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="drawer ? 'translate-x-0' : '-translate-x-full'">
      <span
        class="flex w-full items-center p-4 border-b">
        <img src="/logo.png" alt="Logo" class="h-auto w-32 mx-auto"/>
      </span>
      <NuxtLink exact to="/"
                active-class="active-nav"
                class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </span>
        <span>Home</span></NuxtLink>
      <NuxtLink to="/courses"
                active-class="active-nav"
                class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </span>
        <span>Explore Courses</span>
      </NuxtLink>
      <NuxtLink to="/children"
                active-class="active-nav"
                class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span class="mr-2">
        <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z"/>
        </svg>
        </span>
        <span>Children</span></NuxtLink>
      <NuxtLink to="/user"
                active-class="active-nav" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white">
        <span class="mr-2">
         <svg
           fill="none"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2"
           viewBox="0 0 24 24"
           stroke="currentColor"
           class="w-6 h-6">
              <path
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </span>
        <span>User</span>
      </NuxtLink>
      <NuxtLink to="/about"
                active-class="active-nav"
                class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </span>
        <span>About</span></NuxtLink>
      <NuxtLink to="/contact"
                active-class="active-nav" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
        <span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </span>
        <span>Contact</span>
      </NuxtLink>
      <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2">
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
          </svg>
          <span>Share</span>
        </button>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Parenting"
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(newValue) {
        return this.$store.commit("setDrawer", newValue);
      },
    },
    notifications: {
      get() {
        return this.$store.state.notifications;
      },
      set(newValue) {
        return this.$store.commit("setNotifications", newValue);
      },
    },
  },
  watch: {
    drawer: {
      immediate: true,
      handler(drawer) {
        if (process.client) {
          if (drawer) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27 && this.drawer) this.drawer = false;
    });
  }
};
</script>

<style scoped>
.active-nav {
  @apply bg-blue-400 text-white
}

.active-nav-menu button {
  @apply bg-blue-400 text-white
}
</style>
